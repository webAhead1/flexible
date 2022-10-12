<script>
export default {};
</script>

<template>
  <ul id="menu" class="navBar">
    <router-link :to="{ path: '/', hash: '#home' }">
      <div class="logoWithFlexible">
        <img src="../assets/pic1.png" class="logo" />
        <span>Flexible</span>
      </div>
    </router-link>
  </ul>
</template>
