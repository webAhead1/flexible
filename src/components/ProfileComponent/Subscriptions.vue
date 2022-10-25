<script>
import PricingCard from "@/components/Pricing/PricingCard.vue";
export default {
  components: {
    PricingCard,
  },
};
</script>
<template>
  <div class="flex justify-center space-x-11">
    <div class="mt-14">
      <PricingCard
        :name="'Basic'"
        :shekels="'shekels'"
        :price="57"
        :monthly="'monthly'"
        :sentence="'For personal use'"
        :offers="[
          'Custom domain',
          'Guest editors - 3',
          'Storage space - 2 GB',
          'Customer care - 24/7',
        ]"
      />
    </div>
  </div>
</template>
