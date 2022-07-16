import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import todo from './components/todo.vue'
import view from './components/todoView.vue'

const routes = [
  {
    path: '/',
    component: todo
  },
  {
    path: '/view/:todo',
    component: view
  }
];

export default new VueRouter({ routes, mode: 'history' });