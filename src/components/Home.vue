<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="info in weatherForcast" :key="info.date">
        <div>date {{info.date}}</div>
        <div>temptureC {{info.temperatureC}}</div>
        <div>summary {{info.summary}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api/weather.js';

export default {
  name: "Home",
  data(){
    return{
      weatherForcast:[]
    }
  },
  async mounted () {
    const data = await api.getWeatherForcast()
    console.log('data',data)
    this.weatherForcast = data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
h1 {
  color: $color-primary;
}
</style>
