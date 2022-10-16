<template>
  <header>
    <Navbar />
  </header>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-[40px] mt-[120px]">
      <div
        @mouseenter="t.hidden = false"
        @mouseleave="t.hidden = true"
        class="flex justify-center w-[587px] h-[400px] bg-[#D9D9D9] rounded-[20px] pt-[120px] drop-shadow-xl"
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
import "./style.css";
import { reactive } from "vue";
import Navbar from "../Navbar.vue";
const templates = reactive([
  { id: 1, hidden: true },
  { id: 2, hidden: true },
  { id: 3, hidden: true },
  { id: 4, hidden: true },
]);
</script>
