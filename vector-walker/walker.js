class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
  }

  update() {
    this.acc = p5.Vector.random2D()

    this.vel.add(this.acc)
    this.pos.add(this.vel)

    this.vel.limit(3)
    
    this.pos.x = constrain(this.pos.x, 0, width)
    this.pos.y = constrain(this.pos.y, 0, height)
  }

  show() {
    stroke(0)
    strokeWeight(2)
    point(this.pos.x, this.pos.y)
  }
}