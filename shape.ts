export abstract class Shape {
    constructor(public name: string) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}