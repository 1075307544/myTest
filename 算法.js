// 冒泡排序
let arr = [2, 23, 5, 12, 6, 19, 30];
function maopao(arr) {
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - 1 - k; i++) {
      if (arr[i] > arr[i + 1]) {
        let c = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = c;
      }
    }
  }
  return arr;
}
// 快速排序
function firstSort(arr, begin, end) {
  let center = Math.floor((end + begin) / 2);
  let i = begin;
  let j = end;
  while (i <= j) {
    while (arr[i] < arr[center]) {
      i++;
      console.log("++++");
    }
    while (arr[j] > arr[center]) {
      j--;
      console.log("----");
    }
    if (i <= j) {
      let c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
      i++;
      j--;
      console.log("exchange");
    }
  }
  console.log("[ i ] >", i);
  return i;
}
function fast(arr, begin, end) {
  let index = firstSort(arr, begin, end);
  if (index - begin > 2) {
    fast(arr, begin, index - 1);
  }
  if (index < end) {
    fast(arr, index, end);
  }
  return arr;
}
// console.log(fast(arr, 0, 6));

//插入排序
function charu(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    while (arr[i] <= arr[index - 1]) {
      index--;
    }
    if (index >= 0) {
      let a = arr[i];
      arr.splice(i, 1);
      arr.splice(index, 0, a);
    }
  }
  return arr;
}
// console.log(charu(arr));
console.log([1,[2,[3]]].flat());
function myFlat(arr){
    let newArr = [];
    arr.forEach(item=>{
        if(Array.isArray(item)){
            newArr = newArr.concat(myFlat(item));
        }else{
            newArr.push(item);
        }
    })
    return newArr;
}
console.log(myFlat([1,[2,[4,5]]]));
console.log([1,2,[3,[4]]].toString());
console.log('jiangWeiR'.replaceAll(/[A-Z]/g,"$1"));
