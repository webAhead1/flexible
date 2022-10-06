<script>
export default {
  data() {
    return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      links: [
        {
          id: 3,
          name: 'About Us',
        },
        {
          id: 4,
          name: 'Templates',
        },
        {
          id: 5,
          name: 'Questionnaire',
        },
        {
          id: 6,
          name: 'Pricing',
        },
        {
          id: 7,
          name: 'Contact Us',
        },
        {
          id: 8,
          name: 'Sign In',
        },
      ],
    };
  },
  created() {
    console.log('created');
    window.addEventListener('scroll', this.handleScroll);
    window.onscroll = function () {
      this.handleScroll;
    };
  },
  destroyed() {
    console.log('destroyed');
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let sticky = document.getElementById.offsetTop;
      if (window.pageYOffset >= sticky) {
        document.getElementById('menu').classList.add('sticky');
      } else {
        document.getElementById('menu').classList.remove('sticky');
      }
    },
  },
};
</script>

<template>
  <ul id="menu" class="menu">
    <a href="#">
      <div class="logoWithFlexible">
        <img src="../assets/img/pic1.png" class="logo" />
        <span>Flexible</span>
      </div>
    </a>
    <div class="menu-indicator"></div>
    <li class="menu-item" v-for="link in links" :key="link.id">
      <a href="#" class="menu-link">
        <span>{{ link.name }}</span>
      </a>
    </li>
  </ul>
</template>
