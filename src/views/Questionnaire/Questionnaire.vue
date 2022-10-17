<script>
import Navbar from "@/components/Navbar.vue";
import StartQuestionnaire from "@/components/QuestionnaireComponents/StartQuestionnaire.vue";
import TextBox from "@/components/QuestionnaireComponents/TextBox.vue";
import CheckBoxes from "@/components/QuestionnaireComponents/CheckBoxes.vue";
import RadioButtons from "@/components/QuestionnaireComponents/RadioButtons.vue";
import ContactQuestion from "@/components/QuestionnaireComponents/ContactQuestion.vue";

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
    StartQuestionnaire,
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
      <StartQuestionnaire v-if="currentStep == 1" />
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
