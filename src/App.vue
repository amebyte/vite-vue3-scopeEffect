<script setup>
import { ref } from 'vue'
import Counter1 from './components/Counter1.vue'
import Counter2 from './components/Counter2.vue'

const isShow = ref(true)
const handleHide = () => {
  isShow.value = false
}
</script>

<template>
  <Counter1 v-if="isShow" />
  <Counter2 />
  <button @click="handleHide">隐藏第一个组件</button>
</template>
