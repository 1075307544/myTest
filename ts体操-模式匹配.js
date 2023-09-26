let str = 'abcabc'
let xx = str.replace(/a(b)/g,'$1,$1,$2')
console.log(xx);