import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import DetailView from "../components/user/DetailView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
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
      path: "/user/:num",
      name: "UserDetail",
      component: DetailView,
    },
  ],
});
export default router;
