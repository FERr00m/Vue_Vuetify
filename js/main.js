import { createApp } from '../plugins/js/vue.esm-browser.js';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from '../plugins/js/vue-router.esm-browser.js';
import { createVuetify } from '../plugins/js/vuetify-labs.esm.min.js';
import store from '../store/index.js';

/*-------------
  Components
--------------*/
import Custom from '../components/Custom.js';
/*------------*/

/*-------------
  Views
--------------*/
import HomeView from '../views/HomeView.js';
import AboutView from '../views/AboutView.js';
/*------------*/

/*-------------
  Router
--------------*/
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
/*------------*/

/*-------------
  Init App
--------------*/
const vuetify = createVuetify();
const app = createApp({
  data() {
    return {
      isMounted: false,
      themeFromLocalStorage: this.setTheme(),
      themeObject: {
        'v-theme--light': this.themeFromLocalStorage === 'light',
        'v-theme--dark': this.themeFromLocalStorage === 'dark',
      },
      message: 'Hello Vue!',
      count: 10,
      theme: 'light',
      text: 'Textsss',
    };
  },
  beforeMount() {
    this.setTheme();
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
    }, 1000);
  },
  provide() {
    return {
      mainCount: this.count,
    };
  },
  methods: {
    changeTheme() {
      this.themeFromLocalStorage =
        this.themeFromLocalStorage === 'light' ? 'dark' : 'light';
      this.theme = this.themeFromLocalStorage;
      localStorage.setItem('theme', this.themeFromLocalStorage);
    },
    mainCountUp() {
      this.count++;
    },
    setTheme() {
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
        this.themeFromLocalStorage = 'light';
        this.theme = this.themeFromLocalStorage;
      } else {
        this.themeFromLocalStorage = localStorage.getItem('theme');
        this.theme = this.themeFromLocalStorage;
      }
      return this.themeFromLocalStorage;
    },
  },
  components: {
    Custom,
  },
});

app.use(store).use(vuetify).use(router).mount('#app');
/*------------*/
