<script setup>
import TextBox from "./components/TextBox.vue";
//import Template from "./components/Template.vue";
import Navbar from "./components/Navbar.vue";
//import CheckBoxes from "./components/CheckBoxes.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<script>
export default {
  components: TextBox,
  //Template,
  //CheckBoxes,
  Navbar,
};
</script>
<template>
  <header>
    <Navbar />
  </header>
  <body>
    <TextBox />
    <CheckBoxes />
    <RouterView />
  </body>
</template>
