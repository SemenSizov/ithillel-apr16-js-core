class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  getRadius(){
    return this._radius;
  }

  get radius() {
    return this._radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }

  set radius(radius){
    if (radius <= 0) throw new Error('Radius can not be zero or less.')
    this._radius = radius
  }

  setRadius(radius){
    if (radius <= 0) throw new Error('Radius can not be zero or less.')
    this._radius = radius
  }
}

const circle = new Circle(5)
console.log(circle.radius);
console.log(circle.getRadius());
console.log(circle.area);
circle.radius = 6
console.log(circle.area);
circle.setRadius(7)
console.log(circle.area);
// circle.radius = -1

