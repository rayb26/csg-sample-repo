import { Shape } from "./shape"
import { calculateArea, calculatePerimeter } from './utils';

export class Rectangle extends Shape { 

    constructor(public length: number, public width: number) {
        super('Rectangle');
    }

    calculateArea(): number {
        return calculateArea(this.length, this.width);
    }

    calculatePerimeter(): number {
        return calculatePerimeter(this.length, this.width);
    }


}