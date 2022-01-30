let t = () => millis() / 1000;
let colors;
let TAU;

function mod(n, m) {
  return ((n % m) + m) % m;
}

window.setup = function () {
  let canvas = createCanvas(128, 128);
  canvas.style('width', '400px');
  canvas.style('height', '400px');

  colors = [
    color(0, 0, 0),
    color(83, 173, 248),
    color(31, 44, 80),
    color(116, 45, 82),
    color(174, 43, 81),
    color(235, 51, 82),
    color(238, 128, 167),
    color(247, 205, 175),
    color(241, 161, 135),
    color(238, 116, 59),
    color(243, 166, 59),
    color(253, 235, 87)
  ];

  TAU = 2 * PI;

  frameRate(30);
  noFill();
}

window.draw = function () {
  let st = t() / 2;

  let mx = width / 2;
  let my = height / 2;

  for (let i = 1; i <= 250; i++) {
    st -= 0.001 + sin(TAU * st / 5) * 0.003;

    let x = mx + sin(TAU * st) * 30;
    let y = my + cos(TAU * st) * 30;

    let ind = Math.floor(mod(i * 0.044 - t() * 10, 11)) + 1;
    let c = colors[ind];

    stroke(c);
    ellipse(x, y, i);
  }
}