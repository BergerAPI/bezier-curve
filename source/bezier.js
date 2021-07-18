class Bezier {
  constructor(power) {
    this.power = power;
  }

  draw(p1, p2, p3) {
    // Make the code more understandable
    let max = 1;
    let size = 2;

    // 't' needs to be between 0 and 1
    // Iterating though the 't' value and drawing
    // every single point on the bezier curve
    for (let t = 0; t < max; t += 0.001) {
      let x =
        Math.pow(max - t, this.power) * p1.x +
        size * (max - t) * t * p2.x +
        Math.pow(t, this.power) * p3.x;
      let y =
        Math.pow(max - t, this.power) * p1.y +
        size * (max - t) * t * p2.y +
        Math.pow(t, this.power) * p3.y;

      ellipse(x, y, 1);
    }
  }
}