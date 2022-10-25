<template>
  <div class="bg-[#D7CEC7]">
    <div class="profile-container">Profile Settings</div>
    <div class="flex justify-around mt-[2rem] space-x-4">
      <UserDetails />
      <ProfileSetting />
    </div>
  </div>
</template>
<script>
import UserDetails from "@/components/ProfileComponent/UserDetails.vue";
import ProfileSetting from "@/components/ProfileComponent/ProfileSetting.vue";
export default {
  data() {
    return {};
  },
  methods: {
    //     getUser(){
    // user = localStorage.getItem("user");
    //     }
    handleSignOut(event) {
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  },
  components: {
    UserDetails,
    ProfileSetting,
  },
};
</script>
