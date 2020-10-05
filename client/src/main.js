import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './scripts/store/store';

import Intro from './pages/Intro.vue';
import Home from './pages/Home.vue';
import Blog from './layouts/Blog.vue';
import NotFound from './pages/NotFound.vue';
import About from './pages/About.vue';
import Customize from './pages/customize.vue';

import App from './App.vue';

import themes from './scripts/themes';

import './scss/style.scss';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Intro },
  { path: '/cafe', component: Blog,
    children: [
      {
        path: '/cafe/about', component: About
      },
      {
        path: '/cafe/customize', component: Customize 
      },
      { path: '*', redirect: NotFound }, 
  ]},
  { path: '*', redirect: '/' }, 
];

const router = new VueRouter({
  hash: true,
  routes: routes,
});

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  beforeCreate() { 
    this.$store.commit('initStore');
  },
  methods: {
    acceptGraphicsSettings () {
      this.$store.commit('acceptGraphics');
    },
    setQualityLevel (quality) {
      this.$store.commit('updateQualitySettings', quality);
    },
    setColorScheme (theme) {
      this.$store.commit('updateColorSettings', theme);
    }
  },
  store: store
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
