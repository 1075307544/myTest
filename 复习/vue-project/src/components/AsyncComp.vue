<template>
    <h2>AsyncComp22</h2>
    <p>{{msg}}</p>
  </template>
  
  <script lang="ts">
  import {ref} from "vue"
  export default {
    name: 'AsyncComp',
    async setup () {
       const msg = ref('nihao')  
       return {
        msg
       }
    }
  }
  </script>
  
  