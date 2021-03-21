class Walker {
  constructor(x, y, mul=1) {
    this.pos = createVector(x, y)
    this.mul = mul
  }

  update() {
    this.pos.x += random(-1, 1) * this.mul
    this.pos.y += random(-1, 1) * this.mul
  }

  show() {
    stroke(0)
    strokeWeight(2)
    point(this.pos.x, this.pos.y)
  }
}