<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{obj.profile}}</p>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
  export default {
    name: "Assign",
    data() {
      return {
        title: "A Vue App",
        obj: {}
      };
    },
    created(){
      this.$set(this.obj, 'profile', 'This is a Vue App.');
      console.log('created', this.obj);
    },
    beforeMount () {
      console.log('beforeMount');
    },
    mounted () {
      Object.assign(this.obj, {
        profile: 'This is a Vue test App.'
      });
      console.log('mounted', this.obj);
    },
    methods: {
      toggle(){
        Object.assign(this.obj, {
          profile: 'This is a Vue App for test.'
        });
        console.log('toggle', this.obj);
      }
    }
  };
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>