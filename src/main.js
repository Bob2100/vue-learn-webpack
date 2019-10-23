import Vue from './lib/vue.js';
import ButtonComponent from './component/ButtonComponent.vue';
import Hello from './component/Hello.vue';
import Assign from './component/Assign.vue';
import FlyTable from './component/FlyTable.vue';
import './css/style.css';

let vm = new Vue({
  el: '#app',
  data(){
    return {
      fields: [
        {
          label: '名称',
          prop: 'name'
        },
        {
          label: '数量',
          prop: 'quantity'
        },
        {
          label: '价格',
          prop: 'price'
        },{
          label: '',
          prop: 'operate'
        },
      ],
      goods: [
        {
          name: '苹果',
          quantity: 200,
          price: 6.8,
          isMarked: false
        },
        {
          name: '西瓜',
          quantity: 50,
          price: 4.8,
          isMarked: false
        },
        {
          name: '榴莲',
          quantity: 0,
          price: 22.8,
          isMarked: false
        }
      ]
    }
  },
  components: {
    ButtonComponent,
    Hello,
    Assign,
    FlyTable
  }
});