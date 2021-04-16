let mover

function setup() {
  createCanvas(640, 360)
  mover = new Mover(width / 2, height / 4)
}

function draw() {
  background(180)

  let gravity = createVector(0, 0.5)
  let wind = createVector(0.1, 0)

  mover.applyForce(gravity)
  if (mouseIsPressed) {
    // mover.applyForce(wind)
    pull = createVector(mouseX, mouseY).sub(mover.pos).normalize()
    mover.applyForce(pull)
  }
  // show vel
  // line(mover.pos.x, mover.pos.y, mover.pos.x + 10*mover.vel.x, mover.pos.y + 10*mover.vel.y)
  // show acc
  // line(mover.pos.x, mover.pos.y, mover.pos.x + 100*mover.acc.x, mover.pos.y + 100*mover.acc.y)
  mover.update()
  mover.show()
}