<script>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar,
    RouterView,
  },
  data() {
    return {
      path: '',
    };
  },
};
</script>

<template>
  <header>
    <Navbar
      v-if="this.$route.name != 'signin' && this.$route.name != 'signup'"
    />
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    <Footer />
  </footer>
</template>
