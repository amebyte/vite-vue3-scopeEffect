<template>
    <div>
        <p>当前值： {{state.counter}}</p>
        <p>偶数双倍值：{{state.doubleCount}}</p>
        <button @click="state.increment">+</button>
        <button @click="state.decrement">-</button>
    </div>
</template>
<script setup>
import { useCounter } from '../hooks/useCounter';
const state = useCounter()
</script>