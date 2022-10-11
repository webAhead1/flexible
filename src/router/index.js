import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
