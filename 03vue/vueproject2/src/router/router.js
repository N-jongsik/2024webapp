import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import DetailView from "../components/user/DetailView.vue";
import FullMapView from "../components/user/FullMapView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/map",
      name: "map",
      component: FullMapView,
    },
    {
      path: "/user/:userid",
      name: "UserDetail",
      component: DetailView,
    },
  ],
});
export default router;
