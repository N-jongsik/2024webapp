import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router"; //라우터 사용할 때 항상 적어야 함

createApp(App).use(router).mount("#app"); //라우터 사용
