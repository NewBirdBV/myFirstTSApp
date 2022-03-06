"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 新增的一些类型
 */
//enum 枚举类型
var Color;
(function (Color) {
    Color["Red"] = "\u7EA2";
    Color["Green"] = "\u7EFF";
    Color["Blue"] = "\u84DD";
})(Color || (Color = {}));
;
var colorName = Color.Green;
console.log(colorName);
/**
 * any，跳过类型检查
 */
var notSure = 4;
notSure = '123';
console.log(notSure.split(''));
//只知道一部分类型
var list = [1, '1', true];
list[1] = 111;
console.log(list);
/**
 * void 空类型
 */
function noReturn() {
    console.log('do nothing');
}
noReturn();
var unusable = null;
//undefined 和 null
var u = undefined;
var n = null;
//undefined 和 null是所有类型的子类型，因此可以如下
var s = undefined;
var num = null;
//never类型
//eg:返回never的函数总是会抛出异常
function error() {
    throw new Error('123');
}
//eg:返回never的函数必须存在无法达到的终点
function empty() {
    while (true) {
    }
}
//Object类型，非基本类型（除6类基本类型之外）
function create(o) { }
;
create({ name: 1 });
//类型断言
//此处断言someValue为string类型
var someValue = 'this is a string';
var strLength = someValue.length;
//或 let strLength:number = (<string>someValue).length;
console.log(strLength);
//元组 tuple
var tuple = ['1', [1, 2], [false]];
tuple[0];
tuple[1];
//tuple[2]; //越界元素访问时将使用联合类型 string|number
//联合类型
var combinedTypes = '123';
var interface_1 = require("./interface");
var a = new interface_1.default('1');
