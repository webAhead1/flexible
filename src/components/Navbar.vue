<template>
  <ul id="menu" class="menu">
    <router-link :to="{ path: '/', hash: '#home' }">
      <div class="logoWithFlexible">
        <img src="../assets/img/pic1.png" class="logo" />
        <span>Flexible</span>
      </div>
    </router-link>

    <div class="menu-item" style="focus:border-bottom: 2px solid black">
      <router-link
        :to="{ path: '/', hash: '#about' }"
        class="menu-link"
        @click="focused = 'aboutUs'"
      >
        <div v-if="focused === 'aboutUs'" class="menu-txt underlined">
          About us
        </div>
        <div v-else class="menu-txt">About Us</div>
      </router-link>
      <router-link
        to="/templates"
        class="menu-link"
        @click="focused = 'templates'"
      >
        <div v-if="focused === 'templates'" class="menu-txt underlined">
          Templates
        </div>
        <div v-else class="menu-txt">Templates</div>
      </router-link>
      <router-link to="/questionnaire" class="menu-link">
        <span class="menu-txt">Questionnaire</span>
      </router-link>
      <router-link :to="{ path: '/', hash: '#pricing' }" class="menu-link">
        <span class="menu-txt">Pricing</span>
      </router-link>
      <router-link :to="{ path: '/', hash: '#contact' }" class="menu-link">
        <span class="menu-txt">Contact Us</span>
      </router-link>
      <router-link to="/sign-in" id="signin" class="menu-link">
        <span class="menu-txt">Sign in</span>
      </router-link>
    </div>
  </ul>
</template>
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
  data() {
    return {
      focused: '',
    };
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
