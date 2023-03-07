import { createApp } from '../plugins/js/vue.esm-browser.js';
import { createRouter, createWebHistory, createWebHashHistory }  from '../plugins/js/vue-router.esm-browser.js';
import { createVuetify } from '../plugins/js/vuetify-labs.esm.min.js';
import Custom from '../components/Custom.js';
import Home from '../views/Home.js';
import About from '../views/About.js';

//const { createRouter, createWebHistory, createWebHashHistory } = VueRouter
const vuetify = createVuetify();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})

const app = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      count: 10,
      theme: 'light',
      text: 'Textsss',
    }
  },
  provide() {
    return {
      mainCount: this.count
    }
  },
  methods: {
    onClick() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    mainCountUp() {
      this.count++
      console.log(this.count);
    }
  },
  components: {
    Custom
  }
});

app.use(vuetify).use(router).mount('#app')
