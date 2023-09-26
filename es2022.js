// 1.正则表达式匹配索引
const expr = /a+(?<B>b+)+c/d;
const result = expr.exec("aaabbbc")
console.log(result.indices);
