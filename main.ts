import { Rectangle } from "./rectangle";
import { calculateArea } from "./utils";

const rectangle = new Rectangle(10, 3)



console.log(rectangle.calculatePerimeter())

console.log(calculateArea(rectangle.length, rectangle.width))