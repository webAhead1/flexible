<template>
  <div class="flex justify-center font-poppins">
    <div class="bg-[#013565] w-full h-[885px]">
      <div class="pricingTxt">Pricing</div>
      <div class="flex justify-center space-x-11">
        <div class="mt-14">
          <PricingCard
            :name="name[0]"
            :price="price[0]"
            :sentence="sentence[0]"
            :offers="offers[0]"
          />
        </div>
        <div class="mt-14">
          <PricingCard
            :name="name[1]"
            :shekels="shekels"
            :price="price[1]"
            :monthly="monthly"
            :sentence="sentence[1]"
            :offers="offers[1]"
          />
        </div>
        <div class="mt-14">
          <PricingCard
            :name="name[2]"
            :shekels="shekels"
            :price="price[2]"
            :monthly="monthly"
            :sentence="sentence[2]"
            :offers="offers[2]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PricingCard from './PricingCard.vue';
export default {
  data() {
    return {
      name: ['Starter', 'Basic', 'Premium'],
      price: ['Free', '57', '69'],
      sentence: [
        'For those getting started',
        'For personal use',
        'For growing your brand',
      ],
      offers: [
        ['Flexible domain', 'Guest editors - 1'],
        [
          'Custom domain',
          'Guest editors - 3',
          'Storage space - 2 GB',
          'Customer care - 24/7',
        ],
        [
          'Custom domain',
          'Guest editors - 6',
          'Storage space - 10 GB',
          'Publish permissions',
          'Customer care - 24/7',
        ],
      ],
      shekels: '₪',
      monthly: 'monthly',
    };
  },
  components: {
    PricingCard,
  },
};
</script>
