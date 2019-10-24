import Vue from './lib/vue.js';
import './css/style.css';
let Home = {
  template: `
    <p style="color:#787878;">Hello Home!</p>
  `
}
let About = {
  template: `
    <p>Hello About!</p>
  `
}
let vm = new Vue({
  el: '#app',
  data(){
    return {
      view: 'Home'
    }
  },
  methods:{
    toggleView(view){
      this.view = view;
    }
  },
  components:{
    Home,
    About
  }
});