<template>
  <main>
    <QuestionnaireOrTemplates />
    <Pricing id="pricing" />
    <ContactUs id="contact" />
  </main>
</template>
<script>
import Pricing from '../components/Pricing/Pricing.vue';
import QuestionnaireOrTemplates from '../components/QuestionnaireOrTemplates/QuestionnaireOrTemplates.vue';
import ContactUs from '../components/ContactUs/ContactUs.vue';
export default {
  components: {
    Pricing,
    QuestionnaireOrTemplates,
    ContactUs,
  },
};
</script>
