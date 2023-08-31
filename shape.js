"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.toString = function () {
        return "This is a general rectangle";
    };
    return Shape;
}());
exports.Shape = Shape;
