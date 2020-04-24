/**
 * 新增的一些类型
 */

//enum 枚举类型
enum Color {
    Red = '红',
    Green = '绿',
    Blue = '蓝'
};

let colorName:string = Color.Green;

console.log(colorName);

/**
 * any，跳过类型检查
 */
let notSure: any = 4;

notSure = '123';

console.log(notSure.split(''));

//只知道一部分类型
let list: any[] = [1, '1', true];
list[1] = 111;
console.log(list);

/**
 * void 空类型
 */
function noReturn():void {
    console.log('do nothing');
}

noReturn();

let unusable:void = null;

//undefined 和 null

let u:undefined = undefined;
let n:null = null;
//undefined 和 null是所有类型的子类型，因此可以如下
let s: string = undefined;
let num: number = null;

//never类型

//eg:返回never的函数总是会抛出异常
function error():never {
    throw new Error('123')
}

//eg:返回never的函数必须存在无法达到的终点
function empty():never {
    while (true) {

    }
}

//Object类型，非基本类型（除6类基本类型之外）

function create(o:object): void {};

create({name:1})

//类型断言

//此处断言someValue为string类型
let someValue: any = 'this is a string';
let strLength:number = (someValue as string).length;
//或 let strLength:number = (<string>someValue).length;
console.log(strLength);
