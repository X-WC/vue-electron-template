import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/home/Home.vue";
import NotFound from "../views/error/NotFound.vue";

// 静态路由
const staticRoutes = [
    {path: '/', component: Home},
    {path: '/home', redirect: '/'},
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
];

export const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [...staticRoutes], // `routes: routes` 的缩写
})


