let t;
let night, water, moon;
let moonx = 30,
  moony = 22,
  moonr = 15;

window.setup = function () {
  let canvas = createCanvas(128, 128);

  frameRate(30);
  // pixelDensity(1);

  t = () => millis() / 1000;

  night = color(20);
  water = color(31, 44, 80);
  moon = color(253, 241, 233);

  background(night);
  noStroke();
  fill(moon);
  ellipse(moonx, moony, 2 * moonr);

  // loadPixels();
  canvas.style('width', '400px');
  canvas.style('height', '400px');
}

window.draw = function () {
  randomSeed(0);

  noStroke();
  fill(night);
  rect(0, 50, 128, 78);

  for (let y = 0; y <= 78; y++) {
    let z = 78 / (y + 1);

    for (let i = 0; i <= 8 * z; i++) {
      let x = (random(160) + t() * 150 / z) % 160 - 16;
      let w = cos(2 * PI * (random() + t())) * 12 / z;

      if (w > 0) {
        if ((moonx - x) ** 2 + (moony - (y / 2) ** 2) < (moonr / 16) ** 2) {
          stroke(moon);
        } else {
          stroke(water);
        }

        line(x - w, y + 50, x + w, y + 50);
      }
    }
  }
}