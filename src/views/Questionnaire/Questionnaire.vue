<script>
import Navbar from "@/components/Navbar.vue";
import StartQuestionnaire from "@/components/QuestionnaireComponents/StartQuestionnaire.vue";
import TextBox from "@/components/QuestionnaireComponents/TextBox.vue";
import RadioButtons from "@/components/QuestionnaireComponents/RadioButtons.vue";
import EventQuestions from "@/components/QuestionnaireComponents/EventQuestions.vue";
import BlogQuestions from "../../components/QuestionnaireComponents/BlogQuestions.vue";

export default {
  data() {
    return {
      currentStep: 1,
      text: "",
      paths: {
        event: [0, 1, 2, 3, 4],
        blog: [0, 1, 2, 3],
      },
      category: "",
    };
  },
  updated() {
    console.log(this.category);
    console.log(this.currentStep);
  },

  methods: {
    getData() {
      console.log("I ran");
      if (this.currentStep == 2) {
        TextBox.methods.handleSubmit;
      }

      this.currentStep++;
    },
    updateCategory(newCategory) {
      this.category = newCategory;
    },
  },
  components: {
    Navbar,
    StartQuestionnaire,
    TextBox,
    RadioButtons,
    EventQuestions,
    BlogQuestions,
  },
};
</script>

<template>
  <body class="bg-[#013565] pt-[5rem] pb-[5rem]">
    <div class="template-background">
      <div class="w-[100%] h-[85%]">
        <StartQuestionnaire v-if="currentStep == 1" />
        <TextBox v-else-if="currentStep == 2" />
        <RadioButtons @onRadioChange="updateCategory" v-else-if="currentStep == 3" />
        <div v-for="(question, i) in paths[category]" :key="i">
          <EventQuestions v-if="currentStep == i + 4 && category === 'event'" :questionNumber="paths.event[i]" />
          <BlogQuestions :questionNumber="paths.blog[i]" v-else-if="currentStep == i + 4 && category === 'blog'" />
        </div>
      </div>
      <div class="buttons">
        <button class="backButton" @click="currentStep--" v-if="currentStep >= 2">Back</button>

        <button @click="currentStep++" v-if="currentStep == 1" class="startButton">Start</button>
        <button
          @click="getData"
          v-else-if="currentStep != paths[category]?.length + 3"
          class="nextButton"
          :disabled="currentStep === 3 && !category"
        >
          Next
        </button>

        <button
          @click="alert('This is the last question')"
          v-if="currentStep == paths[category]?.length + 3"
          class="nextButton"
        >
          Submit
        </button>
      </div>
    </div>
  </body>
</template>
