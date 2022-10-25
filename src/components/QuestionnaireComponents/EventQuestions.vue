<template>
  <!-- <div v-for="(question, i) in questions" :key="i" class="mt-14"> -->
  <div>
    <Event :question="questions[questionNumber]" />
  </div>
</template>
<script>
import Event from "./Event.vue";
export default {
  props: ["questionNumber"],
  data() {
    return {
      questions: [
        { type: "text", text: "Event name:", answers: [] },
        {
          type: "radio",
          text: "How can people attend your event?",
          answers: [
            {
              value: "buy-tickets",
              answerid: 1,
              text: "Buy tickets",
            },
            {
              value: "signup-sheets",
              answerid: 2,
              text: "Signup sheets",
            },
            { value: "just-show-up", answerid: 3, text: "Just show up" },
            {
              value: "contact-us",
              answerid: 4,
              text: "Contact us",
            },
          ],
        },
        {
          type: "text",
          text: "What is the event address?",
          answers: [],
        },
        { type: "text", text: "When is your event?", answers: [] },
        {
          type: "checkbox",
          text: "What features would you like to add? ",
          answers: [
            { value: "gallery", answerid: 1, text: "Gallery" },
            {
              value: "social media links",
              answerid: 2,
              text: "Social media links",
            },
            { value: "music", answerid: 3, text: "Music" },
            { value: "videos", answerid: 4, text: "Videos" },
            {
              value: "text boxes (blog style)",
              answerid: 5,
              text: "Text boxes (blog style)",
            },
            { value: "countdown", answerid: 6, text: "Countdown" },
          ],
        },
      ],
    };
  },
  components: { Event },
};
</script>
