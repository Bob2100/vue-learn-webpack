import Vue from './lib/vue.js';
import ButtonComponent from './component/ButtonComponent.vue';
import Hello from './component/Hello.vue';
import Assign from './component/Assign.vue';
import './css/style.css';
Vue.component('button-counter', {
  data() {
    return {
      counter: 1
    }
  },
  template: '<button @click="counter++">clicked {{counter}} times</button>'
});
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

let vm = new Vue({
  el: '#app',
  data: {
    title: 'A Vue App qq'
  },
  components: {
    ButtonComponent,
    Hello,
    Assign
  }
});