<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div id="home" class="flex justify-around pt-[5rem] space-x-4">
      <GetStarted />
      <Slider />
    </div>
    <About id="about" />
    <QuestionnaireOrTemplates id="quesOrTemp" />
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
