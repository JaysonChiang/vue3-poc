<template>
  <div class="header">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link v-show="isLoggedIn" to="/about">About</router-link> |
      <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: mapGetters(['isLoggedIn']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
h1 {
  color: $color-primary;
}
</style>
