let x, y
let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
let mul = 1

function setup() {
  createCanvas(640, 360)
  x = width / 2
  y = height / 2
  background(180)
}

function draw() {
  stroke(0)
  strokeWeight(2)
  point(x, y)

  let r = floor(random(4))
  let [dx, dy] = dirs[r]
  x += dx*mul
  y += dy*mul
}