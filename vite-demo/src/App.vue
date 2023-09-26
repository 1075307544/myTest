<template>
  <!-- <div>ref:{{ a }}</div> -->
  <!-- <div>shallowRef:{{ b }}</div> -->
  <!-- <div>{{ obj2 }}</div> -->
  <!-- <div>{{ xixi2 }}</div> -->
  <!-- <div>{{ haha2 }}</div> -->
  <HelloWorld :data="data"></HelloWorld>
  <div>{{ x }}-{{ y }}</div>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
import {  reactive } from "vue";
import {useMouseMove} from "./hooks/useMouseMove.ts"
interface Tree {
  name:string,
  children?:Tree[]
}

let {x,y} = useMouseMove()
console.log(x,y);

const data = reactive<Tree[]>([
  {
    name: '1',
    children: [{ name: '1 - 1' }],
  },
  {
    name: '2',
    children: [
      {
        name: '2 - 1',
        children: [
          {
            name: '2-1-1'
          },
        ],
      },
    ],
  },
  {name:'3'}
]);
// const user:Ref<N> = ref({name:'jw'})
// const user2 = shallowRef({name:'jw2'})
// const dom = ref()
// const aa = readonly({name:'xox'})
// const bb = readonly(user)
// const AA = reactive(aa)

// const pp = {c:'ccc'}
// const PP = reactive(pp)
// pp.c = 'dddfff'
// const obj = {obj:1}
// const obj2 = toRef(obj,'obj')
// const xixi = ref(obj)
// const xixi2 = toRef(xixi.value,'obj')
// const haha = reactive(obj)
// const haha2 = toRef(haha,'obj')
// const a = ref('app')
// const b = ref({b:11})
// const c = reactive({c:123})
// const obj = { a: 1 };
// const a = ref(obj);
// const b = reactive({ b: 2 });
// function click() {
  // user.value.name = "jjww"
  // user2.value.name = "jjww22"
  // triggerRef(user)
  // console.log(user2);
  // console.log(dom.value);
  // console.log(aa);
  // console.log(bb.value);
  // console.log(AA.name);
  // obj2.obj  = 2
  // xixi2.value = 2
  // haha2.value = 2
  // xixi.value.obj = 66
  // obj.obj = 22
  // console.log(obj.obj);
  // console.log(obj2.value);
  // a.value.a = 99;
  // console.log(a);
  // console.log(toRaw(a.value));
  // console.log(b);
// }
</script>

<style scoped></style>
