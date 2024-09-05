import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store"; //mount되기 전에 사용 -> use(store)

createApp(App).use(store).mount("#app");
