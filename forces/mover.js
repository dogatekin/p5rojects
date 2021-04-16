class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.m = 1
    this.r = 10
  }

  applyForce(force) {
    this.acc.add(force.div(this.m))
  }

  bounce() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r
      this.vel.y *= -1
    }
    if (this.pos.y <= 0) {
      this.pos.y = 0
      this.vel.y *= -1
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r
      this.vel.x *= -1
    }
    if (this.pos.x <= 0) {
      this.pos.x = 0
      this.vel.x *= -1
    }
  }

  update() {
    this.vel.add(this.acc)
    this.vel.limit(10)
    
    this.pos.add(this.vel)

    this.bounce()
  }

  show() {
    stroke(0)
    fill(0)
    ellipse(this.pos.x, this.pos.y, 2*this.r)
  }
}