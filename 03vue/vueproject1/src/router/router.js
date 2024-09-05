import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import DetailView from "../components/DetailView.vue";
import AboutView from "../components/AboutView.vue";
import PortfolioView from "../components/PortfolioView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/portfolio/:id",
      name: "detail",
      component: DetailView,
    },
  ],
});

export default router;
