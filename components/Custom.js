export default {
  emits: ['maincountup'],
  props: ['maincount'],
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    plus(e) {
      this.count++;
      console.log(this.$store.state.tasks);
      console.log(this.$store.getters.tasksLength);
      console.log(this.$store.getters.tasksActiveLength);
    },
  },
  template: `<v-btn @click="plus">Localcount is {{ count }}</v-btn>
  <v-btn @click="$emit('maincountup')">Maincount is {{ maincount }}</v-btn>
  `,
};
