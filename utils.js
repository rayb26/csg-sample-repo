"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLargestShape = exports.calculatePerimeter = exports.calculateArea = void 0;
function calculateArea(length, width) {
    return length * width;
}
exports.calculateArea = calculateArea;
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}
exports.calculatePerimeter = calculatePerimeter;
function findLargestShape(shapes) {
    if (shapes.length == 0) {
        return undefined;
    }
    var largestShape = shapes[0];
    var largestArea = shapes[0].calculateArea();
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        var area = shape.calculateArea();
        if (area > largestArea) {
            largestShape = shape;
            largestArea = area;
        }
    }
    return largestShape;
}
exports.findLargestShape = findLargestShape;
