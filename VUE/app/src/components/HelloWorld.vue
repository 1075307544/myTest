<template>
  <div class="hello">
    <child :name="name">
      <template v-slot:hello="props">你好啊{{props.nm  }}</template>
      <template v-slot:byebye>再见啊</template>
      <template v-slot:default="props">嘻嘻嘻嘻{{ props.nm }}</template>
    </child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'HelloWorld',
  components:{child},
  props: {
    msg: String
  },
  data(){
    return {
      name:'xixihahah----'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
