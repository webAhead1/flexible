<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <body>
    <header>
      <Navbar />
    </header>
    <RouterView />
  </body>
</template>

<style>
  html,body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    justify-content: center;
  }

header {
  width: 100%;
}
</style>