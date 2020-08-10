var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 1. 泛型函数
 * @param {T} arg
 * @return {T}
 */
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var myIdentity1 = identity;
console.log(myIdentity1('0'));
/**
 * 3. 泛型来定义类的类型
 */
var Generics = /** @class */ (function () {
    function Generics() {
    }
    return Generics;
}());
var myGenerics = new Generics();
var myGenerics_1 = new Generics();
myGenerics.add = function (x, y) { return x + y; };
myGenerics.add('1', '3');
myGenerics_1.add = function (x, y) { return x + y; };
myGenerics_1.add(1, 2);
function recieveArr(args) {
    console.log(args.length);
    return args;
}
recieveArr([1, 2, 3]);
//or
recieveArr({ length: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// Error: getProperty(x, 'b');
/**
 * 5. 在泛型里使用类类型
 */
//更像产生一个实例，这个实例也为T类型
function createIns(c) {
    return new c();
}
//或写为
function createIns1(c) {
    return new c();
}
//Eg: 使用原型属性推断并约束构造函数与类实例的关系。
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return c;
}
createInstance(new Bee());
createInstance(new Lion());
//-----------上述的两次调用中的new操作可以挪到声明中, 则变为--------------//
function createInstance1(c) {
    return new c();
}
//------------等价于上述的调用--------//
createInstance1(Bee);
createInstance1(Lion);
//综上，可以理解为参数c是需要先满足泛型参数A的形状（需要有numLegs属性）。所以会有{new () : A }的写法
/**
 * 6. 默认泛型参数
 */
function myFunc(x) {
    return x;
}
myFunc(1);
myFunc('1');
myFunc(true);
