<template>
  <h1 class="nameQ1">What kind of website would you like?</h1>
  <br />
  <div class="radios">
    <input
      type="radio"
      value="blog"
      id="blog"
      @input="onRadioChange('blog')"
      name="radio-answer"
    />
    <label class="radio" for="blog"> Blog</label>
    <br />

    <input type="radio" value="portfolio" id="portfolio" name="radio-answer" />
    <label class="radio" for="portfolio"> Portfolio</label>
    <br />

    <input
      type="radio"
      value="restaurant"
      id="restaurant"
      name="radio-answer"
    />
    <label class="radio" for="restaurant"> Restaurant</label>
    <br />

    <input
      type="radio"
      value="event"
      id="event"
      @input="onRadioChange('event')"
      name="radio-answer"
    />
    <label class="radio" for="event"> Event</label>
    <br />
    <input
      type="radio"
      value="e-commerce"
      id="e-commerce"
      name="radio-answer"
    />
    <label class="radio" for="e-commerce"> E-commerce</label>
  </div>
</template>

<script>
export default {
  props: ["updateCategory"],
  methods: {
    onRadioChange(value) {
      this.$emit("onMaysan", value);
    },
  },
};
</script>
