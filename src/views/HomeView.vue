<template>
  <Navbar />
  <main>
    <QuestionnaireOrTemplates />
    <Pricing id="pricing" />
    <h1 class="example" id="home">Welcome to the Home page</h1>
  </main>
</template>

<script>
import Pricing from "../components/Pricing.vue";
import Navbar from "../components/Navbar.vue";
import QuestionnaireOrTemplates from "../views/QuestionnaireOrTemplates.vue";
export default {
  components: {
    Pricing,
    Navbar,
    QuestionnaireOrTemplates,
  },
};
</script>
