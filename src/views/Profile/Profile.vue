<template>
  <h1>{{ user[1] }}</h1>
  <button @click="handleSignOut(e)">Sign Out</button>
</template>
<script>
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
    },
  },
};
</script>
