import { Shape } from "./shape"
import { calculateArea, calculatePerimeter } from './utils';

export class Rectangle extends Shape { 

    constructor( public name:string, public length: number, public width: number, public color?:string) {
        super(name);
    }

    calculateArea(): number {
        return calculateArea(this.length, this.width);
    }

    calculatePerimeter(): number {
        return calculatePerimeter(this.length, this.width);
    }
    displayColor(): void {
        if (this.color !== undefined) {
            console.log(this.color)
        }
        else {
            console.log("The color is undefined")
        }
    }

    toString(): string {

        return "Name " + this.name + ", color " + this.color + ", length: " + this.length + ", width: " + this.width;
    }


}