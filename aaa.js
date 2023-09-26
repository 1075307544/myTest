const memorize = (fn) => {
  let cacheMap = {};
  return function (...args) {
    const cacheKey = args.join("_");
    if (cacheKey in cacheMap) {
      return cacheMap[cacheKey];
    } else {
      return (cacheMap[cacheKey] = fn.call(this, ...args));
    }
  };
};

function add(a, b) {
  console.log(a,b,this);
  return a + b;
}
console.log(222)
const obj = {};
obj.madd = memorize(add);
obj.madd(1, 2);
obj.madd(1, 2);
