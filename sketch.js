let p1 = new Point(100, 100, 4, 1);
let p2 = new Point(300, 200, 3, 2);
let p3 = new Point(100, 300, 2, 3);

let curve1 = new Bezier(2);
let curve2 = new Bezier(3);

let speed = 0.01;
let mouse = false;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  stroke(252, 118, 106);

  curve1.draw(p1, p2, p3);
  curve2.draw(p1, p2, p3);

  p1.move(speed);
  p2.move(speed);
  p3.move(speed);

  if (mouse) {
    p2.x = mouseX;
    p2.y = mouseY;
  }
}

function mousePressed() {
  mouse = !mouse;
}
