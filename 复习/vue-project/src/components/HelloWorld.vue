<template>
  <Suspense>
     <!-- v-slot:defaul可以简写成#defaul -->
    <template v-slot:default>
      <AsyncComp/>
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import AsyncC from './AsyncComp.vue'
const AsyncComp = defineAsyncComponent(() =>import('./AsyncComp.vue'))
export default {
  setup() {
    return {
    }
  },

  components: {
    AsyncComp,
  }
}
</script>