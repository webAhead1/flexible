<template>
  <h1>Hello Profile</h1>
  <button @click="handleSignOut(e)">Sign Out</button>
</template>
<script>
export default {
  methods: {
    handleSignOut(event) {
      localStorage.removeItem('user');
    },
  },
};
</script>
