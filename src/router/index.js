import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignInUp/SignUp.vue";
import SignIn from "../views/SignInUp/SignIn.vue";
import StartQuestionnaire from "../views/StartQuestionnaire/StartQuestionnaire.vue";
import Templates from "../views/temps/Templates.vue";

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
      name: "templates",
      component: Templates,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: StartQuestionnaire,
    },
  ],
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        const element = document.getElementById(el);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;
