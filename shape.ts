export abstract class Shape {
    constructor(public name: string) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
    abstract displayColor(): void; 
    
    toString(): string {
        return "This is a general rectangle"
    }
}