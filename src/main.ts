import Vue, {CreateElement} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Foot from './components/Foot.vue';
import NavBar from './components/NavBar.vue';
import {VueHLJS} from '@/vue-plugins';

Vue.use(VueHLJS);
Vue.config.productionTip = false;
Vue.component('Foot', Foot);
Vue.component('NavBar', NavBar);
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  store,
  render: (h: CreateElement) => h(App),
}).$mount('#app');
