<template>
  <!--image slider start-->
  <div class="slider-container">
    <div class="slider">
      <div class="slides">
        <!--radio buttons start-->
        <input class="slider-input" type="radio" name="radio-btn" id="radio1" />
        <input class="slider-input" type="radio" name="radio-btn" id="radio2" />
        <input class="slider-input" type="radio" name="radio-btn" id="radio3" />
        <!--radio buttons end-->
        <!--slide images start-->
        <div class="slide first">
          <img
            src="https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template.png"
            alt=""
            class="slider-image"
          />
        </div>
        <div class="slide">
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/mahabis-creative-shoe-store.jpg"
            alt=""
            class="slider-image"
          />
        </div>
        <div class="slide">
          <img
            src="https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png"
            alt=""
            class="slider-image"
          />
        </div>
      </div>
      <!--manual navigation start-->
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
      </div>
      <!--manual navigation end-->

      <!--slide images end-->
    </div>
    <!--image slider end-->
  </div>
</template>

<script>
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);
</script>
