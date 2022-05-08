let t;
let night, water, moon;
let moonx = 30,
  moony = 22,
  moonr = 15;
let w = 128;
let h = 128;
let stars = [];

window.setup = function () {
  let canvas = createCanvas(w, h);

  frameRate(30);
  pixelDensity(2);

  t = () => millis() / 1000;

  night = color(20);
  water = color(31, 44, 80);
  moon = color(253, 241, 233);

  canvas.style('width', '400px');
  canvas.style('height', '400px');

  randomSeed(5);
  for (let i = 0; i < 30; i++) {
    let x = random(w);
    let y = random(50);
    let f = TAU * random(0.1);
    stars.push([x, y, f]);
  }
}

window.draw = function () {
  randomSeed(0);

  if (mouseIsPressed) {
    moonx = mouseX;
    moony = mouseY;
  }

  background(night);
  noStroke();
  fill(moon);

  // for (let [x, y, f] of stars) {
  //   ellipse(x, y, 0.4 + 0.8*sin(f*t()));
  // }

  ellipse(moonx, moony, 2 * moonr);

  noStroke();
  fill(night);
  rect(0, 50, w, 78);

  for (let y = 0; y <= 78; y++) {
    let z = 78 / (y + 1);

    for (let i = 0; i <= 8 * z; i++) {
      let x = (random(160) + t() * 150 / z) % 160 - 16;
      let w = cos(2 * PI * (random() + t())) * 12 / z;

      if (w > 0) {
        let ry = 49 - y / 2;
        let d2 = (moonx - x) ** 2 + (moony - ry) ** 2
        if (d2 < moonr ** 2) {
          stroke(moon);
        } else {
          stroke(water);
        }

        line(x - w, y + 50, x + w, y + 50);
      }
    }
  }
}