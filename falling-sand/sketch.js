let t = () => millis() / 1000;
let bg, yellow, orange, pink, colors;
let s = [];

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.setup = function () {
  let canvas = createCanvas(128, 128);
  canvas.style('width', '400px');
  canvas.style('height', '400px');

  frameRate(30);

  bg = color(31, 44, 80);
  yellow = color(253, 235, 87);
  pink = color(225, 187, 160);
  orange = color(243, 166, 59);
  colors = [yellow, pink];

  background(bg);
}

window.draw = function () {
  // loadPixels();

  for (let i = 0; i <= 5; i++) {
    s.push([random(10) + 59, random(3), choice(colors)]);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    let [x, y, c] = s[i];

    set(x, y, bg);

    let m = 0;

    for (let j = 1; j <= 3; j++) {
      let u = j % 3 - 1;
      if (get(x + u, y + 1)[0] == red(bg)) {
        x += u;
        y += 1;
        m = 1;
      }
    }

    set(x, y, c);
    s[i][0] = x
    s[i][1] = y

    if (m < 1 && Math.random() < 0.1) {
      set(x, y, orange);
      s.splice(i, 1);
    }

    updatePixels();
  }
}