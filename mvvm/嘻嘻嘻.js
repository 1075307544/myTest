let obj = { a: 3 };
Object.defineProperty(obj, "a", {
  get: function () {
    console.log('get');
  },
});
let arr = [1,2,obj]
JSON.stringify(arr)