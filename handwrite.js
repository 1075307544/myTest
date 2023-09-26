//手动实现reduce
Array.prototype.myreduce = function (callback, initialValue) {
  if (!initialValue && this.length === 0) {
    console.log("error");
  } else {
    let total;
    for (let i = 0; i < this.length; i++) {
      total = callback(initialValue, this[i], i, this);
      initialValue = total;
    }
    return total;
  }
};
let array = [1, 9, 2, 3, 10, 5, 8, 4, 6, 7];
let result = array.myreduce((a, b) => {
  return a * b;
}, 10);
console.log(result);
//冒泡排序
function maopao(array) {
  //从小到大
  for (let i = 1; i <= array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let a = array[j + 1];
        array[j + 1] = array[j];
        array[j] = a;
      }
    }
  }
  return array;
}
// console.log(maopao(array));
//插入排序
function charu(array) {
  //从小到大
  let newArray = [array[0]];
  for (let i = 1; i <= array.length - 1; i++) {
    for (let j = newArray.length - 1; j >= 0; j--) {
      if (array[i] >= newArray[j]) {
        newArray.splice(j + 1, 0, array[i])
        break
      } else {
        if (j == 0) {
          newArray.unshift(array[i]);
        }
      }
    }
  }
  return newArray;
}
console.log(charu(array));

//快速排序
function kuaisu(array) {
  if (array.length <= 1) {
    return array
  }
  let tagIndex = Math.floor(array.length / 2),
    tag = array.splice(tagIndex, 1)[0],
    left = [],
    right = []
  for (let i = 0; i <= array.length -1; i++) {
    if (array[i] <= tag) {
      left.push(array[i])  
    } else {
      right.push(array[i])
    }
  }
  return kuaisu(left).concat([tag],kuaisu(right))
}
console.log(kuaisu(array));
