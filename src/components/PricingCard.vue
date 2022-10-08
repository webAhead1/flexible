<template>
  <div class="flex justify-center">
    <div class="bg-[#FFFFFF99] w-[332px] h-[587px] rounded-[20px]">
      <div class="cardName">{{ name }}</div>
      <div class="cardPrice">{{ price }}</div>
      <div class="cardSentence">{{ sentence }}</div>
      <div class="flex justify-center pt-[290px]">
        <div class="bg-[#2B4F6087] rounded-[70px] w-[238px] h-[71px]">
          <div class="cardBotton">{{ bottonText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'price', 'sentence', 'offers', 'bottonText'],
};
</script>
