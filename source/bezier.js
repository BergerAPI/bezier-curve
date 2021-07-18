class Bezier {
  constructor(power) {
    this.power = power;
  }

  draw(p1, p2, p3) {
    colorMode(HSB);
    
    // t needs to be between 0 and 1
    for (let t = 0; t < 1; t += 0.001) {
      let x =
        Math.pow(1 - t, this.power) * p1.x +
        2 * (1 - t) * t * p2.x +
        Math.pow(t, this.power) * p3.x;
      let y =
        Math.pow(1 - t, this.power) * p1.y +
        2 * (1 - t) * t * p2.y +
        Math.pow(t, this.power) * p3.y;

      stroke((t * 100 + frameCount) % 360, 100, 100);
      ellipse(x, y, 1);
    }
  }
}
