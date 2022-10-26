<script>
export default {
  data() {
    return {
      offers: [
        "Custom domain",
        "Guest editors - 3",
        "Storage space - 2 GB",
        "Customer care - 24/7",
      ],
    };
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div class="w-[450px] h-[587px] rounded-[20px]">
      <div
        class="flex justify-center pt-5 underline underline-offset-auto font-normal font-poppins leading-[51px] text-[32px]"
      >
        Subscription
      </div>
      <div class="cardName">Basic</div>
      <div class="flex justify-center">
        <span class="cardPrice">
          <b class="priceDetails">shekels</b>
          <b class="items-end">57</b>
          <b class="priceDetails">/month</b>
        </span>
      </div>
      <div class="cardSentence">You're getting:</div>
      <div class="offers">
        <div class="cardOffers" v-for="offer in offers">
          <hr class="line" />
          {{ offer }}
        </div>
        <hr class="line" />
      </div>

      <!-- Here we should remember which of the offers the user choose,
               becouse after signing in/up we should give him this offer -->
      <router-link to="/#pricing">
        <!-- Here we should know if the user is already sign-in or not -->
        <div class="btnPosition-sub">
          <div class="pricingBtn-sub">
            <div class="cardButton-sub">Change</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
