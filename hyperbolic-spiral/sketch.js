function setup() {
  createCanvas(640, 360)
  angle = 0
}

function draw() {
  background(180)
  noFill()

  size = 100
  spiralWidth = 10000
  angle += 0.001

  drawSpiral()
}

function drawSpiral() {
  oldX = width / 2;
  oldY = height / 2;

  for (let i = 0; i < size; i++) {
    newAngle = angle * i;
    x = (width / 2) + (spiralWidth / newAngle) * Math.cos(newAngle);
    y = (height / 2) + (spiralWidth / newAngle) * Math.sin(newAngle);

    line(oldX, oldY, x, y);
    oldX = x;
    oldY = y;
  }
}