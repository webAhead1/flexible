<template>
  <br />
  <h1 class="nameQ1">{{ question.text }}</h1>

  <div class="domain m-auto">
    <input required class="text m-auto" type="text" />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
export default {
  props: ["question"],
};
</script>
