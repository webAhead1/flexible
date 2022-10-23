<template>
  <main>
    <div class="profile-container">Profile Settings</div>
    <div class="flex justify-around pt-[3rem] space-x-4">
      <UserDetails />
      <ProfileSetting />
    </div>
  </main>
</template>
<script>
import UserDetails from "@/components/ProfileComponent/UserDetails.vue";
import ProfileSetting from "@/components/ProfileComponent/ProfileSetting.vue";
export default {
  data() {
    return {
      user: localStorage.getItem("user"),
    };
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
