interface Person {
    firstName: string;
    lastName: string;
    middleInitial?: string //可选属性
    readonly gender?: string //只读属性
    [propName:string]: any //索引签名
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName}${middleInitial}${lastName}`;
    }
}

function helloWorld(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}`
}

const student = new Student('xiaofeng', 'Mr.', 'dong');

console.log(student);

helloWorld(student);

const kim:Person = {
    firstName: 'mike',
    gender: 'male',
    lastName: 'op',
    //middle: '1', //Err: 对象字面量会被特殊对待。存在目标类型Person不具备的属性middle，可以使用类型断言或者索引签名绕开检查。但大多数情况不应该绕开检查
};

//kim.gender = '1'; not allow


//函数类型（函数调用签名，用于约定参数类型和返回类型）
interface FuncSignature {
    (x:number, y:number) : number
}

const add:FuncSignature = function (a:number, b:number) : number {
    return a + b;
};

console.log(add(1,2));

//可索引类型，支持两种索引签名：字符串和数字。
interface StringArray {
    [index: number]: string; //声明数字类型签名，返回类型须为字符串类型签名返回的子类型（string -> any）
    [index: string]: any; //声明字符串类型签名
    age: number; //因为age为string类型，则返回类型可以任意类型
};

let a:StringArray = {
    age: 11,
    1: '1',
    name: 'foo',
};

/**
 * 类类型中需要区分类的静态部分（构造函数）和实例部分
 * 当一个类实现一个接口时，只有实例部分的类型校验生效
 */

//构造函数签名，需要将构造函数单独拿出来做校验
interface ClockConstructor {
    new (hour: number, minute: number) : ClockInterface;
}

interface ClockInterface {
    tick() : void
}

class AClock implements ClockInterface {
    tick() {
        console.log();
    };
}

class BClock implements ClockInterface {
    tick() {
        console.log();
    }
}

function createClock(contructor: ClockConstructor, hour: number, minute:number) {
    return new contructor(hour, minute);
}

//检查构造函数的签名
createClock(AClock, 1,2);
createClock(BClock, 1,2);

/**
 * 混合类型，既可以作为函数，也可以作为对象使用
 */

interface Counter {
    (start: number): string,
    interval: number,
    reset(): void
}

function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 1;
    counter.reset = function () {};
    return counter;
}

/**
 * 接口继承于类
 */
class Control {
    private state: any
}

interface SC extends Control {
    select(): void
}

// SC只能由Control的子类来实现（因为继承了Control类中的私有成员'state', 只有其子类有访问权限）
class TB extends Control implements SC{
    select() {}
}

//未继承`Control`
/*
class CB implements SC {
    select() {}
}
*/


class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(private name: string) {
    }
}

let ab:typeof Octopus = Octopus;

export default Octopus;
