<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="app">
    <p>Build your custom website with Flexible  </p>
    <button>Get Started</button>
    <Slider />
 
  </div>
</template>

<script>
import Slider from "./views/Slider.vue";
export default {
  name: "app",
  components: {
    Slider
  }
};
</script>