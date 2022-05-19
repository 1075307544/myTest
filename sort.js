let a = ['1','abcds','abcf','b','c','99',100]
let b  = 'abc'
let c = [1,3,4,5,77,14,22]
console.log(b.toString());
console.log(a.sort());
console.log(c.sort((a,b) =>{
  return a-b
}));