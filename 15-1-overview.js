class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
  toString() {
    return super.toString() + ' in ' + this.color;
  }
}

const cp = new ColorPoint(23, 8, 'green');

cp.toString();

console.log('console.log(cp instanceof ColorPoint);');
console.log(cp instanceof ColorPoint);

console.log('console.log(cp instanceof Point);');
console.log(cp instanceof Point);

console.log('typeof Point');
console.log(typeof Point);

var c = new Point(25, 8);
c.toString();

typeof Point;


