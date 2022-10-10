export class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export class Triangle {
  firstSide: number;
  secondSide: number;
  thirdSide: number;

  constructor(firstSide: number, secondSide: number, thirdSide: number) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }

  getArea(): number {
    var p = (this.firstSide + this.secondSide + this.thirdSide) / 2;
    return Math.sqrt(
      p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
    );
  }
}

export class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getDiameter(): number {
    return this.radius * 2;
  }

  getArea(): number {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
