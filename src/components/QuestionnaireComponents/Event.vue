<template>
  <h1>Hello event</h1>
  <div class="checkboxes">
    <input type="checkbox" value="musicplayer" id="musicplayer" />
    <label class="checkbox" for="musicplayer"
      >{{ Questions[0].answers[0].text }}
    </label>
    <br />
  </div>
</template>
<script>
export default {
  props: [
    "Questions[0]",
    "Questions[1]",
    "Questions[2]",
    "Questions[3]",
    "Questions[4]",
  ],
};
</script>
