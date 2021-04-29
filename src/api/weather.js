import axios from 'axios';

export default {
  async getWeatherForcast() {
    try {
      return await axios.get(`/api/weatherforcast`);
    } catch (e) {
      throw new Error('API Fail.');
    }
  },
};
