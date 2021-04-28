<template>
  <div class="header">
    <div>
      <router-link to="/">Home</router-link>
    </div>

    <div>
      <router-link to="/about">About</router-link>
      |
      <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
      <a v-else href="#" @click="$_login">Login</a>
    </div>
  </div>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["login", "logout"]),
    $_login() {
      this.login("this-is-a-token");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/main.scss";
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid $color-grey-dark;
}
</style>
