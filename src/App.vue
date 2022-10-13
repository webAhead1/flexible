<script setup>
import { RouterLink, RouterView } from "vue-router";
import Template from "./components/Template.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <RouterView />
  </body>
</template>
