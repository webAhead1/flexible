<script>
import Navbar from "../components/Navbar.vue";
import Template from "../components/Template.vue";
import TextBox from "../components/TextBox.vue";
import CheckBoxes from "../components/CheckBoxes.vue";
import RadioButtons from "../components/RadioButtons.vue";
import ContactQuestion from "../components/ContactQuestion.vue";

export default {
  data() {
    return {
      currentStep: 1,
      text: "",
    };
  },

  methods: {
    getData() {
      if (this.currentStep == 2) {
        TextBox.methods.handleSubmit;
      }

      this.currentStep++;
    },
  },
  components: {
    Navbar,
    Template,
    CheckBoxes,
    TextBox,
    RadioButtons,
    ContactQuestion,
  },
};
</script>

<template>
  <Navbar />
  <body class="bg-[#013565] pt-[5rem] pb-[5rem]">
    <div class="template-background">
      <Template v-if="currentStep == 1" />
      <TextBox v-else-if="currentStep == 2" />
      <RadioButtons v-else-if="currentStep == 3" />
      <CheckBoxes v-else-if="currentStep == 4" />
      <ContactQuestion v-else-if="currentStep == 5" />
      <div class="buttons">
        <button
          class="backButton"
          @click="currentStep--"
          v-if="currentStep > 2"
        >
          Back
        </button>
        <button class="backButton" v-if="currentStep == 2">Back</button>
        <button
          @click="currentStep++"
          v-if="currentStep == 1"
          class="startButton"
        >
          Start
        </button>
        <button
          @click="getData"
          v-else-if="currentStep != 5"
          class="nextButton"
        >
          Next
        </button>

        <button
          @click="alert('This is the last question')"
          v-if="currentStep == 5"
          class="nextButton"
        >
          Submit
        </button>
      </div>
    </div>
  </body>
</template>
