function RandomRgbaOld() {
  let num = Math.floor(Math.random() * "0xffffff");
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  let a = Math.min(Math.floor(Math.random() * 3), 1);
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function RandomRgba() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.min(Math.floor(Math.random() * 3), 1);
  return [r, g, b, a];
}

function Distance(p1, p2) {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  let dist = Math.sqrt(dx * dx + dy * dy);
  return dist;
}

function RandomRange(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}
