<template>
  <h1 class="nameQ1">{{ question.text }}</h1>
  <br /><br /><br /><br /><br /><br />
  <div class="domain">
    <input required class="text" type="text" />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
export default {
  props: ["question"],
};
</script>
