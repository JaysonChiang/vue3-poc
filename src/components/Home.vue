<template>
  <div class="hello">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
h1{
  color: $color-secondry;
}
</style>
