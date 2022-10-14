<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div id="questionnaireOrTemplates">
      <QuestionnaireOrTemplates />
    </div>
    <div id="pricing">
      <Pricing />
    </div>
  </main>
</template>

<script>
import Pricing from '../components/Pricing.vue';
import Navbar from '../components/Navbar.vue';
import QuestionnaireOrTemplates from '../components/QuestionnaireOrTemplates.vue';
export default {
  components: {
    Pricing,
    Navbar,
    QuestionnaireOrTemplates,
  },
};
</script>
