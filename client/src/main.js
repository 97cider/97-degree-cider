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
      }
  ]},
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  routes
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
  data () {
    return {
      colorScheme: themes.themes[0],
    };
  },
  methods: {
    setQualityLevel (quality) {
      this.$store.commit('updateQualitySettings', quality);
    },
    setColorScheme (theme) {
      this.colorScheme = theme;
    }
  },
  store: store
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
