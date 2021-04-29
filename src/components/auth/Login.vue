<template>
  <div class="hello">
    <h1>Login</h1>
    <button @click="$_login">login</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  computed: mapGetters(["isLoggedIn"]),
  mounted() {
      if(this.isLoggedIn){
          this.$router.push('/');
      }
  },
  methods: {
    ...mapActions(["login"]),
    $_login() {
      this.login("this-is-a-token");
      this.$router.push('/');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
h1 {
  color: $color-tertiary-light;
}
</style>
