<script>
import Websites from "./Websites.vue";
import GuestEditors from "./GuestEditors.vue";
import Subscriptions from "./Subscriptions.vue";
import YourPayments from "./YourPayments.vue";
export default {
  data() {
    return {
      settingType: "",
    };
  },
  components: {
    Websites,
    GuestEditors,
    Subscriptions,
    YourPayments,
  },
};
</script>
<template>
  <div class="profile-settings">
    <div class="button-options-settings">
      <div><button @click="this.settingType = 0">Websites</button></div>
      <div><button @click="this.settingType = 1">Guest editors</button></div>
      <div><button @click="this.settingType = 2">Subscriptions</button></div>
      <div><button @click="this.settingType = 3">Your payments</button></div>
    </div>
    <div class="content-settings">
      <Websites v-if="this.settingType === 0" />
      <GuestEditors v-else-if="this.settingType === 1" />
      <Subscriptions v-else-if="this.settingType === 2" />
      <YourPayments v-else-if="this.settingType === 3" />
    </div>
  </div>
</template>
