class Point {
  constructor(x, y, xOff, yOff) {
    this.x = x;
    this.y = y;
    this.xOff = xOff;
    this.yOff = yOff;
  }

  move(speed) {
    this.x = noise(this.xOff) * width / 1.2;
    this.y = noise(this.yOff) * height / 1.2;

    this.xOff += speed;
    this.yOff += speed;
  }
}
