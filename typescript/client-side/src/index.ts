// // index.ts
// let a: any;
// a = 11;
// a = null;
// let arr = [1];
// let b: null = null;
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello, I am Lison";
// document.body.appendChild(h1);
// let obj: object;
// obj = { name: "lilei" };
// const start = 3;
// const addd = () => 10;
// enum roles {
//   aa = addd(),
//   bb = 2,
//   cc,
// }
// console.log(roles.aa);
// console.log(roles.bb);
// console.log(roles.cc);
// enum roles {
//   nsm = 5,
// }
// console.log(roles);
// a = undefined;
// enum Animal {
//   Dog,
//   Cat,
// }
// interface Dog {
//   type: Animal.Dog; // 这里使用Animal.Dog作为类型，指定接口Dog的必须有一个type字段，且类型为Animal.Dog
// }
// interface Cat {
//   type: Animal.Cat; // 这里同上
// }
// let cat1: Cat = {
//   type: Animal.Cat,
// };
// let dog: Dog = {
//   type: Animal.Dog,
// };
// console.log(Animal, cat1, dog);
// // let aa: Animal.Cat = 2;
// // console.log(aa);

// const getStrLength = (target: string | number): number => {
//   if ((target as string).length) {
//     // 这种形式在JSX代码中不可以使用，而且也是TSLint不建议的写法
//     return (target as string).length; // 这种形式是没有任何问题的写法，所以建议大家始终使用这种形式
//   } else {
//     return target.toString().length;
//   }
// };

// const getFullName = ({
//   firstName,
//   lastName,
// }: {
//   // 指定这个参数的类型，因为他是一个对象，所以这里来指定对象中每个字段的类型
//   firstName: string; // 指定属性名为firstName和lastName的字段的属性值必须为string类型
//   lastName: string;
// }) => {
//   return `${firstName} ${lastName}`;
// };
// const getVegetables = ({ color, type }: Vegetables) => {
//   return `${color ? color + " " : ""}${type}`;
// };

// interface Vegetables {
//   color?: string;
//   type: string;
//   [aaa: string]: any;
// }
// getVegetables({
//   type: "tomato",
//   size: "big", // 'size'不在类型'Vegetables'中
// } as Vegetables);
// let haha: Vegetables = {
//   lll: 1,
//   type: "1",
// };
// interface BB {
//   [tag: number]: number;
// }
// const bb: BB = { "111": 222 };
// console.log(bb);

// interface A {
//   name: string;
// }
// interface B {
//   age: number;
// }
// interface C extends A, B {
//   hobbies: string[];
// }
// const cc: C = {
//   name: "sisy",
//   age: 11,
//   hobbies: ["sss", ""],
// };

// const add3 = (arg1: number, arg2: number): number => {
//   return arg1 + arg2;
// };
// type Add = (x: number, y: number) => number;
// let add: Add = (arg1: number, arg2: number): number => arg1 + arg2;
// add(1, 2); // right
// add(1, 2, 3); // error 应有 2 个参数，但获得 3 个
// add(1); // error 应有 2 个参数，但获得 1 个
// for (const i of "111") {
//   console.log(i);
// }
// interface Ggg{
//   (num1: number):number;
// }
// type reduce = (num1: number, num2?: number) => number;
// type getAdd = (one: any, two: number) => any[];

// function getArr(one: any, two: number): any[] {
//   return new Array(two).fill(one);
// }
// getArr([1, 2], 3).forEach((item) => {
//   console.log(item.length);
// });
// getArr(2, 3).forEach((item) => {
//   console.log(item.length);
// });

