<template>
  <Header />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/main.scss';

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid $color-grey-dark;
}
</style>
