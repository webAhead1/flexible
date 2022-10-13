<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="bg-[#D7CEC7E8] w-[332px] h-[587px] rounded-[20px]">
        <div class="cardName">{{ name }}</div>
        <div class="flex justify-center">
          <span class="cardPrice">
            <b class="priceDetails">{{ shekels }}</b>
            <b class="items-end">{{ price }}</b>
            <b v-if="monthly" class="priceDetails">/{{ monthly }}</b>
          </span>
        </div>
        <div class="cardSentence">{{ sentence }}</div>
        <div class="offers">
          <div class="cardOffers" v-for="offer in offers">
            <hr class="line" />
            {{ offer }}
          </div>
          <hr class="line" />
        </div>

        <!-- Here we should remember witch of the offers the user choose,
           becouse after signing in/up we should give him this offer -->
        <router-link to="/">
          <!-- Here we should know if the user is already sign-in or not -->
          <div class="btnPosition">
            <div class="pricingBtn">
              <div class="cardButton">Select</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "shekels", "price", "monthly", "sentence", "offers"],
};
</script>
