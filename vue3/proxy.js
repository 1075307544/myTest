let dog = {
    name:'fafa',
    detail:{
        height:100,
        width:50,
        like:['eat','shit']
    }
}
function myproxy(obj,handler) {
    return new Proxy(obj,{
        get(obj,key){
            console.log('[ get ] >', 'get',key)
            if(obj[key] && typeof obj[key]==='object'){
                return myproxy(obj[key])
            }
            return obj[key]
        },
        set(obj,key,value){
            console.log('[ set ] >', 'set',key,value)
            obj[key]=value;
            return true
        }
    })
}
let pxyDog =  myproxy(dog)
// console.log('[ dog.name ] >', dog.name)
// console.log('[ dog.name ] >', pxyDog.name)
// console.log('[ pxyDog.detail.height ] >', pxyDog.detail.height)
// pxyDog.name = 'kkkk'
// console.log(pxyDog.name);
// pxyDog.detail.height = 200
// console.log(pxyDog.detail.like[0]);
// pxyDog.detail.like[2] = 'zzz'
// console.log(pxyDog.detail.like);
// pxyDog.detail.like.push('xixi')
// dog.detail.like.push('kkk')
// console.log(pxyDog.detail.like);
// pxyDog.detail.height = 200
// console.log(pxyDog.detail.height);\


