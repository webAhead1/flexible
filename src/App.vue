<script setup>
import { RouterLink, RouterView } from "vue-router";
import ContactUs from "./views/ContactUs.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <CheckBoxes />
    <RouterView />
  </body>
</template>
