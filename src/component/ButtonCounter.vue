<template>
  <button @click="counter++">clicked {{counter}} times</button>
</template>
<script>
  export default {
    name: "ButtonComponent",
    data() {
      return {
        counter: 1
      };
    }
  };
</script>