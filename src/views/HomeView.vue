<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Pricing />
  </main>
</template>

<script>
import Pricing from '../components/Pricing.vue';
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Pricing,
    Navbar,
  },
};
</script>
