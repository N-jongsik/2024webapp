import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //initial data
    name: "남종식",
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "jeju",
    },
  },
  mutations: {
    //변형 commit state값을 변화시킴
    updateData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
  },
  actions: {
    //비동기
    async getWeather(context) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      console.log(res.data);
      context.commit("updateData", res.data);
    },
  },
});
