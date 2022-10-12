<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div id="pricing">
      <Pricing />
    </div>
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
