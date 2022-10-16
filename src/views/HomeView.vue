<template>
    <Navbar id="Navbar" />
  <main>
    <Footer />
    <QuestionnaireOrTemplates id="questionnaireOrTemplates" />
    <Pricing id="pricing" />
    <ContactUs id="contact" />
  </main>
</template>

<script>
import Pricing from "../components/Pricing.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import QuestionnaireOrTemplates from "../components/QuestionnaireOrTemplates.vue";
import ContactUs from "../components/ContactUs.vue";
export default {
  components: {
    Pricing,
    Navbar,
    QuestionnaireOrTemplates,
    ContactUs,
    Footer,
  },
};
</script>
