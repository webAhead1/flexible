<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="bg-[#FFFFFF99] w-[332px] h-[587px] rounded-[20px]">
        <div class="cardName">{{ name }}</div>

        <div class="flex justify-center">
          <span class="cardPrice">
            <b class="priceDetails">{{ shekels }}</b>
            <b class="items-end">{{ price }}</b>
            <b v-if="monthly" class="priceDetails">/{{ monthly }}</b>
          </span>
        </div>

        <div class="cardSentence">{{ sentence }}</div>

        <div class="pt-10">
          <div class="cardOffers" v-for="offer in offers">
            <!-- <hr class="w-[284px] h-[2px] bg-black border-0" /> -->
            {{ offer }}
          </div>
        </div>
        <!-- Here we should remember witch of the offers the user choose,
           becouse after signing in/up we should give him this offer -->
        <router-link to="/sign-in">
          <!-- Here we should know if the user is already sign-in or not -->
          <div class="btnPosition">
            <div class="bg-[#2B4F6087] rounded-[18px] w-[238px] h-[71px]">
              <div class="cardButton">{{ buttonText }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'shekels',
    'price',
    'monthly',
    'sentence',
    'offers',
    'buttonText',
  ],
};
</script>
