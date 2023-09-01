import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";
import { calculateArea, findLargestShape } from "./utils";


const rectangle = new Rectangle("bob", 10, 3)



console.log(rectangle.calculatePerimeter())

console.log(calculateArea(rectangle.length, rectangle.width))


let shapes: Shape[] = [];

shapes.push(new Rectangle("john", 10, 3, "red"))
shapes.push(new Rectangle("joe", 5, 3, "green"))
shapes.push(new Rectangle("ray", 1, 3, "purple"))
shapes.push(new Rectangle("nick", 5, 5, "blue"))

console.log("the largest shape from this array is: " + findLargestShape(shapes))

