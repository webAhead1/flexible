<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
    <header>
      <Navbar />
    </header>
    <RouterView />
</template>

<style>
html {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
  }
  
  header {
  width: 100%;
}
</style>