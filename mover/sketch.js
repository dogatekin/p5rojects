let mover

function setup() {
  createCanvas(640, 360)
  mover = new Mover(width/2, height/2)
}

function draw() {
  background(180)
  
  mover.update()
  mover.show()

  // show vel
  line(mover.pos.x, mover.pos.y, mover.pos.x + 10*mover.vel.x, mover.pos.y + 10*mover.vel.y)
  // show acc
  // line(mover.pos.x, mover.pos.y, mover.pos.x + 500*mover.acc.x, mover.pos.y + 500*mover.acc.y)
}