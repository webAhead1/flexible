<script setup>
import { RouterLink, RouterView } from "vue-router";
import Template from "./components/Template.vue";
import QuestionnaireNavBar from "./components/QuestionnaireNavBar.vue";
</script>
<script>
export default {
  components: { Template, QuestionnaireNavBar },
};
</script>
<template>
  <QuestionnaireNavBar />
  <Template />
</template>
