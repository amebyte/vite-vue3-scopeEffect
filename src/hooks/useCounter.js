import { ref, watch } from "vue"

export function useCounter() {
    // 定义计数器
    const counter = ref(0)
    // 增加
    const increment = () => counter.value++
    // 减少
    const decrement = () => counter.value--
    // 计数器的偶数双倍值
    const doubleCount = ref(0)
    // 监听计数器值的变化
    watch(() => counter.value, (newVal) => {
        console.log('newVal', newVal, newVal % 2 === 0)
        // 当计数器的值是偶数时，计算并存储这个值的两倍
        if (newVal % 2 === 0) {
            console.log('xxx')
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