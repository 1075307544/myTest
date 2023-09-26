<script setup lang="ts">
import About from './about'
const {count,about} = About()
</script>

<template>
  <button>
    {{ count }} <!-- 当点击button时，始终显示为 { "count": 0 } -->
    {{ about.a }}
  </button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
