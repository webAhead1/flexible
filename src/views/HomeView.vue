<template>
  <main>
    <div class="flex justify-around space-x-4">
      <GetStarted />
      <Slider />
    </div>
    <About id="about" />
    <QuestionnaireOrTemplates />
    <Pricing id="pricing" />
    <ContactUs id="contact" />
  </main>
</template>
<script>
import Pricing from '../components/Pricing/Pricing.vue';
import QuestionnaireOrTemplates from '../components/QuestionnaireOrTemplates/QuestionnaireOrTemplates.vue';
import ContactUs from '../components/ContactUs/ContactUs.vue';
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
