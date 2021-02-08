import { createRouter, createWebHistory } from 'vue-router'
import Product from "../views/Product.vue";
import Home from "../views/Home.vue";
export default createRouter({
    // 指定路由模式
    history: createWebHistory(),
    // 路由地址
    routes: [
        { path: '/product', component: Product },
        { path: '/', component: Home },
    ]
})