<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="w-[250px] h-[250px] logo"
      src="@/assets/logo.svg"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Welcome Initial Project</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
