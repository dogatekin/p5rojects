let walker

function setup() {
  createCanvas(640, 360)
  background(180)
  walker = new Walker(width/2, height/2, 5)
}

function draw() {
  walker.update()
  walker.show()
}