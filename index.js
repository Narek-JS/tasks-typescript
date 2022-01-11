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
var Airplane = /** @class */ (function () {
    function Airplane(name) {
        this.name = name;
        this.isFlying = false;
    }
    Airplane.prototype.takeOff = function () {
        this.isFlying = true;
    };
    Airplane.prototype.land = function () {
        this.isFlying = false;
    };
    return Airplane;
}());
var airplane1 = new Airplane('hay');
var airplane2 = new Airplane('rus');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    Person.prototype.eat = function (food) {
        this.stomach.push(food);
    };
    Person.prototype.clearFood = function (food) {
        var filteredStomach = this.stomach.filter(function (item) { return item !== food; });
        this.stomach = filteredStomach;
    };
    Person.prototype.clearAll = function () {
        this.stomach = [];
    };
    return Person;
}());
var men = new Person('Narek', 21);
men.eat('pizza');
men.clearFood('pizza');
men.clearAll();
var Baby = /** @class */ (function (_super) {
    __extends(Baby, _super);
    function Baby(name, age, favoriteToy) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.favoriteToy = favoriteToy;
        return _this;
    }
    Baby.prototype.play = function () {
        return "Playing with ".concat(this.favoriteToy);
    };
    return Baby;
}(Person));
var baby = new Baby('Artashes', 21, 'pizza');
baby.eat('shaurma');
baby.eat('qyabab');
console.log(baby);
