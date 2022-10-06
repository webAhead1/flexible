<template>
    <div>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">Next &#10095;</a>
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
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>
  