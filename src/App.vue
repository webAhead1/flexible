<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/questionnaire">Questionnaire </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>
