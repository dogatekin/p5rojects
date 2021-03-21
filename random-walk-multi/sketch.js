let x, y
let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
let mul = 20

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

  let r = floor(random(dirs.length))
  let [dx, dy] = dirs[r]
  let newx = x + dx*mul
  let newy = y + dy*mul
  
  line(x, y, newx, newy)
  
  x = constrain(newx, 0, width)
  y = constrain(newy, 0, height)
}