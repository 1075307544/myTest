<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      a:1
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
    console.log(this);
    console.log(this.$options);
  },
  created(){
    console.log('created');
    console.log(this.a);
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('updated');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('destory');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
