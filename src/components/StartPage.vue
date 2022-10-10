<script setup>
import { reactive } from "vue";

const states = reactive({
  data() {
    return {
      StartPageComponent: 1,
    };
  },
});
</script>

<template>
  <div class="flex rounded-[59px] h-[851px] w-[874px] bg-[#3E6273]">
    <div
      class="rounded-[10px] ml-[76px] mt-[42px] h-[766.46px] w-[721.38px] bg-[#C8DAE2]/[.67]"
    >
      <div
        class="flex rounded-[37px] ml-[59px] mt-[87px] h-[121px] w-[604px] bg-[#849AA5]"
      >
        <h2
          class="mt-[14px] text-center not-italic text-black font-poppins text-[33px] font-bold leading-[50px]"
        >
          You’re a few questions away from building the perfect website!
        </h2>
      </div>
    </div>
  </div>
</template>
