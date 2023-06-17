import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./render/router"; // 引入router
import {pinia} from "./render/pinia"; // 引入pinia

createApp(App).use(router).use(pinia).mount('#app')
