import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

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
