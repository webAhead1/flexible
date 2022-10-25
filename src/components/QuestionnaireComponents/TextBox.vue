<template>
  <h1 class="nameQ1">What would you like to call your website?</h1>
  <br /><br /><br /><br /><br />
  <div class="domain ml-[-5rem]">
    <input required v-model="text" class="text" type="text" placeholder="e.g. munchies" />
    <h1 class="com">.flexible.com</h1>
    <br /><br />
    <br /><br />
    <br />
    <br />
    <br /><br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>
