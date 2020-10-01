class Star {
  constructor(x, y, cx, cy, radius, speed, rotationRadius) {
    this.pos = { x: x, y: y };
    this.cpos = { x: cx, y: cy };
    this.radius = radius;
    this.speed = speed;
    this.angle = Math.random() * 2 * Math.PI;
    let vx = speed * Math.cos(this.angle);
    let vy = speed * Math.sin(this.angle);
    this.velocity = { x: vx, y: vy };
    let val = Math.floor(Math.random() * 255) + 250;
    let a = Math.min(Math.floor(Math.random() * 3), 1);
    this.color = "rgba(" + val + "," + val + "," + val + "," + a + ")";
    this.brightness = a;
    this.rotationVelocity = ROTATION_VELOCITY;
    this.rotationRadius = rotationRadius;
  }

  Draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }

  Update() {
    //this.CircularMotion();
    this.LinearMotion();
  }

  LinearMotion() {
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
    this.CheckCanvasCollisionMirror();
  }

  CircularMotion() {
    this.angle += this.rotationVelocity;
    this.pos.x = this.cpos.x + Math.cos(this.angle) * this.rotationRadius;
    this.pos.y = this.cpos.y + Math.sin(this.angle) * this.rotationRadius;
  }

  CheckCanvasCollision() {
    // left
    if (this.pos.x < 0) {
      this.pos.x = canvas.width;
    }
    // right
    if (this.pos.x > canvas.width) {
      this.pos.x = 0;
    }
    // top
    if (this.pos.y < 0) {
      this.pos.y = canvas.height;
    }
    // bottom
    if (this.pos.y > canvas.height) {
      this.pos.y = 0;
    }
  }

  CheckCanvasCollisionMirror() {
    // left or right
    if (
      this.pos.x - this.radius < 0 ||
      this.pos.x + this.radius > canvas.width
    ) {
      this.velocity.x *= -1;
    }
    // top
    if (this.pos.y - this.radius < 0) {
      this.velocity.y *= -1;
    }
    // bottom
    if (this.pos.y + this.radius > canvas.height) {
      this.velocity.y *= -1;
    } else {
      //this.velocity.y += gravity;
    }
  }

  SetBrightness(brightness) {
    this.brightness = brightness;
    let r = this.colorRgba.r;
    let g = this.colorRgba.g;
    let b = this.colorRgba.b;
    let a = brightness;
    this.color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  SetRadius(radius) {
    this.radius = radius;
  }

  SetDirection(angle) {
    let vx = this.speed * Math.cos(angle);
    let vy = this.speed * Math.sin(angle);
    this.velocity = { x: vx, y: vy };
  }

  SetCenter(cx, cy) {
    this.cpos = { x: cx, y: cy };
  }
}
