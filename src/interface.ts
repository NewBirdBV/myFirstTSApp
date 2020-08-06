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

export class A{}
