<script>
export default {
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.onscroll = function () {
      this.handleScroll;
    };
  },
  destroyed() {
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
  <div class="relative">
    <ul id="menu" class="menu">
      <router-link :to="{ path: '/', hash: '#home' }">
        <div class="logoWithFlexible">
          <img src="../assets/img/pic1.png" class="logo" />
          <span>Flexible</span>
        </div>
      </router-link>

      <div class="menu-item">
        <router-link :to="{ path: '/', hash: '#about' }" class="menu-link">
          <span>About Us</span>
        </router-link>
        <router-link :to="{ path: '/', hash: '#template' }" class="menu-link">
          <span>Templates</span>
        </router-link>
        <router-link to="/questionnaire" class="menu-link">
          <span>Questionnaire</span>
        </router-link>
        <router-link :to="{ path: '/', hash: '#pricing' }" class="menu-link">
          <span>Pricing</span>
        </router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" class="menu-link">
          <span>Contact Us</span>
        </router-link>
        <router-link to="/sign-in" id="signin" class="menu-link">
          <span>Sign in</span>
        </router-link>
      </div>
    </ul>
  </div>
  <br />
  <br />
  <br />
  <br />
</template>
