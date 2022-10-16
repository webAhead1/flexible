<template>
  <div id="idtest">
 
  <GetStarted />
  <Slider />
  <About /> 
   <Pricing /> 
  </div>
</template>

<script>
import Pricing from "../components/Pricing.vue";
import Slider from '../components/Slider.vue';
import About from '../components/About.vue';
import GetStarted from '../components/GetStarted.vue';
export default {
  components: {
    Slider,
    About,
    GetStarted,
    Pricing,
  },
};
</script>
<style>
#idtest {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
