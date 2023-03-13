// import {expectType} from 'tsd'
// expectType<string>('eeeee')
// interface Foo {
//     name: string;
//     age: number;
//   }
  
//   interface Bar {
//     name: string;
//     job: string;
//   }
  
//   // declare let foo:Foo
  
//   declare let bar:Bar
  
//   // const a:string = null
//   void function iife() {
//     console.log("Invoked!");
//   }();
//   console.log(111);
//   const arr3: [string, string, string] = ['lin', 'bu', 'du'];

// // console.log(arr3[599]);
// interface IDescription {
//   name: string;
//   age: number;
//   male?: boolean;
//   func?: Function;
// }

// const obj2: IDescription = {
//   name: 'linbudu',
//   age: 599,
//   male: true,
//   // 无需实现 func 也是合法的
// };
// obj2.male = false;
// obj2.func = () => {};
// obj2.func()
// let app:Object = 123
// let b:{} = 'a'
// interface Res {
//   code: 10000 | 10001 | 50000;
//   status: "success" | "failure";
//   data: any;
// }
// declare let res:Res
// const edit = '001'

// let obj = {
//   name:'jj',
//   age:13
// }
// function fun (name:string){
//   return name.length
// }
// class Foo {
//   static staticHandler() { }

//   public instanceHandler() { }
// }
// const foo = new Foo();
// class Too extends Foo {

// }
// console.log(Foo.staticHandler);
// console.log(Foo.staticHandler);
// console.log(Too.staticHandler);
// let fo
// declare let a1:never
// declare let a2:any
// a2 = a1
// const arr = [];

// arr.push("linbudu");

// interface IFoo {
//   name: string;
// }

// declare const obj: {
//   foo: IFoo
// }

// const {
//   foo = {}
// } = obj
// interface IStruct {
//   foo: string;
//   bar: {
//     barPropA: string;
//     barPropB: number;
//     barMethod: () => void;
//     baz: {
//       handler: () => Promise<void>;
//     };
//   };
// }
// const a:IStruct = {}
// const obj = <IStruct>{};
// interface AllStringTypes {
//   [key: string]: string;
// }
// type PropType1 = AllStringTypes['linbudu']; // string
// type PropType2 = AllStringTypes['599']; // string
// const foo: AllStringTypes = {
//   "linbudu": "599",
//   599: "linbudu",
//   [Symbol("ddd")]: 'symbol',
// }
// interface AllStringTypes2 {
//   // 类型“number”的属性“propA”不能赋给“string”索引类型“boolean”。
//   propA: boolean;
//   [key: string]: boolean;
// }
// interface StringOrBooleanTypes {
//   propA: number;
//   propB: boolean;
//   [key: string]: number | boolean;
// }
// interface NumberRecord {
//   [key: string]: number;
// }

// type PropType = NumberRecord[1]; // number
// const a:PropType = 111

// const str = "linbudu";

// const obj = { name: "linbudu" };

// const nullVar = null;
// const undefinedVar = undefined;

// const func = (input: string) => {
//   return input.length > 10;
// }

// type Str = typeof str; // "linbudu"
// type Obj = typeof obj; // { name: string; }
// type Null = typeof nullVar; // null
// type Undefined = typeof undefined; // undefined
// type Func = typeof func; // (input: string) => boolean

// let a:Str = 'linbudu'

// let abc = 2

// const func = (input: string) => {
//   return input.length > 10;
// }

// const func2: typeof func = (name: string) => {
//   return name === 'linbudu'
// }

// function isString(input: unknown): input is string {
//   return typeof input === "string";
// }

// function foo(input: string | number) {
//   if (isString(input)) {
//     // 类型“string | number”上不存在属性“replace”。
//     (input).replace("linbudu", "linbudu599")
//   }
//   if (typeof input === 'number') { }
//   // ...
// }
// let name2: any = 3.13;

// function assertIsNumber(val: any): asserts val is number {
//   if (typeof val !== 'number') {
//     throw new Error('Not a number!');
//   }
// }

// assertIsNumber(name2);

// // number 类型！
// name2.toFixed();
// class CNY {
//   private __tag!: void;
//   constructor(public value: number) {}
// }
// class USD {
//   private __tag!: void;
//   constructor(public value: number) {}
// }
// const CNYCount = new CNY(100);
// const USDCount = new USD(100);

// function addCNY(source: CNY, input: CNY) {
//   return (source.value + input.value);
// }

// addCNY(CNYCount, CNYCount);
// // 报错了！
// addCNY(CNYCount, USDCount);

// type a = string extends String ? 1|2 : 1|2|3

// 提取对象的属性类型
// type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R }
//   ? R
//   : never;

// type PropTypeResult1 = PropType<{ name: string }, 'name'>; // string
// type PropTypeResult2 = PropType<{ name: string; age: number }, 'name' >; // string | number

// type IsNever<T> = [T] extends [never] ? 1 : 2;
// type IsNeverRes2 = IsNever<never>; // false

// interface AllStringTypes {
//   [key: string]: string;
// }

// const foo: AllStringTypes = {
//   "linbudu": "599",
//   'aaaa':'sss',
//   555: '222'
// }

// type Record0<K extends keyof any, T> = {
//   [P in K]: T;
// };
// // 键名均为字符串，键值类型未知
// type Record1 = Record0<string, unknown>;
// // 键名均为字符串，键值类型任意
// type Record2 = Record0<string, any>;
// 键名为字符串或数字，键值类型任意
// type Record3 = Record0<string | number, any>;

// const a: Record3 = {'sss':333,111:333}
// window.onerror = (event, source, line, col, err) => {};

// class Foo {
//   foo!: number;
// }

// class Bar extends Foo {
//   bar!: number;
// }
// let f2: { (input: Foo | Bar): void };
// Foo | Bar
// type MarkPropsAsOptionalStruct = MarkPropsAsOptional<
//   {
//     foo: string;
//     bar: number;
//     baz: boolean;
//   },
//   'bar'
// >;
// export type Flatten<T> = { [K in keyof T]: T[K] };
// export type MarkPropsAsOptional<
//   T extends object,
//   K extends keyof T = keyof T
// > = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;
// type FuncStruct = (...args: any[]) => any;

// type FunctionKeys<T extends object> = {
//   [K in keyof T]: T[K] extends FuncStruct ? K : never;
// }[keyof T];
// type Tmp<T extends object> = {
//   [K in keyof T]: T[K] extends FuncStruct ? K : never;
// };

// type Res = Tmp<{
//   foo: () => void;
//   bar: () => number;
//   baz: number;
// }>;

// type ResEqual = {
//   foo: 'foo';
//   bar: 'bar';
//   baz: never;
// };
// type WhatWillWeGet = Res[keyof Res]; 
type ExpectedPropKeys<T extends object, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T];

type FunctionKeys<T extends object> = ExpectedPropKeys<T, FuncStruct>;

expectType<
  FunctionKeys<{
    foo: () => void;
    bar: () => number;
    baz: number;
  }>
>('foo');

expectType<
  FunctionKeys<{
    foo: () => void;
    bar: () => number;
    baz: number;
  }>
  // 报错，因为 baz 不是函数类型属性
>('baz');