import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUp.vue';
import Questionnaire from '../views/Questionnaire.vue';
import SignIn from '../views/SignIn.vue';
import Templates from '../views/Templates.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates,
    },
  ],

  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split('#')[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
  },
});

export default router;
