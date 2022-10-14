<script setup>
import { RouterLink, RouterView } from "vue-router";
import Template from "./components/Template.vue";
import Navbar from "./components/Navbar.vue";
import CheckBoxes from "./components/CheckBoxes.vue";
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
