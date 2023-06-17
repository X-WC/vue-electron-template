import {defineStore} from 'pinia'

export const userState = defineStore('userInfo', {
    state: (): User => {
        return {
            id: 1,
            name: 'cc'
        }
    },
    getters: {
        sayHello: (state) => `Hello, ${state.name}!`
    },
    actions: {},
    persist: true, // 开启持久化存储
})
