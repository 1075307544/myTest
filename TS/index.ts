interface MM {
    name: string,
    age:number
}
interface BB {
    name: string,
    age:number,
    sex:string
}
let a:MM = {
    name: 'kk',
    age: 10
}
let b:BB = {
    name: 'kk',
    age: 10,
    sex:'男'
}
const date1 = new Date('2023-08-21');
const date2 = new Date('2023-08-15');

console.time('--')
if (date1 < date2) {
  console.log('date1 在 date2 之前');
} else if (date1 > date2) {
  console.log('date1 在 date2 之后');
} else {
  console.log('date1 和 date2 相同');
}
console.timeEnd('--')
