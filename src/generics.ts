/**
 * 1. 泛型函数
 * @param {T} arg
 * @return {T}
 */
function  identity<T>(arg:T) : T {
    return arg;
}

/**
 * 2. 泛型接口
 */
interface GenericFn {
    <U>(arg:U) : U
}

let myIdentity: GenericFn = identity;

/**
 * 带有泛型参数的泛型接口
 */
interface GenericFnWithType<U> {
    (arg: U): U
}

let myIdentity1: GenericFnWithType<string> = identity;

console.log(myIdentity1('0'));

/**
 * 3. 泛型来定义类的类型
 */
class Generics<T> {
    value: T;
    add: (x: T, y: T) => T
}

let myGenerics = new Generics<string>();
let myGenerics_1 = new Generics<number>();

myGenerics.add = function (x, y) { return x + y };
myGenerics.add('1','3');

myGenerics_1.add = function (x, y) { return x + y };
myGenerics_1.add(1, 2);


/**
 * 4. 泛型约束
 */

//定义一个接口来描述约束条件
interface lengthWise {
    length: number
}

function recieveArr<T extends lengthWise>(args: T) : T {
    console.log(args.length);
    return args;
}

recieveArr([1,2,3]);
//or
recieveArr({ length : 3 });


function getProperty<T,K extends keyof  T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');

// Error: getProperty(x, 'b');

/**
 * 5. 在泛型里使用类类型
 */

//更像产生一个实例，这个实例也为T类型
function createIns<T>(c: {new(): T}) : T {
    return new c();
}

//或写为

function createIns1<T>(c: new() => T): T {
    return new c();
}

//Eg: 使用原型属性推断并约束构造函数与类实例的关系。

class BeeKeeper {
    hasMash: boolean
}

class ZooKeeper {
    nametag: string
}

class Animal {
    numLegs: number
}

class Bee extends Animal {
    keeper: BeeKeeper
}

class Lion extends Animal {
    keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: A) : A  {
    return c;
}

createInstance(new Bee());
createInstance(new Lion());

//-----------上述的两次调用中的new操作可以挪到声明中, 则变为--------------//

function createInstance1<A extends Animal>(c: {new () : A }) : A {
    return new c();
}

//------------等价于上述的调用--------//
createInstance1(Bee);
createInstance1(Lion);

//综上，可以理解为参数c是需要先满足泛型参数A的形状（需要有numLegs属性）。所以会有{new () : A }的写法

/**
 * 6. 默认泛型参数
 */

function myFunc<T = string >(x:T) : T {
    return x;
}

myFunc(1);
myFunc('1');
