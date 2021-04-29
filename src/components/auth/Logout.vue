<template>
  <div>
    Loading...
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Logout',
  mounted() {
    this.logout();
    this.$router.push('/');
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>
