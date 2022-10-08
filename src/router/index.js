import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

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
