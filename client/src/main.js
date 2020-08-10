import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
