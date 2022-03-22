import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import PostListPage from "@/pages/PostListPage";
import AboutPage from "@/pages/AboutPage";
import PostPage from "@/pages/PostPage";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostListPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostPage
    }

];

const router = createRouter({
    routes, history: createWebHistory(process.env.BASE_URL)
})

export default router;