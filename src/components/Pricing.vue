<template>
  <div class="flex justify-center py-8">
    <div class="bg-[#2B4F6087] w-[1177px] h-[768px] rounded-[20px]">
      <div class="text-white text-[37px] pl-[130px] pt-7">Pricing</div>
      <div class="flex justify-center">
        <div class="mt-20">
          <PricingCard
            :name="name[0]"
            :price="price[0]"
            :sentence="sentence[0]"
            :offers="offers[0]"
            :buttonText="buttonText[0]"
          />
        </div>
        <div class="mt-20">
          <PricingCard
            :name="name[1]"
            :shekels="shekels"
            :price="price[1]"
            :monthly="monthly"
            :sentence="sentence[1]"
            :offers="offers[1]"
            :buttonText="buttonText[1]"
          />
        </div>
        <span class="mt-20">
          <PricingCard
            :name="name[2]"
            :shekels="shekels"
            :price="price[2]"
            :monthly="monthly"
            :sentence="sentence[2]"
            :offers="offers[2]"
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
      shekels: '₪',
      monthly: 'monthly',
    };
  },
  components: {
    PricingCard,
  },
};
</script>
