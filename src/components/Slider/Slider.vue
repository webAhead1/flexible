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
        <label id="radiohighlight1" @click="activate1" class="manual-btn"></label>
        <label id="radiohighlight2" @click="activate2" class="manual-btn"></label>
        <label id="radiohighlight3" @click="activate3" class="manual-btn"></label>
      </div>
      <!--manual navigation end-->

      <!--slide images end-->
    </div>
    <!--image slider end-->
  </div>
</template>

<script>
export default {
  methods: {
activate1() {
  document.getElementById('radiohighlight1').classList.add("active")
  document.getElementById('radio1').classList.add("active")
  document.getElementById('radio1').checked = true
  document.getElementById('radiohighlight2').classList.remove("active")
  document.getElementById('radiohighlight3').classList.remove("active")
  document.getElementById('radio2').classList.remove("active")
  document.getElementById('radio3').classList.remove("active")
},
activate2() {
  document.getElementById('radiohighlight2').classList.add("active")
  document.getElementById('radio2').classList.add("active")
  document.getElementById('radio2').checked = true
  document.getElementById('radiohighlight1').classList.remove("active")
  document.getElementById('radiohighlight3').classList.remove("active")
  document.getElementById('radio1').classList.remove("active")
  document.getElementById('radio3').classList.remove("active")
},
activate3() {
  document.getElementById('radiohighlight3').classList.add("active")
  document.getElementById('radio3').classList.add("active")
  document.getElementById('radio3').checked = true
  document.getElementById('radiohighlight1').classList.remove("active")
  document.getElementById('radiohighlight2').classList.remove("active")
  document.getElementById('radio1').classList.remove("active")
  document.getElementById('radio2').classList.remove("active")
},
  }
}

window.onload = function() {
  var counter = 1;
  document.getElementById('radiohighlight1').classList.add("active")
  setInterval(function () {
    const currentButton = document.getElementById('radio' + counter);
    currentButton.checked = true;
    const currentHighlight = document.getElementById('radiohighlight'+ counter)
    currentHighlight.classList.add("active")
    if (currentHighlight.id == "radiohighlight1") {
      document.getElementById('radiohighlight2').classList.remove("active")
      document.getElementById('radiohighlight3').classList.remove("active")
    }
    if (currentHighlight.id == "radiohighlight2") {
      document.getElementById('radiohighlight1').classList.remove("active")
      document.getElementById('radiohighlight3').classList.remove("active")
    }
    if (currentHighlight.id == "radiohighlight3") {
      document.getElementById('radiohighlight1').classList.remove("active")
      document.getElementById('radiohighlight2').classList.remove("active")
    }
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);
}
</script>
