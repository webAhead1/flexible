<template>
    <div class="slider-container">
      <transition-group name="fade" tag="div">
        <div :key="currentIndex">
          <img class="slider-image" :src="currentImg" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#"><svg class="prev-arrow" width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20.0115V25.6849H12.1212L29.4823 41.2867L25 45.3148L0 22.8482L25 0.381592L29.4823 4.4097L12.1212 20.0115H50Z" fill="#2C468E"/>
      </svg>
      </a>
      <a class="next" @click="next" href="#"><svg class="next-arrow" width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 25.6848V20.0114L37.8788 20.0114L20.5177 4.40957L25 0.381462L50 22.8481L25 45.3147L20.5177 41.2866L37.8788 25.6848L0 25.6848Z" fill="#2C468E"/>
      </svg>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: "Slider",
    data() {
      return {
        images: [
          "https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template.png",
          "https://colorlib.com/wp/wp-content/uploads/sites/2/mahabis-creative-shoe-store.jpg",
          "https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png"
        ],
        //timer: null,
        currentIndex: 0
      };
    },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 5000);
      },
  
      next: function() {
        this.currentIndex += 1;
      },
      prev: function() {
        this.currentIndex -= 1;
      }
    },
  
    computed: {
      currentImg: function() {
        console.log(this.images[Math.abs(this.currentIndex) % this.images.length])
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>
  