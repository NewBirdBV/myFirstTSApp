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

// kim.gender = '1'; not allow


//函数类型（函数调用签名，用于约定参数类型和返回类型）
interface FuncSignature {
    (x:number, y:number) : number
}

const add:FuncSignature = function (a:number, b:number) : number {
    return a + b;
};

console.log(add(1,2));