// function getArr2<T>(one: T, two: number): T[] {
//   return new Array(two).fill(one);
// }
// getArr2([1, 2], 3).forEach((item) => {
//   console.log(item.length);
// });
// getArr2(2, 3).forEach((item) => {
//   console.log(item.length);
// });
// const app = <T>(value: T): number => {
//   return value.length;
// };
// ex1: 简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//   return new Array(times).fill(arg);
// };
// // ex2: 使用类型别名
// type GetArray = <T>(arg: T, times: number) => T[];
// const getArray: GetArray = (arg, times) => {
//   return new Array(times).fill(arg);
// };
// interface GetArray<T> {
//   (arg: T, times: number): T[];
//   tag: T;
// }
// const getArray: GetArray<number> = (arg, times) => {
//   // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
//   // 属性“tag”的类型不兼容。
//   return new Array(times).fill(arg);
// };
// getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
// getArray("a", 1); // 不能将类型“"a"”分配给类型“number”
// class AA {
//   static a = 2;
//   b = 3;
// }
// class Parent {
//   private age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
// }
// const p = new Parent(18);
// console.log(p); // { age: 18 }
// console.log(p.age); // error 属性“age”为私有属性，只能在类“Parent”中访问
// console.log(Parent.age); // error 类型“typeof ParentA”上不存在属性“age”
// class Child extends Parent {
//   constructor(age: number) {
//     super(age);
//     console.log(super.age); // 通过 "super" 关键字只能访问基类的公共方法和受保护方法
//   }
// }
// class Parent {
//   protected age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
//   protected getAge() {
//     return this.age;
//   }
// }
// const p = new Parent(18);
// // console.log(p.age); // error 属性“age”为私有属性，只能在类“ParentA”中访问
// // console.log(Parent.age); // error 类型“typeof ParentA”上不存在属性“age”
// class Child extends Parent {
//   constructor(age: number) {
//     super(age);
//     console.log(super.age); // undefined
//     console.log(super.getAge()); // 18
//   }
// }
// let child = new Child(18);
// class Hh {
//   constructor(public name: string) {
//     this.name = name;
//   }
// }
// class UserInfo {
//   private _fullName: string = "";
//   constructor() {}
//   public get fullName() {
//     return this._fullName;
//   }
//   public set fullName(value) {
//     console.log(`setter: ${value}`);
//     this._fullName = value;
//   }
// }
// const user = new UserInfo();
// user.fullName = "Lison Li"; // "setter: Lison Li"
// console.log(user.fullName); // "Lison Li"

// abstract class People {
//   constructor(protected name: string) {}
//   abstract printName(): void;
// }
// class Man extends People {
//   constructor(name: string, age: number) {
//     super(name);
//     this.name = name;
//   }
//   printName() {
//     console.log(this.name);
//   }
// }
// const m = new Man(); // error 应有 1 个参数，但获得 0 个
// const man = new Man("lison", 12);
// // console.log(man.name);
// man.printName(); // 'lison'
// const p = new People("lison"); // error 无法创建抽象类的实例
// class People {
//   constructor(public name: string) {}
// }
// let p: People = new People("lison");
// class Anima {
//   constructor(public name: string, age: number) {}
//   say() {
//     console.log(this.name);
//   }
// }
// p = new Anima("lark", 22);

