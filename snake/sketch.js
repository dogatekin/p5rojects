class Snake {
  constructor() {
    this.x = 5
    this.y = 10
    this.offset = 10
    this.speed = 5
    this.dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    this.d = 0
  }

  update() {
    let [dx, dy] = this.dirs[this.d]
    this.x += this.speed*dx
    this.y += this.speed*dy
    if ((this.d == 0 && this.x >= width - this.offset) ||
        (this.d == 1 && this.y >= height - this.offset) ||
        (this.d == 2 && this.x <= this.offset) ||
        (this.d == 3 && this.y <= this.offset)) {
      this.d = (this.d + 1) % 4
      if (this.d == 3) {
        this.offset += 20
      }
    }
  }

  draw() {
    fill(0)
    ellipse(this.x, this.y, 10)
  }
}

function setup() {
  createCanvas(640, 360)
  snake = new Snake()
  background(180)
}

function draw() {
  snake.update()
  snake.draw()
}