<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body class="from-[#ffffff] to-[#5590AC]">
    <RouterView />
  </body>
</template>
