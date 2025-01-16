import { ref, watch } from "vue"

export function useCounter() {
    const counter = ref(0)
    
    // 增加
    const increment = () => counter.value++
    // 减少
    const decrement = () => counter.value--

    const doubleCount = ref(0)

    watch(() => counter.value, (newVal) => {
        // 如果是 2 的倍数那么就将 counter 值乘以2
        if (newVal && newVal % 2 === 0) {
            doubleCount.value = newVal * 2 
        }
    })

    return {
      counter,
      doubleCount,
      increment,
      decrement
    }
}