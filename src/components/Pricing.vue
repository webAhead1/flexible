<template>
  <div class="flex justify-center py-8">
    <div class="bg-[#2B4F6087] w-[1177px] h-[768px] rounded-[20px]">
      <div class="flex justify-center">
        <div class="text-white align-center text-[37px] pt-5">Pricing</div>
        <span class="pt-28">
          <PricingCard
            :name="name[0]"
            :price="price[0]"
            :sentence="sentence[0]"
            :offers="offers[0]"
            :buttonText="buttonText[0]"
          />
        </span>
        <span class="pt-50">
          <PricingCard
            :name="name[1]"
            :price="price[1]"
            :sentence="sentence[1]"
            :offers="offers[1]"
            :buttonText="buttonText[1]"
          />
        </span>
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
      buttonText: ['Start for free', 'Add plan'],
    };
  },
  components: {
    PricingCard,
  },
};
</script>
