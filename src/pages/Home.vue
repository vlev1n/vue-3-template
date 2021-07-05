<template>
  <i class="el-icon-plus">渣渣！</i>
  <h1>{{ state }}</h1>
  <h1>{{ aa.bb }}</h1>
</template>

<script setup>
import { ref } from 'vue'

const state = ref(3)
const aa = ref({ bb: 0 })
setInterval(() => {
  state.value++
  aa.value.bb++
}, 1000)
</script>