// console.log("[ p instanceof People ] >", p instanceof People);
// console.log("[ p instanceof People ] >", p instanceof Anima);
// interface FoodInterface {
//   type: string;
// }
// class FoodClass implements FoodInterface {
//   // error Property 'type' is missing in type 'FoodClass' but required in type 'FoodInterface'
//   type: string = "1";
//   constructor() {}
// }
// class A {
//   constructor(protected name: string) {
//     this.name = name;
//   }
// }
// interface I extends A {}
// class B implements I {} // error Property 'name' is missing in type 'B' but required in type 'I'
// class C implements I {
//   // error 属性“name”受保护，但类型“C”并不是从“A”派生的类
//   // name: string;
//   constructor(public name: string) {
//     this.name = name;
//   }
// }
// class D extends A implements I {
//   getName() {
//     return this.name;
//   }
// }
// const create = <T>(c: new () => T): T => {
//   return new c();
// };
// class Info {
//   age: number = 1;
//   private readonly name: string = "";
// constructor(age: number) {
//   this.age = age;
// }
// }
// create(Info).age;
// create(Info).name; // error 类型“Info”上不存在属性“name”
// abstract class C {
//   protected _age: number;
//   constructor(_age: number) {
//     this._age = _age;
//   }
//   set age(value: number) {
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   haha() {
//     console.log("haha");
//   }
//   abstract xixi(): void;
// }
// class M extends C {
//   constructor(age: number) {
//     super(age);
//   }
//   xixi(): void {
//     console.log("xixi");
//   }
// }
// const m = new M(33);
// m.haha();
// console.log(m instanceof M);
// console.log(m instanceof C);
// console.log(m);
// console.log(M.prototype);
// class A {
//   constructor(name: string) {}
// }
// class B {
//   constructor(age: number) {}
// }
// let sa: A = new A("aa");
// sa = new B(12);
// sa = 2;
// sa = "233";
// let pp:number = 1
// pp  = ''
// abstract class FoodAbstractClass {
//   abstract type?: string;
// }
// class Food extends FoodAbstractClass {
//   constructor(public type: string) {
//     super();
//   }
// }
// class L {
//   constructor(protected type: string) {}
// }
// interface C extends L {}
// class M extends L implements C {
//   constructor(private type: string) {
//     super(type);
//   }
// }
// let r = 1
// r = ''
// let v = [1, "33"];
// v = [1, "33", true];
// v.push(false)
// let x = Math.random() * 10 > 5 ? "11" : 11;
// x = false;
// window.onmouseover = function (event) {
//   console.log(event.a);
// };
// let fa = (name: string) => {};
// let fb = (age: string, hobbies: number) => {};
// fb = fa;
// fa = fb;
// let x = (a: number | string) => 0;
// let y = (b: string) => 11;
// let z = (c: number | string | boolean) => 1;
// y = x;
// x = y;
// z = x;
// x = z;
// y = z;
// const getNum = (
//   // 这里定义一个getNum函数，他有两个参数
//   arr: number[], // 第一个参数是一个数组
//   callback: (...args: number[]) => number // 第二个参数是一个函数，这个函数的类型要求可以传入任意多个参数，但是类型必须是数值类型，返回值必须是数值类型
// ): number => {
//   return callback(...arr); // 这个getNum函数直接返回调用传入的第二个参数这个函数，以第一个参数这个数组作为参数的函数返回值
// };
// const getNum = (
//   arr: number[],
//   callback: (arg1: number, arg2?: number) => number // 这里指定第二个参数callback是一个函数，函数的第二个参数为可选参数
// ): number => {
//   return callback(...arr); // error 应有 1-2 个参数，但获得的数量大于等于 0
// };
// getNum(
//   [],
//   (...args: number[]): number => args.length // 这里传入一个函数，逻辑是返回参数的个数
// );
// let funcA = function (arg: number | string): void {};
// let funcB = function (arg: string): void {};
// funcA = funcB 和 funcB = funcA都可以
// funcA = funcB;
// funcB = funcA;
// let a4: (number | string)[];
// a4 = [1, "2"];
// const valueList = [123, "abc"];
// const getRandomValue = () => {
//   const number = Math.random() * 10; // 这里取一个[0, 10)范围内的随机值
//   if (number < 5)
//     return valueList[0]; // 如果随机数小于5则返回valueList里的第一个值，也就是123
//   else return valueList[1]; // 否则返回"abc"
// };

// function isString(value: number | string): value is string {
//   return typeof value === "string";
// }
// const item = getRandomValue();
// if (isString(item)) {
//   // error 类型“number”上不存在属性“length”
//   console.log(item.length); // error 类型“number”上不存在属性“length”
// } else {
//   console.log(item.toFixed()); // error 类型“string”上不存在属性“toFixed”
// }
// let bbc: any = { a: 11 };
// bbc = [11, 77];
// bbc = true;
// bbc = 111;
// console.log(typeof bbc.toString());
// let oo: number | null = 333;
// oo = null;
// function getSplicedStr(num: number | null): string {
//   function getRes(prefix: string) {
//     // 这里在函数getSplicedStr里定义一个函数getRes，我们最后调用getSplicedStr返回的值实际是getRes运行后的返回值
//     return prefix + num!.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
//   }
//   num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
//   return getRes("lison");
// }
// let num: number | undefined;
// function getRes(prefix: string) {
//   // 这里在函数getSplicedStr里定义一个函数getRes，我们最后调用getSplicedStr返回的值实际是getRes运行后的返回值
//   return prefix + num!.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
// }
// num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
// getRes("lison");
// type ooo<T> = {
//   a: T;
//   b: T;
// };
// let ar: ooo<number> = {
//   a: 1,
//   b: 2,
// };
// interface Ll {
//   l: string;
// }
// interface Pp {
//   a: number;
// }
// type p = Pp;
// interface Xp extends p {}
// class K implements p {
//   constructor(public a: number) {}
// }
// class L extends K implements p {}
// type ObjectDescriptor<D, M> = {
//   // 使用类型别名定义一个接口，这里用了泛型，两个泛型变量D和M
//   data?: D; // 这里指定data为可选字段，类型为D
//   // 这里指定methods为可选字段，类型为M和ThisType<D & M>组成的交叉类型；
//   // ThisType是一个内置的接口，用来在对象字面量中键入this，这里指定this的类型为D & M
//   methods?: M & ThisType<D & M>;
// };
// // 这里定义一个mackObject函数，参数desc的类型为ObjectDescriptor<D, M>
// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//   const data: object = desc.data || {};
//   const methods: object = desc.methods || {};
//   // 这里通过...操作符，将data和methods里的所有属性、方法都放到了同一个对象里返回，这个对象的类型自然就      是D & M，因为他同时包含D和M两个类型的字段
//   return { ...data, ...methods } as D & M;
// }
// let obj = makeObject({
//   data: { x: 0, y: 0 }, // 这里data的类型就是我们上面定义ObjectDescriptor<D, M>类型中的D
//   methods: {
//     // 这里methods的类型就是我们上面定义ObjectDescriptor<D, M>类型中的M
//     moveBy(dx: number, dy: number) {
//       this.x += dx; // 所以这里的this是我们通过ThisType<D & M>指定的，this的类型就是D & M
//       this.y += dy;
//     },
//   },
// });
// obj.x = 10;
// obj.y = 20;
// obj.moveBy(5, 5);
// enum Message {
//   ServerError = 333,
//   ClientError = 111,
//   aaa = "111",
//   bbbs = 0,
// }
// console.log(Message[111]); // 'error message'
// console.log(Message[333]); // 'error message'
// console.log(Message.ServerError); // 'error message'
// function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
//   // 这里使用泛型，并且约束泛型变量K的类型是"keyof T"，也就是类型T的所有字段名组成的联合类型
//   return names.map((n) => obj[n]); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
// }
// const info = {
//   name: "lison",
//   age: 18,
// };
// let values: (string | number)[] = getValue(info, ["name"]);
// values = getValue(info, ["age"]); // error 不能将类型“number[]”分配给类型“string[]”
// type Person = {
//   name: string;
//   age?: number;
// };
// type MM = Pick<Person, "name" | "age">;
// class KK {
//   constructor(name: string, age?: number) {}
// }
// namespace KK {
//   export const hobby = 111;
// }
// let kk = new KK("11", 3);
// console.log(kk.hobby);
// console.log(KK.hobby);
// enum app {
//   a,
// }
// enum app {
//   b = 2,
// }
// let a = app.b;
// console.log(a);
// type Type<T> = T extends string | number ? string : number;
// let index: Type<"a" | number>; // index的类型为string
// let index2: Type<false | 2>; // index2的类型为number
// type Type<T> = {
//   [K in keyof T]: T[K] extends (newName: string) => void ? K : never;
// };
// interface Part {
//   id: number;
//   name: string;
//   subparts: Part[];
//   updatePart(newName: string): void;
// }
// // type Test = Type<Part>; // Test的类型为"updatePart"
// type Test = {
//   name: string;
//   age: number;
// };
// type test1 = Test[keyof Test]; //
// type A = string | number[];
// type B = {
//   1: "chifan";
//   ho: "sss";
//   2: "sd";
// };
// type e = B[1];
// class A {
//   constructor() {}
// }
// type T1 = InstanceType<typeof A>; // T1的类型为A
// type T2 = InstanceType<any>; // T2的类型为any
// type T3 = InstanceType<never>; // T3的类型为never
// type T4 = InstanceType<string>; // error
// type a = "a" | "b" | "c" extends "a" ? string : number;
// type b = any extends string ? string : number;
// const aa: b = 1;
// const cc: b = "s";
function methodDecorator(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
}

class MyClass {
  @methodDecorator
  myMethod() {
    console.log("MyMethod");
  }
}

const myInstance = new MyClass();
myInstance.myMethod(); // "Method Decorator" and "MyMethod"
