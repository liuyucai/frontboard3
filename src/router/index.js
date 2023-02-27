import { createRouter, createWebHistory } from 'vue-router'


//路由数组
const routes = [

    {
        //基本格式
        path: "",

        name: "",

        component: "",

        children: []

    }

]

//路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出路由对象，在main.js中引用
export default router