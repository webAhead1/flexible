<template>
  <GetStarted />
  <Slider />
  <About />
</template>

<script>
import Slider from '../components/Slider.vue';
import About from '../components/About.vue';
import GetStarted from '../components/GetStarted.vue';
export default {
  components: {
    Slider, About, GetStarted
  },
};
</script>
