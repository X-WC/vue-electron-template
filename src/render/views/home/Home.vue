<script lang="ts" setup>
import {useCounterStore} from '../../pinia'
import {storeToRefs} from "pinia";
import {computed} from "vue";

// pinia使用示例
const store = useCounterStore();

// state里面的值通过storeToRefs解构后为响应式的
const {count} = storeToRefs(store);
const {increment, decrement} = store;

const doubleCount = computed(() => count.value * 2)
</script>

<template>
  <h1>Home</h1>
  <h2>count: {{ count }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <h2>doubleCount: {{ doubleCount }}</h2>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>
