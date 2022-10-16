<template>
  <main>
    <GetStarted />
    <Slider />
    <About /> 
    <QuestionnaireOrTemplates />
    <Pricing id="pricing" />
    <ContactUs id="contact" />
  </main>
</template>
<script>
import Pricing from "../components/Pricing/Pricing.vue";
import QuestionnaireOrTemplates from "../components/QuestionnaireOrTemplates/QuestionnaireOrTemplates.vue";
import ContactUs from "../components/ContactUs/ContactUs.vue";
import Slider from '../components/Slider/Slider.vue';
import About from '../components/About/About.vue';
import GetStarted from '../components/GetStarted/GetStarted.vue';
export default {
  components: {
    Slider,
    About,
    GetStarted,
    Pricing,
    QuestionnaireOrTemplates,
    ContactUs,
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
