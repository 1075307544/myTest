Function.prototype.call2 = function(context) {
    context = context || window
    let arg = []
    for (let i = 1; i < arguments.length; i++){
        arg.push(arguments[i])
    }
    context.fn = this
    let result = eval('context.fn('+arg+')')
    delete context.fn
    return result
}
Function.prototype.apply2 = function(context) {
    context = context || window
    let arg = []
    for (let i = 0; i < arguments[1].length; i++){
        arg.push(arguments[1][i])
    }
    context.fn = this
    let result = eval('context.fn('+arg+')')
    delete context.fn
    return result
}
let obj = {a:110}
function say(m,n){
    console.log(this.a,m,n);
    return m+n
}
console.log(say.call(obj,1,2))
console.log(say.call2(obj,1,2))
say.call2(obj,1,2)
say.apply(obj,[3,4])
say.apply2(obj,[3,4])
















// 手写call
Function.prototype.call3 = function (context){
    context = context || window
    let arr = []
    for (let i = 1; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    context.fn = this
    let result = eval('context.fn('+arr+')')
    delete context.fn
    return result
}
console.log('------------');
function kill(a,b,c){
    console.log(a,b,c);
    console.log(this.name);
    return a+b+c
}
console.log(kill.call3({name: 'paul'},1,2,3));
// 手写apply
Function.prototype.apply3 = function (context){
    context = context || window
    let arr = []
    for (let i = 0; i < arguments[1].length; i++) {
        arr.push(arguments[1][i])
    }
    context.fn = this
    let result = context.fn(arr)
    delete context.fn
    return result
}
console.log('##########')
function kill(arr){
    console.log(arr[0],arr[1],arr[2]);
    console.log(this.name);
    return arr[0]+arr[1]
}
console.log(kill.apply3({name: 'paul'},[4,5,6]));
//手写bind
Function.prototype.bind3 = function (context) {
    let that = this
    context = context || window
    let arr = []
    for (let i = 1; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    let bound =  function(){ 
        for (let i = 0; i < arguments.length; i++) {
            arr.push(arguments[i])
        }
        context.fn = this instanceof that ? this : that
        let result = eval('context.fn('+arr+')')
        delete context.fn
        return result
    }
    bound.prototype = this.prototype
    return bound
}
let name = 'lllll'
function hello(a,b,c){
    console.log('====',this.name);
    console.log(a,b,c);
    return a+a+c
}
let newhello = hello.bind3({name: 'kkkk'},1,2)
let o = newhello(3)
console.log(o);
// 手动实现new
function myNew(){
    let obj = {}
    let constructor = [].slice.call(arguments,0,1)
    obj.__proto__ = constructor.prototype
    let res = constructor.apply(obj,arguments)
    return res instanceof Object ? res : obj
}

let fn = function(){}
let arr = []
console.log(typeof arr);