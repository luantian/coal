import Vue from 'vue';
import Router from 'vue-router';
import test from './test'

const Login = () => import('@/views/Login');
const Home = () => import('@/views/Home');


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () =>  '@/views/Index'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  ...test
]

const router = new Router({
  mode: 'history',
  routes
})

// 标识是否第一次加载，用于在路由守卫中处理首次加载时路由路径未匹配的情况
let isFirstLoad = true;

router.beforeEach((to, from, next) => {
  if (Array.isArray(to.matched) && to.matched.length > 0) {
    next();
  } else if (isFirstLoad) {
    next({
      path: '/',
      replace: true
    });
  } else {
    next(false);
  }
  isFirstLoad = false;
})

export default router
