// eslint-disable-next-line vue/require-v-for-key
<template>
  <div class="hello">
    <button @click="add">add</button>
    <ul>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
        <input v-for="item in list" type="text" name="" :id="item.id">
    </ul>
    <div id="cir"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      list:[
        {name:1,id:1},
        {name:2,id:2},
        {name:3,id:3},
      ]
    }
  },
  methods:{
    add(){
      this.list.unshift({name:4,id:4})
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
#cir {
  width: 200px;
  height:200px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient( red 30%, blue 30%);
  &::after {
    content:'30%';
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 20px;
    top: 20px;
    line-height:160px;
  }
}
</style>
