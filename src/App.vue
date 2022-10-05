<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/sign-up">Sign up </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
