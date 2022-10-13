<script setup>
import { RouterLink, RouterView } from "vue-router";
import RadioButtons from "./components/RadioButtons.vue";
import Navbar from "./components/Navbar.vue";
</script>
<script></script>
<template>
  <RadioButtons />
  <header>
    <Navbar />
  </header>
  <body>
    <RouterView />
  </body>
</template>
