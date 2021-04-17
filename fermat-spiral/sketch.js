function setup() {
  createCanvas(640, 360)
  angle = 0
}

function draw() {
  background(180)
  // clear()
  noFill()

  size = 100
  spiralWidth = 10
  angle += 0.001

  if (mouseIsPressed) {
    angle += 0.1
  }

  drawSpiral()
  // fill(0)
  // text(angle, 10, 10)
}

function drawSpiral() {
  a_oldX = width / 2;
  a_oldY = height / 2;

  for (let i = 0; i < size; i++) {
    a_newAngle = angle*i;
    a_x = (width / 2) + (spiralWidth * Math.sqrt(a_newAngle)) * Math.cos(a_newAngle);
    a_y = (height / 2) + (spiralWidth * Math.sqrt(a_newAngle)) * Math.sin(a_newAngle);

    stroke('red')
    line(a_oldX, a_oldY, a_x, a_y);
    a_oldX = a_x;
    a_oldY = a_y;
  }

  b_oldX = width / 2;
  b_oldY = height / 2;

  for (let i = 0; i < size; i++) {
    b_newAngle = angle*i;
    b_x = (width / 2) - (spiralWidth * Math.sqrt(b_newAngle)) * Math.cos(b_newAngle);
    b_y = (height / 2) - (spiralWidth * Math.sqrt(b_newAngle)) * Math.sin(b_newAngle);

    stroke('blue')
    line(b_oldX, b_oldY, b_x, b_y);
    b_oldX = b_x;
    b_oldY = b_y;
  }
}