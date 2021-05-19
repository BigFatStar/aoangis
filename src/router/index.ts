import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
import solution from "./modules/solution";
import newsDetail from "./modules/newsDetail";
import aboutUs from "./modules/aboutUs";
import enjoyus from "./modules/enjoyus";
Vue.use(Router);
// 这是一个路由管理的模块，是各个路由的出口
const router = new Router({
    // mode: 'history',
    routes: [
        aboutUs,
        home,
        news,
        enjoyus,
        solution,
        newsDetail,
        {
            path: "/",
            redirect: '/home'
        },
        {
            path: "*",
            redirect: '/home'
        },
    ]
});
export default router;