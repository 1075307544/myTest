const arr = [1,2,3]
let pr = new Proxy(arr,{
    get(target,key,receiver){
        console.log('get');
        return target[key]
    },
    set(target,key,value,receiver){
        console.log('set');
        return Reflect.set(target,key,value)
    }
})
// console.log(pr);
// pr[0] = 4
pr[4] = 5