import { ref,reactive, toRef, toRefs } from 'vue'
export default function about(){

    const obj = {a:1}
    const count = ref({c:3})
    const about = reactive(obj)

    console.log(count) 
    console.log(about)
    about.a = 33
    console.log(obj.a,about.a);
    const aa = toRefs(obj)
    aa.a.value = 88
    console.log(obj);
    
    

    
    

    // console.log(count.value) // 1
    return {
        count,
        about
    }
}