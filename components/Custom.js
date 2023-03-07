export default {
  emits: ['maincountup'],
  props: ['maincount'],
  data() {
    return {
      mainCountw: this.mainCount,
      count: 1
    }
  },
  methods: {
    plus() {
      this.count++
    },

  },
  template: `<div @click="plus">Localcount is {{ count }}</div>
  <div @click="$emit('maincountup')">Maincount is {{ maincount }}</div>
  `
}
