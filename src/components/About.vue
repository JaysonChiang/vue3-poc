<template>
  <div class="hello">
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
h1 {
  color: $color-primary;
}
</style>
