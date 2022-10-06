<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!-- <div id="app"> -->
  <button class="get-started-button">Get Started</button>
  <p class="intro-text">Build your custom website with Flexible</p>
  <Slider />
  <!-- </div> -->
</template>

<script>
import Slider from './components/Slider.vue';
export default {
  name: 'app',
  components: {
    Slider,
  },
};
</script>
