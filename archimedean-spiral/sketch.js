function setup() {
  createCanvas(640, 360)
  angle = 0
}

function draw() {
  background(180)
  // background(0, 0, 50)
  noFill()

  size = 100
  spiralWidth = 1
  angle += 0.001

  // if (mouseIsPressed) {
  //   angle += 0.1
  // }

  drawSpiral()
}

function drawSpiral() {
  oldX = width / 2;
  oldY = height / 2;

  // colorMode(HSB);
  // stroke((1000*angle)%360, 100, 100)

  for (let i = 0; i < size; i++) {
    newAngle = angle * i;
    x = (width / 2) + (spiralWidth * newAngle) * Math.sin(newAngle);
    y = (height / 2) + (spiralWidth * newAngle) * Math.cos(newAngle);

    line(oldX, oldY, x, y);
    oldX = x;
    oldY = y;
  }
}