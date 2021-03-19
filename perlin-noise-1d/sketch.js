start = 0
inc = 0.01

function setup() {
  createCanvas(640, 360)
}

function draw() {
  background(180)
  stroke(0)
  noFill()
  
  xoff = start
  beginShape()
  for (let x = 0; x < width; x++) {
    xoff += inc
    y = noise(xoff) * height
    vertex(x, y)
  }
  endShape()

  fill(0)
  ellipse(width, y, 15)
  
  start += inc*2
}