<template>
  <div class="flex justify-center font-poppins">
    <div class="bg-[#013565] w-full h-[885px]">
      <div class="pricingTxt">EventQuestions</div>
      <div class="flex justify-center space-x-11">
        <div v-for="question in Questions" class="mt-14">
          <Event :question />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Event from "./Event.vue";
export default {
  data() {
    return {
      Questions: [
        { type: "textbox", question_text: "Event name:", answers: [] },
        {
          type: "radio",
          question_text: "How can people attend your event?",
          answers: [
            {
              answerid: 1,
              text: "Buy tickets",
            },
            {
              answerid: 2,
              text: "Signup-sheets",
            },
            { answerid: 3, text: "Just show up" },
            {
              answerid: 4,
              text: "Contact us",
            },
          ],
        },
        {
          type: "textbox",
          question_text: "What is the event address?",
          answers: [],
        },
        { type: "textbox", question_text: "When is your event?", answers: [] },
        {
          type: "checkboxes",
          question_text: "What features would you like to add? ",
          answers: [
            { answerid: 1, text: "Gallery" },
            { answerid: 2, text: "Social media links" },
            { answerid: 3, text: "Music" },
            { answerid: 4, text: "Videos" },
            { answerid: 5, text: "Text boxes (blog style)" },
            { answerid: 6, text: "Countdown" },
          ],
        },
      ],
    };
  },
  components: { Event },
};
</script>
