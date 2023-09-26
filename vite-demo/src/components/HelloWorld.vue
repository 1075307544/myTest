<script setup lang="ts">
interface Tree {
  name: string;
  children?: Tree[];
}
withDefaults(
  defineProps<{
    data: Tree[];
  }>(),
  {
    data:()=>[{name:'1'}]
  }
);
</script>

<template>
  <div class="tree" v-for="item in data" :key="item.name">
    <div>{{ item.name }}</div>
    <HelloWorld
      v-if="item?.children?.length"
      :data="item?.children"
    ></HelloWorld>
  </div>
</template>

<style scoped>
.tree {
  margin-left: 20px;
}
</style>
