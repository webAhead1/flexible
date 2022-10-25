<template>
  <div class="flex justify-center bg-[#D7CEC7]">
    <div class="template-container">
      <div
        @mouseenter="t.hidden = false"
        @mouseleave="t.hidden = true"
        class="templates"
        v-for="t in templates"
      >
        <b
          >Template<br />
          example {{ t.id }}</b
        >
        <div
          :class="{ hidden: t.hidden }"
          class="absolute justify-center pt-[180px]"
        >
          <div class="selectBtn">
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import './style.css';
import { reactive } from 'vue';
const templates = reactive([
  { id: 1, hidden: true },
  { id: 2, hidden: true },
  { id: 3, hidden: true },
  { id: 4, hidden: true },
]);
</script>
