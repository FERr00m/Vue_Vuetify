import { createApp } from '../plugins/js/vue.esm-browser.js';
import { createVuetify } from '../plugins/js/vuetify-labs.esm.min.js';
import Custom from '../components/Custom.js';

const vuetify = createVuetify();

const app = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      theme: 'light',
      text: 'Text',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
    methods: {
    onClick() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
  components: {
    Custom
  }
});

app.use(vuetify).mount('#app')