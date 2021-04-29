<template>
  <div>
    <h1>About me</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
  props: {
    msg: String,
  },
  computed: mapGetters(["isLoggedIn"]),
  created(){
    if(!this.isLoggedIn){
      this.$router.replace('/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
h1 {
  color: $color-secondary-light;
}
</style>
