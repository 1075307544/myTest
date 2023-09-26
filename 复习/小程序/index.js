import {request} from '../../myxcx/utils/util'
// flat
function myFlat(array) {
  return array.reduce((pre, item) => {
    if (item instanceof Array) {
      return pre.concat(myFlat(item));
    } else {
      return pre.concat(item);
    }
  }, []);
}
// console.log(myFlat([1,[2,[3]]]));

// 获取当前日期
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
// console.log(date,year,month,day,hour,minute,second);

// 数组随机排序
function suiji(array) {
  return array.sort((x, y) => {
    return Math.random() - 0.5;
  });
}
// console.log(suiji([1,2,3,4,5,6]));

// setTimeout 实现setInterVal
function mySetInterVal(fn, time) {
  function myFn() {
    fn();
    setTimeout(myFn, time);
  }
  setTimeout(myFn, time);
}
// mySetInterVal(()=>console.log(1),1000)

// 节流
function throttle(fn, delay) {
  let canRun = true;
  return function () {
    if (canRun) {
      canRun = false;
      fn.call(this, ...arguments);
      setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

// 防抖
function debounce(fn) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
      timer = null;
    }, 500);
  };
}

// 实现call 注意global
function mama(a, b) {
  console.log(this);
  console.log(a, b);
}
Object.prototype.mycall = function (obj, ...rest) {
  obj = obj || global;
  obj.fn = this;
  rest = rest ? rest : [];
  obj.fn(...rest);
  delete obj.fn;
};
// mama.call({a:1})

// 实现bind 注意new
Object.prototype.mybind = function (obj, ...rest) {
  obj = obj || global;
  obj.fn = this;
  return function newFn(arg) {
    if (this instanceof newFn) {
      return new obj.fn(...rest, ...arg);
    } else {
      obj.fn(...rest, ...arg);
    }
  };
};
// let newma = mama.bind({b:1},1,4)
// newma()

// 实现apply
Object.prototype.myapply = function (obj, rest) {
  obj = obj || global;
  obj.fn = this;
  rest = rest ? rest : [];
  obj.fn(...rest);
  delete obj.fn;
};
// mama.myapply({b:1},[1])

// 深拷贝
// 1 简易版
function simpleDeepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = simpleDeepClone(obj[key]);
    }
  }
  return newObj;
}
// let obj = {a:1,b:{c:2,d:[3,4]},say(){console.log('110');}}
// let cloneObj = simpleDeepClone(obj)
// console.log(obj.say === cloneObj.say);

// 2 正常版
function deepClone(obj, store = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (store.has(obj)) {
    return store.get(obj);
  }
  let newObj
  if (obj instanceof Date) {
    newObj = new Date(obj)
  } else if (obj instanceof RegExp) {
    newObj = new RegExp(obj.source, obj.flags)
  } else if (obj instanceof Array) {
    newObj = []
  } else {
    newObj = Object.create(Object.getPrototypeOf(obj))
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], store);
    }
  }
  return newObj;
}

// 监听对象属性变化
// 1 Object.defineProperty
function defineProperty(obj,key,val) {
    if(val instanceof Object) {
        observer(val)
    }
    Object.defineProperty(obj,key,{
        get: function() {
            console.log("get");
            return val;
        },
        set: function(newVal) {
            console.log("set");
            if( typeof newVal === 'object') {
                observer(newVal)
            }
            val = newVal
        }
    })
}
function observer(obj) {
    if (typeof obj !== "object" || obj === null) {
        return
    }
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            defineProperty(obj,key,obj[key]);
        }
    }
}
// let xiaomao = {name:'ff',age:12,hobbies:{one:'chifan'}}
// observer(xiaomao)
// xiaomao.hobbies.one = {ui:'yui'}
// console.log(xiaomao.hobbies.one.ui);
let wang = [1,2,3,4]
observer(wang)
wang[0] = 1

// 2 proxy
function proxy(obj){
    return new Proxy(obj,{
        get(obj ,key){
            console.log('get');
            if(obj[key] && typeof obj[key]==='object'){
                return proxy(obj[key])
            }
            return obj[key];
        },
        set(obj ,key,val){
            console.log('set');
            obj[key] = val;
            return true
        }
    })
}
// let xiaomi = [{a:1,c:{d:4}},{b:2}]
// let newmi = proxy(xiaomi)
// newmi[2] = {h:8}
// newmi[2].h = 7

// forEach & for

let array = [1,2,3,4,5]
// array.forEach((item,index)=>{
//     array.push(5)
//     // array.splice(index,1)
//     console.log(item);
// })
// console.log(array);
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
//     array.splice(i,1)
//     array.push(5)
//     console.log(array.length);
//     console.log(array[i]);
// }
// console.log(array);
// 遍历器对象
// const obj = {
//     name: '高小乐',
//     age: 18,
//     address: '上海',
//     users: ['刘姥姥', '马姥姥', '欧阳姥姥', '司马姥姥'],
//     say: ()=>{}
// };
// obj[Symbol.iterator] = function*(){
//     for (let i in obj) {
//         yield [i, this[i]];
//     }
// };

// 函数柯里化
function keli(fn){
    return function newFn(){
        let arg = arguments
        if(arg.length >= fn.length){
            return fn.call(this, ...arg)
        }else {
            return newFn.bind(this,...arg)
        }
    }
}
function add(a,b,c){
    return a+b+c
}
let newAdd = keli(add)
// console.log(newAdd(1,2)(2));

// 并发请求，请求池
function requestBox(urlList,size){
  return new Promise(function(resolve,reject){
    let result = new Array(urlList.length);
    let dog = size
    let finish = 0
    function request(url,index){
      fetch(url).then(res=>{
        result[index] = res
      }).catch(err=>{
        result[index] = err
      }).finally(()=>{
        finish++
        if(dog < urlList.size){
          request(urlList[dog],dog)
          dog++
        }
        if(finish >= urlList.length){
          resolve(result)
        }
      })
    }
    for(let i=0;i<size;i++){
      request(urlList[i],i)
    }
  })
}





