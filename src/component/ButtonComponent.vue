<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{profile}}</p>
  </div>
</template>
<script>
export default {
  name: "ButtonComponent",
  data() {
    return {
      title: "A Vue App"
    };
  },
  created() {
    Object.assign(this.$data, {
      profile: "This is a Vue App p"
    });
    console.log(this.$data);
  }
};
</script>
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>