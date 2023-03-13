// var foo = 'name1';
// var bar = 'name2';
// function fn(){

// }

// var obj = {foo,bar,fn};
// console.log(obj);

// let oobbjj1 = {foo: 'name1', bar: 'name'}
// let oobbjj2 = {foo: 'kkk', bar: 'lll',xx:22}
// console.log(Object.assign(oobbjj1,oobbjj2));
// console.log(oobbjj1);
// let arr = []
// arr[0] = 1
// arr[9] = 2
// arr.fill(3)
// console.log(arr);
// console.log(new Array());

// function A () {}
// function B () {}
// let a = new A();
// let b = new B();
// A.prototype = b
// let c = new A()
// console.log(a instanceof A);
// console.log(a instanceof B);
// console.log(b instanceof B);
// console.log(c instanceof B);
// console.log(typeof null);
// console.log(typeof undefined);

// 解构赋值
// const [a, b, c, d] = "hello"
// console.log(a,b,c,d);
// const { toString: s } = 123
// console.log(s);
// const { toString: v } = true
// console.log(v);
// const { x, y } = { x: 1, y: 2 }
// console.log(x,y);
// const { m, n = 2} = {m: 1 }
// console.log(m,n);
// const { o, p: q } = { o: 1, p: 2 }
// console.log(o,q);
// const [e, f] = [1, 2]
// function Func([x = 0, y = 1]) {}
// function Func({ x = 0, y = 1 } = {}) {}

// string
let str = '𠮷'
console.log(str.codePointAt());
let str2 = "mama baba nihao wohao"
let reg = new RegExp('hao','g')
console.log(str2.match(reg));
console.log(str2.matchAll(/hao/g));
console.log(reg.exec(str2));
console.log(reg.exec(str2));
// String.fromCodePoint()：返回码点对应字符
//  codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
//  normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)
//  repeat()：把字符串重复n次，返回新字符串
//  matchAll()：返回正则表达式在字符串的所有匹配
//  includes()：是否存在指定字符串
//  startsWith()：是否存在字符串头部指定字符串
//  endsWith()：是否存在字符串尾部指定字符串

// number
// console.log(Number.EPSILON);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.parseInt('3.12'))
// console.log(Number.parseFloat(3.12))
// Number.isFinite()：是否为有限数值
// Number.isNaN()：是否为NaN
// Number.isInteger()：是否为整数
// Number.isSafeInteger()：是否在数值安全范围内
// Math.trunc()：返回数值整数部分
// Math.sign()：返回数值类型(正数1、负数-1、零0)
// Math.cbrt()：返回数值立方根
// Math.clz32()：返回数值的32位无符号整数形式
// Math.imul()：返回两个数值相乘
// Math.fround()：返回数值的32位单精度浮点数形式
// Math.hypot()：返回所有数值平方和的平方根
// Math.expm1()：返回e^n - 1
// Math.log1p()：返回1 + n的自然对数(Math.log(1 + n))
// Math.log10()：返回以10为底的n的对数
// Math.log2()：返回以2为底的n的对数
// Math.sinh()：返回n的双曲正弦
// Math.cosh()：返回n的双曲余弦
// Math.tanh()：返回n的双曲正切
// Math.asinh()：返回n的反双曲正弦
// Math.acosh()：返回n的反双曲余弦
// Math.atanh()：返回n的反双曲正切

// object
// 简洁表示法：直接写入变量和函数作为对象的属性和方法({ prop, method() {} })
//  属性名表达式：字面量定义对象时使用[]定义键([prop]，不能与上同时使用)
//  方法的name属性：返回方法函数名

// 取值函数(getter)和存值函数(setter)：get/set 函数名(属性的描述对象在get和set上)
// bind返回的函数：bound 函数名
// Function构造函数返回的函数实例：anonymous


//  属性的可枚举性和遍历：描述对象的enumerable
//  super关键字：指向当前对象的原型对象(只能用在对象的简写方法中method() {})
//  Object.is()：对比两值是否相等
console.log('[ Object.is(NaN,NaN) ] >', Object.is(NaN,NaN))
console.log('[ Object.is(0, -0) ] >', Object.is(0, -0))
console.log('[ 0 === -0 ] >', 0 === -0)
console.log('[ NaN === NaN ] >', NaN === NaN)
//  Object.assign()：合并对象(浅拷贝)，返回原对象
//  Object.getPrototypeOf()：返回对象的原型对象
//  Object.setPrototypeOf()：设置对象的原型对象
//  __proto__：返回或设置对象的原型对象

// 数组
// 扩展运算符(...)：转换数组为用逗号分隔的参数序列([...arr]，相当于rest/spread参数的逆运算)
//  Array.from()：转换具有Iterator接口的数据结构为真正数组，返回新数组

// 类数组对象：包含length的对象、Arguments对象、NodeList对象
// 可遍历对象：String、Set结构、Map结构、Generator函数


//  Array.of()：转换一组值为真正数组，返回新数组
//  copyWithin()：把指定位置的成员复制到其他位置，返回原数组
//  find()：返回第一个符合条件的成员
//  findIndex()：返回第一个符合条件的成员索引值
//  fill()：根据指定值填充整个数组，返回原数组
//  keys()：返回以索引值为遍历器的对象
//  values()：返回以属性值为遍历器的对象
//  entries()：返回以索引值和属性值为遍历器的对象
//  数组空位：ES6明确将数组空位转为undefined(空位处理规不一，建议避免出现)

let set = new Set([1,2,3,3]);
console.log('[ set ] >', set)
console.log('[ set.length ] >', set.length)
console.log('[ set.size ] >', set.size)
console.log('[ set.add(2) ] >', set.add(2))
console.log('[ set.add(2) ] >', set.add('spp'))
console.log('[ set.has(4) ] >', set.has(4))
console.log('[ set.delete(3) ] >', set.delete(3))
console.log('[ set ] >', set)
console.log('[ set.keys() ] >', set.keys())
console.log('[ set.values() ] >', set.values())
console.log('[ set.entries() ] >', set.entries())
let map = new Map([['xx','yy'],[1,2],[[4],null]]);
console.log('[ map ] >', map)
console.log('[ map.size ] >', map.size)
console.log('[ map.get(1) ] >', map.get(1))
console.log('[ map.delete(1) ] >', map.delete(1))
console.log('[ map ] >', map)
console.log('[ map.set(1,3) ] >', map.set(1,3))
console.log('[ map.keys() ] >', map.keys())
console.log('[ map.values() ] >', map.values())
console.log('[ map.entries() ] >', map.entries())
console.log('[ map.clear() ] >', map.clear())


class Dad{
    constructor(name,age){
        this.name = name;
        this.age = age;
        return {a:1}
    }
}
console.log('[ new Dad ] >', new Dad('lili',38))

