<template>
  <!-- <div v-for="(question, i) in questions" :key="i" class="mt-14"> -->
  <div>
    <Blog :question="questions[questionNumber]" />
  </div>
</template>
<script>
import Blog from "./Blog.vue";
export default {
  props: ["questionNumber"],
  data() {
    return {
      questions: [
        { type: "text", text: "Name on blog:", answers: [] },
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
            { value: "blog", answerid: 3, text: "Blog" },
            { value: "chat", answerid: 4, text: "Chat" },
          ],
        },
        {
          type: "checkbox",
          text: "How would you like your readers to contact you? ",
          answers: [
            { value: "email", answerid: 1, text: "Email" },
            {
              value: "phone",
              answerid: 2,
              text: "Phone",
            },
            { value: "text", answerid: 3, text: "Text" },
          ],
        },

        {
          type: "radio",
          text: "Would you like to add pagination or infinite scrolling for your posts? ",
          answers: [
            {
              value: "yes",
              answerid: 1,
              text: "Yes",
            },
            {
              value: "no",
              answerid: 2,
              text: "No",
            },
          ],
        },
      ],
    };
  },
  components: { Blog },
};
</script>
