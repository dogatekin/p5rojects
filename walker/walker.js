class Walker {
  constructor(x, y, mul=1) {
    this.pos = createVector(x, y)
    this.vel = createVector(mul, 0)
    this.mul = mul
  }

  update() {
    this.vel = p5.Vector.random2D().mult(this.mul)
    this.pos.add(this.vel)
    
    this.pos.x = constrain(this.pos.x, 0, width)
    this.pos.y = constrain(this.pos.y, 0, height)
  }

  show() {
    stroke(0)
    strokeWeight(2)
    point(this.pos.x, this.pos.y)
  }
}