import { Circle, Rectangle, Triangle } from "./library";

const circle = new Circle(10);
console.log(circle.getDiameter(), circle.getArea());

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea());

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());
