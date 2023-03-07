export default {
  data() {
    return { count: 0 }
  },
  methods: {
    plus() {
      this.count++
    }
  },
  template: `<div @click="plus">count is {{ count }}</div>`
}
