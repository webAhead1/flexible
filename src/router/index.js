import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Templates from "../components/temps/Templates.vue";
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
      path: "/sign-up",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/sign-in",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/templates",
      name: "Templates",
      component: Templates,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: Questionnaire,
    },
  ],
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        setTimeout(() => {
          document.getElementById(el).scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      setTimeout(() => {
        document.getElementById("app").scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  },
});

export default router;
