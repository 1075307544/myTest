// function click() {
//   let iframe = document.createElement("iframe");
//   iframe.src = "http://127.0.0.1:5500/print.html";
//   document.body.appendChild(iframe);
//   iframe.style.visibility = "hidden";
//   iframe.contentWindow.print();
//   // window.print();
// }
// document.querySelector("#btn").addEventListener("click", click);

// setTimeout(function () {
//   console.log('clock');
// },0)
// for (let i = 0; i < 10000; i++){
//   console.log(i);
// }
let value1 = 0,
  value2 = 0,
  value3 = 0;

for ( let i = 1; i <= 3; i++) {
  var i2 = i;
  (function () {
    var i3 = i;
    setTimeout(function () {
      value1 += i;
      value2 += i2;
      value3 += i3;
      console.log(i,i2,i3);
    }, 1);
  })();
}
setTimeout(function () {
  console.log(value1, value2, value3);
}, 100);


// console.log(Object.prototype.toString.call([1, 2]));
// let a = '111'
// console.log(a instanceof String);
let b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
console.log(b);
// let a = 111
// (function a() {
//   console.log(110);
// })()
// a = 0
// console.log(a);

console.log([1] instanceof Array);
Number.prototype.minus = function (val) {
  console.log(this.valueOf(), val);
};
let a = 100;
a.minus(1);
// let obj = new Proxy(
//   {},
//   {
//     get: function () {
//       return 888;
//     },
//   }
// );
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// let obj1 = { a: 1, b: 2 };
// let obj2 = Object.create(obj1);
// console.log(obj2.__proto__);

var obj = new Proxy(
  [1,2,3,4],
  {
    get: function (target, key, receiver) {
      console.log(`getting ${key}!`,target, key, receiver);

      return Reflect.get(target, key, receiver);
    },

    set: function (target, key, value, receiver) {
      console.log(`setting ${key}!`);

      return Reflect.set(target, key, value, receiver);
    },
  }
);
console.log(obj[0]);

console.log(111);
console.log(222);