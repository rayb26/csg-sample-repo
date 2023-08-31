import { Shape } from './shape';

export class Circle extends Shape {
    constructor(public radius: number, public color:string) {
        super('Circle');
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    displayColor(): void {
        console.log("Color " + this.color)
    }
    toString(): string {
       return "this is a circle with color " + this.color
    }
}