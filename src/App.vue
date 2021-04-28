<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
      <a v-else href="#" @click="$_login">Login</a>
    </li>
  </ul>
  <main>
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

<style>
</style>
