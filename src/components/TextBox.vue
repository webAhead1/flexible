<template>
  <div class="background">
    <h1 class="nameQ1">What would you like to call your website?</h1>
    <br /><br /><br /><br /><br />
    <div class="domain">
      <input class="text" type="text" placeholder="e.g. munchies" />
      <h1 class="com">.flexible.com</h1>
    </div>
    <div class="buttons">
      <button class="backButton">Back</button>
      <button class="nextButton">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  components: "TextBox",
};
</script>
