var canvas = document.getElementById('live_canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

//#region GLOBALS
var stars;
var mouse = {
  x: undefined,
  y: undefined,
};
//#endregion

//#region  MOUSE EVENTS
window.addEventListener('mousemove', MouseMove);
window.addEventListener('click', MouseClick);
window.addEventListener('resize', WindowResize);
window.addEventListener('keypress', KeyPress);

function MouseMove(event) {
  mouse.x = event.x;
  mouse.y = event.y;
}

function MouseClick(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  let radius = RandomRange(MIN_RADIUS, MAX_RADIUS);
  let speed = RandomRange(MIN_SPEED, MAX_SPEED);
  let rotationRadius = 0;
  let star = new Star(mouse.x, mouse.y, 0, 0, radius, speed, rotationRadius);
  stars.push(star);
  //   SetStarsTrackMouse();
}

function WindowResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function KeyPress(event) {}
//#endregion

function SetStarsTrackMouse() {
  for (let star of stars) {
    let dx = star.pos.x - mouse.x;
    let dy = star.pos.y - mouse.x;
    let angle = Math.atan2(dy, dx) + Math.PI;
    star.setDirection(angle);
  }
}

function CreateStars() {
  stars = [];
  for (let i = 0; i < STARS_NUM; i++) {
    let radius = RandomRange(MIN_RADIUS, MAX_RADIUS);
    let x = Math.floor(Math.random() * canvas.width) - 2 * radius;
    let y = Math.floor(Math.random() * canvas.height - 2 * radius);
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;
    let speed = RandomRange(MIN_SPEED, MAX_SPEED);
    let rotationRadius = RandomRange(MIN_ROTATION_RADIUS, MAX_ROTATION_RADIUS);
    let star = new Star(x, y, cx, cy, radius, speed, rotationRadius);
    stars.push(star);
  }
}

function DrawStars() {
  stars.forEach((star) => {
    star.Draw();
    star.Update();
  });
}

function DrawLines() {
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      let dist = Distance(stars[i].pos, stars[j].pos);
      if (dist < MIN_DISTANCE) {
        ctx.beginPath();
        let brightness = Math.floor(
          ((MIN_DISTANCE - dist) / MIN_DISTANCE) * 255
        );
        ctx.strokeStyle =
          'rgba(' +
          brightness +
          ', ' +
          brightness +
          ', ' +
          brightness +
          ', 0.95)';
        ctx.moveTo(stars[i].pos.x, stars[i].pos.y);
        ctx.lineTo(stars[j].pos.x, stars[j].pos.y);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

/* MAIN */
function Setup() {
  CreateStars();
}

function Draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(Draw);
  DrawStars();
  DrawLines();
}

Setup();
Draw();
