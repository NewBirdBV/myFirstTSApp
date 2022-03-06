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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "".concat(firstName).concat(middleInitial).concat(lastName);
    }
    return Student;
}());
function helloWorld(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var student = new Student('xiaofeng', 'Mr.', 'dong');
console.log(student);
helloWorld(student);
var kim = {
    firstName: 'mike',
    gender: 'male',
    lastName: 'op',
    //middle: '1', //Err: 对象字面量会被特殊对待。存在目标类型Person不具备的属性middle，可以使用类型断言或者索引签名绕开检查。但大多数情况不应该绕开检查
};
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
;
var a = {
    age: 11,
    1: '1',
    name: 'foo',
};
var AClock = /** @class */ (function () {
    function AClock() {
    }
    AClock.prototype.tick = function () {
        console.log();
    };
    ;
    return AClock;
}());
var BClock = /** @class */ (function () {
    function BClock() {
    }
    BClock.prototype.tick = function () {
        console.log();
    };
    return BClock;
}());
function createClock(contructor, hour, minute) {
    return new contructor(hour, minute);
}
//检查构造函数的签名
createClock(AClock, 1, 2);
createClock(BClock, 1, 2);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 1;
    counter.reset = function () { };
    return counter;
}
/**
 * 接口继承于类
 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// SC只能由Control的子类来实现（因为继承了Control类中的私有成员'state', 只有其子类有访问权限）
var TB = /** @class */ (function (_super) {
    __extends(TB, _super);
    function TB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TB.prototype.select = function () { };
    return TB;
}(Control));
//未继承`Control`
/*
class CB implements SC {
    select() {}
}
*/
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var ab = Octopus;
exports.default = Octopus;
