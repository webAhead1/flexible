<script setup>
import { RouterLink, RouterView } from "vue-router";
import CheckBoxes from "./components/CheckBoxes.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <CadioButtons />
    <RouterView />
  </body>
</template>
