<script setup>
import Template from "../components/Template.vue";
import TextBox from "../components/TextBox.vue";
import CheckBoxes from "../components/CheckBoxes.vue";
// import ThirdQuestionPage from "../components/ThirdQuestionPage.vue";
// import FourthQuestionPage from "../components/FourthQuestionPage.vue";
// import LastQuestionPage from "../components/LastQuestionPage.vue";
import { reactive } from "vue";
const states = reactive({
  currentStep: 1,
});
</script>
<template>
  <div class="background">
    <Template v-if="states.currentStep == 1" />
    <TextBox v-else-if="states.currentStep == 2" />
    <CheckBoxes v-else-if="states.currentStep == 3" />
    <!-- <ThirdQuestionPage v-else-if="states.currentStep == 4" />
    <FourthQuestionPage v-else-if="states.currentStep == 5" />
    <LastQuestionPage v-else-if="states.currentStep == 6" /> -->
    <div class="flex justify-center">
      <button
        @click="states.currentStep--"
        v-if="states.currentStep > 2"
        class="shadow-[inset-0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[-171px] mr-[150px] rounded-[18px] w-[197px] h-[79px] bg-[#4F7A8E] text-center not-italic text-black font-poppins text-[33px] font-normal leading-[50px]"
      >
        Back
      </button>
      <button
        v-if="states.currentStep == 2"
        class="shadow-[inset-0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[-171px] mr-[150px] rounded-[18px] w-[197px] h-[79px] bg-[#565454] text-center not-italic text-black font-poppins text-[33px] font-normal leading-[50px]"
      >
        Back
      </button>
      <button
        @click="states.currentStep++"
        v-if="states.currentStep == 1"
        class="startButton"
      >
        Start
      </button>
      <button
        @click="states.currentStep++"
        v-else-if="states.currentStep != 6"
        class="shadow-[inset-0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[-171px] rounded-[18px] ml-[150px] w-[197px] h-[79px] bg-[#4F7A8E] text-center not-italic text-black font-poppins text-[33px] font-normal leading-[50px]"
      >
        Next
      </button>

      <button
        @click="alert('This is the last question')"
        v-if="states.currentStep == 6"
        class="shadow-[inset-0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[-171px] rounded-[18px] ml-[150px] w-[197px] h-[79px] bg-[#4F7A8E] text-center not-italic text-black font-poppins text-[33px] font-normal leading-[50px]"
      >
        Submit
      </button>
    </div>
  </div>
</template>
