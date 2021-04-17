function setup() {
  createCanvas(640, 360)
  angle = 0
}

function draw() {
  background(180)
  // clear()
  noFill()

  size = 100
  spiralWidth = 1
  angle += 0.001

  // if (mouseIsPressed) {
  //   angle += 0.1
  // }

  drawSpiral()
  // fill(0)
  // text(angle, 10, 10)
}

function drawSpiral() {
  oldX = width / 2;
  oldY = height / 2;

  for (let i = 0; i < size; i++) {
    newAngle = angle * i;
    x = (width / 2) + (spiralWidth * newAngle) * Math.sin(newAngle);
    y = (height / 2) + (spiralWidth * newAngle) * Math.cos(newAngle);

    // stroke(randomColor()); // Random Color for each line segment
    // strokeWeight(randomWeight()); // Random Weight (1-5)

    // ellipse(x, y, 1)
    line(oldX, oldY, x, y);
    oldX = x;
    oldY = y;
  }
}