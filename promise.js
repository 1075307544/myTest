let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(11111)
    resolve(110)
  }, 1000);
});
promise1.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

async function async1() {
  console.log("1");
  await async2()
  console.log("2");
}
async function async2() {
  setTimeout(function () {
    console.log("3");
  });
}


console.log("4");
setTimeout(() => {
  console.log("5");
}, 0);
async1();
new Promise(function (reslove) {
  console.log("6");
  reslove();
}).then(function () {
  console.log("7");
});
console.log("8");
