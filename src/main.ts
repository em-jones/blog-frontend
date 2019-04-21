import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Foot from './components/Foot.vue';
import NavBar from './components/NavBar.vue';
Vue.config.productionTip = false;
Vue.component('Foot', Foot);
Vue.component('NavBar', NavBar);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
