import { createStore } from '../plugins/js/vuex.esm-browser.prod.js';

export default createStore({
  state: {
    // states ['active', 'done', 'cancelled', 'pending']
    tasks: [
      {
        name: 'One',
        status: 'active',
      },
      {
        name: 'Two',
        status: '',
      },
    ],
    taskStates: {
      active: ['', 'Активен'],
      done: ['primary', 'Завершен'],
      cancelled: ['danger', 'Отменен'],
      pending: ['warning', 'Выполняется'],
    },
  },
  getters: {
    tasksLength(state) {
      return state.tasks.length;
    },
    tasksActiveLength(state) {
      return state.tasks.filter((t) => t.status === 'active').length;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
