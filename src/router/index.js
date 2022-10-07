import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUp.vue';
import Questionnaire from '../views/Questionnaire.vue';
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
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
    },
  ],
  // scrollBehavior: function (to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash,
  //     };
  //   }
  // },

  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }

  //   if (to.hash) {
  //     return { selector: to.hash };
  //   }
  //   return { x: 0, y: 0 };
  // },

  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split('#')[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
      }
    } else if (SavedPosition) {
      return SavedPosition;
      // } else {
      //   document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
      // }
    }
  },
});

export default router;
