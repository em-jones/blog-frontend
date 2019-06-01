import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      alias: 'About Em',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/Post.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      alias: 'Portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
    },
  ],
});
