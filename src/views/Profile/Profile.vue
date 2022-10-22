<template>
  <main>
    <div class="Profile-container">Profile Settings</div>
    <div class="flex justify-around pt-[5rem] space-x-4">
      <UserDetails />
      <h1>image</h1>
    </div>
  </main>
</template>
<script>
import UserDetails from "@/components/ProfileComponent/UserDetails.vue";
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
  },
};
</script>
