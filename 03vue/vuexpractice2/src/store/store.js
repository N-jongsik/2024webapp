import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    //초기 데이터
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "jeju",
    },
  },
  mutations: {
    //변화내용 commit사용(state,paylad)
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
    //비동기 데이터 dispatch사용 (context)
    getWeather: async (context) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      context.commit("updateData", res.data);
    },
  },
});
