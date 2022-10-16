<template>
  <div class="slider-container">
    <div class="slider">
      <div id="item1" class="slider-image">
        <img
          src="https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template.png"
        />
      </div>
      <div id="item2" class="slider-image">
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/mahabis-creative-shoe-store.jpg"
        />
      </div>
      <div id="item3" class="slider-image">
        <img
          src="https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png"
        />
      </div>
    </div>
    <div class="slider-buttons">
      <a href="#item1">
        <img
          src="https://img.icons8.com/material-rounded/24/000000/circled.png"
        />
      </a>
      <a href="#item2">
        <img
          src="https://img.icons8.com/material-rounded/24/000000/circled.png"
        />
      </a>
      <a href="#item3">
        <img
          src="https://img.icons8.com/material-rounded/24/000000/circled.png"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.counter++;
      if (this.counter > 3) this.counter = 1;
    }, 5000);
  },
};
</script>
