import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Questionnaire from "../views/Questionnaire.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: Questionnaire,
    },
  ],
});

export default router;
