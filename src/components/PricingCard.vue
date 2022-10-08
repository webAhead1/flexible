<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="bg-[#FFFFFF99] w-[332px] h-[587px] rounded-[20px]">
        <div class="cardName">{{ name }}</div>
        <div class="cardPrice">{{ price }}</div>
        <div class="cardSentence">{{ sentence }}</div>
        <div class="pt-10">
          <div class="cardOffers" v-for="offer in offers">
            <!-- <hr class="w-[284px] h-[2px] bg-black border-0" /> -->
            {{ offer }}
          </div>
        </div>

        <div class="absolute bottom-5 left-[47px]">
          <div class="bg-[#2B4F6087] rounded-[18px] w-[238px] h-[71px]">
            <div class="cardButton">{{ buttonText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'price', 'sentence', 'offers', 'buttonText'],
};
</script>
