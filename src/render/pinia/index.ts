import {createPinia, defineStore} from "pinia";
import {ref} from "vue";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate' // pinia持久化存储

export const pinia = createPinia().use(piniaPluginPersistedState);

// 例子
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);

    // actions
    function increment() {
        count.value++;
    }

    function decrement() {
        count.value--;
    }

    return {count, increment, decrement}
})
