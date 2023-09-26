// const expr = /a+(?<B>b+)+c/d;

// const result = expr.exec("aaabbbc")
// console.log(result);

// const obj = {a:1,b:2}
// console.log(obj.hasOwnProperty('a'));
// console.log(Object.hasOwn(obj,'a'));

// async function fetcUserPreferences() {
//     try { 
//       const users = await fetch('//user/preferences')
//         .catch(err => {
//           throw new Error('Failed to fetch user preferences', {cause: err})
//         })
//       }
//       catch(err){
//       }
//   }
//   fetcUserPreferences();

var myRe = /bbd/g;  
// console.log(myRe.exec('cdbbdbsdbdbddz') );
// console.log(myRe.exec('cdbbdbsdbdbddz') );
// console.log(myRe.exec('cdbbdbsdbdbddz') );

var re = /apples/gi;  
var str = 'apples are round, and apples are juicy.';  
var newstr = str.replaceAll('apples', 'oranges');  
console.log(newstr);

// // oranges are round, and oranges are juicy.
 