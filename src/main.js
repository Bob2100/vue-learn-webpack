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
});

Vue.component('fly-table', {
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    reverse() {
      this.goods.reverse();
    }
  },
  render(createElement) {
    return createElement('div', {
      slot: 'fly-table'
    }, [
      createElement('h2', this.$slots.title),
      createElement('button', {
        class: ['btn', 'btn-text'],
        attrs: {
          disabled: false,
          title: '点击使数组倒序'
        },
        domProps: {
          innerText: '倒序'
        }
      })
    ]);
  }
});

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