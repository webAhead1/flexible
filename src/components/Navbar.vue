<template>
  <ul id="menu" class="menu">
    <router-link :to="{ path: '/', hash: '#home' }">
      <div class="logoWithFlexible">
        <img src="../assets/img/pic1.png" class="logo" />
        <span>Flexible</span>
      </div>
    </router-link>

    <div class="menu-item" style="focus:border-bottom: 2px solid black;">
      <router-link
        :to="{ path: '/', hash: '#about' }"
        class="menu-link"
        @click="focused = 'aboutUs'"
      >
        <div v-if="focused === 'aboutUs'" class="underlined">About Us</div>
        <div v-else>About Us</div>
      </router-link>
      <router-link
        to="/templates"
        class="menu-link"
        @click="focused = 'templates'"
      >
        <div v-if="focused === 'templates'" class="underlined">Templates</div>
        <div v-else>Templates</div>
      </router-link>
      <router-link
        to="/questionnaire"
        class="menu-link"
        @click="focused = 'questionnaire'"
      >
        <div v-if="focused === 'questionnaire'" class="underlined">
          Questionnaire
        </div>
        <div v-else>Questionnaire</div>
      </router-link>
      <router-link
        :to="{ path: '/', hash: '#pricing' }"
        class="menu-link"
        @click="focused = 'pricing'"
      >
        <div v-if="focused === 'pricing'" class="underlined">Pricing</div>
        <div v-else>Pricing</div>
      </router-link>
      <router-link
        :to="{ path: '/', hash: '#contact' }"
        class="menu-link"
        @click="focused = 'contact'"
      >
        <div v-if="focused === 'contact'" class="underlined">Contact Us</div>
        <div v-else>Contact Us</div>
      </router-link>
      <router-link
        v-if="checkSignIn()"
        to="/profile"
        class="menu-link"
        @click="focused = 'profile'"
      >
        <div v-if="focused === 'profile'" class="underlined">
          {{ this.user.name }}
        </div>
        <div v-else>{{ this.user.name }}</div>
      </router-link>
      <router-link
        v-if="!checkSignIn()"
        to="/sign-in"
        id="signin"
        class="menu-link"
      >
        <span>Sign in</span>
      </router-link>
      <router-link
        v-if="checkSignIn()"
        to="/"
        @click="handleSignOut(e)"
        class="menu-link"
      >
        <span>Sign Out</span>
      </router-link>
    </div>
  </ul>
</template>
<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.onscroll = function () {
      this.handleScroll;
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      focused: "aboutus",
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    handleSignOut(event) {
      localStorage.removeItem("user");
      window.location.href = "/";
    },
    checkSignIn() {
      return !!localStorage.getItem("user");
    },
    handleScroll() {
      let sticky = document.getElementById.offsetTop;
      if (window.pageYOffset >= sticky) {
        document.getElementById("menu").classList.add("sticky");
      } else {
        document.getElementById("menu").classList.remove("sticky");
      }
    },
  },
};
</script>
