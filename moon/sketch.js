let t;
let night, water, moon;

window.setup = function () {
  let canvas = createCanvas(128, 128);
  
  frameRate(30);
  
  t = () => millis() / 1000;
  
  night = color(20);
  water = color(31, 44, 80);
  moon = color(253, 241, 233);
  
  background(night);
  noStroke();
  fill(moon);
  ellipse(30, 22, 30);
  
  loadPixels();
  canvas.style('width', '400px');
  canvas.style('height', '400px');
}

window.draw = function () {
  randomSeed(0);
  
  // background(night);
  // noStroke();
  // fill(moon);
  // ellipse(30, 22, 30);
  // ellipse(mouseX, mouseY, 30);
  
  noStroke();
  fill(night);
  rect(0, 50, 128, 78);
  
  for (let y = 0; y <= 78; y++) {
    let z = 78 / (y + 1);
    
    for (let i = 0; i <= 8 * z; i++) {
      let x = (random(160) + t() * 150 / z) % 160 - 16;
      let w = cos(2 * PI * (random() + t())) * 12 / z;

      if (w > 0) {
        // if (get(x, 49 - y / 2)[0] == red(moon)) {
        if (x < 70 && pixels[((79 - y / 2) * width + Math.floor(x)) * pixelDensity() * 4] == red(moon)) {
          stroke(moon);
        } else {
          stroke(water);
        }
        noFill();
        line(x - w, y + 50, x + w, y + 50);
      }
    }
  }
}