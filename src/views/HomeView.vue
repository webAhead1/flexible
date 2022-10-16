<template>
    <Navbar id="Navbar" />
  <main>
    <QuestionnaireOrTemplates id="questionnaireOrTemplates" />
    <Pricing id="pricing" />
    <ContactUs id="contact" />
  </main>
</template>

<script>
import Pricing from "../components/Pricing.vue";
import Navbar from "../components/Navbar.vue";
import QuestionnaireOrTemplates from "../components/QuestionnaireOrTemplates.vue";
import ContactUs from "../components/ContactUs.vue";
export default {
  components: {
    Pricing,
    Navbar,
    QuestionnaireOrTemplates,
    ContactUs,
  },
};
</script>
