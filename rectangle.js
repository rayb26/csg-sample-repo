"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var utils_1 = require("./utils");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, length, width, color) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.length = length;
        _this.width = width;
        _this.color = color;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return (0, utils_1.calculateArea)(this.length, this.width);
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (0, utils_1.calculatePerimeter)(this.length, this.width);
    };
    Rectangle.prototype.displayColor = function () {
        if (this.color !== undefined) {
            console.log(this.color);
        }
        else {
            console.log("The color is undefined");
        }
    };
    Rectangle.prototype.toString = function () {
        return "Name " + this.name + ", color " + this.color + ", length: " + this.length + ", width: " + this.width;
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
