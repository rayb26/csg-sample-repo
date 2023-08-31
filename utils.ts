
import { Shape } from "./shape";
export function calculateArea(length: number, width: number): number {
    return length * width;
}

export function calculatePerimeter(length: number, width: number): number {
    return 2 * (length + width);
}

export function findLargestShape(shapes: Shape[]): Shape | undefined {

    if (shapes.length == 0) {
        return undefined
    }

    let largestShape = shapes[0]
    let largestArea = shapes[0].calculateArea()

    for (const shape of shapes) {

        const area = shape.calculateArea() 

        if (area > largestArea) {
            largestShape = shape 
            largestArea = area 
        }

    }

    return largestShape 


}
