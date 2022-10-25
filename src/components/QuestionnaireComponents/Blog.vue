<template>
  <div v-if="question.type == 'radio'">
    <RadioButtonsTemplate :question="question" />
  </div>
  <div v-if="question.type == 'text'">
    <TextBoxTemplate :question="question" />
  </div>
  <div v-if="question.type == 'checkbox'">
    <CheckBoxesTemplate :question="question" />
  </div>
</template>
<script>
import RadioButtonsTemplate from "./RadioButtonsTemplate.vue";
import TextBoxTemplate from "./TextBoxTemplate.vue";

import CheckBoxesTemplate from "./CheckBoxesTemplate.vue";
export default {
  components: {
    RadioButtonsTemplate,
    TextBoxTemplate,
    CheckBoxesTemplate,
  },
  props: ["question"],
};
</script>
