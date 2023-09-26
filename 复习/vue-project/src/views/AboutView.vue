<script setup lang="ts">
import {reactive} from "vue"
type Book = {
  title: string,
  id:string
}
const books  = reactive<Book[]>([
  {title: "同年", id:"同年"},
  {title: "我的大学", id:"我的大学"},
  {title: "在人间", id:"在人间"},
  ])
function addBook(){
  let random = Math.random()
  books.splice(2,0,{title: "死亡"+random,id:"死亡"+random})
}
</script>

<template>
  <div class="about">
    <button @click="addBook">死亡</button>
    <h1>This is an about page</h1>
    <div v-for="item in books" >{{ item.title }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
}
</style>
