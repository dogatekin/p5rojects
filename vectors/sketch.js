function setup() {
  createCanvas(640, 360)
}

function draw() {
  background(180)
  stroke(0)
  strokeWeight(2)
  
  let origin = createVector(width/2, height/2)
  let mouse = createVector(mouseX, mouseY)
  dir = p5.Vector.sub(mouse, origin)

  line(origin.x, origin.y, mouse.x, mouse.y)

  angleMode(DEGREES)
  let l = p5.Vector.add(mouse, p5.Vector.sub(origin, mouse).rotate(15).setMag(15))
  let r = p5.Vector.add(mouse, p5.Vector.sub(origin, mouse).rotate(-15).setMag(15))
  fill(0)
  triangle(mouse.x, mouse.y, l.x, l.y, r.x, r.y)
}