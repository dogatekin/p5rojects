class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
  }

  update() {
    let mouse = createVector(mouseX, mouseY)
    this.acc = p5.Vector.sub(mouse, this.pos)
    this.acc.setMag(0.1)

    this.vel.add(this.acc)
    this.vel.limit(3)
    
    this.pos.add(this.vel)
    
    // this.pos.x = constrain(this.pos.x, 0, width)
    // this.pos.y = constrain(this.pos.y, 0, height)
  }

  show() {
    stroke(0)
    fill(0)
    strokeWeight(2)
    point(this.pos.x, this.pos.y)
    ellipse(this.pos.x, this.pos.y, 10)
  }
}