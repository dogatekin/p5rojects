let start = 0
let inc = 0.01

function setup() {
  createCanvas(640, 360)
  pixelDensity(1)
}

function draw() {
  loadPixels()
  
  let yoff = start
  for (let y = 0; y < height; y++) {
    let xoff = start
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4
      let r = noise(xoff, yoff) * 255

      pixels[index] = r
      pixels[index+1] = r
      pixels[index+2] = r
      pixels[index+3] = 255

      xoff += inc
    }
    yoff += inc
  }
  start += inc*2
  updatePixels()
}