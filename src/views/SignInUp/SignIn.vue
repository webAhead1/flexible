<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <h1>Is Initialized: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>Is Authorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
    <h2 v-if="user">Logged in as:{{ user }}</h2>
    <div class="btnBg pt-14">
      <div class="btn">
        <button
          @click="handleSignIn"
          :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
        >
          Sign In
        </button>
      </div>
    </div>
    <div class="btnBg pt-14">
      <div class="btn">
        <button
          @click="handleSignOut"
          :disabled="!Vue3GoogleOauth.isAuthorized"
        >
          Log Out
        </button>
      </div>
    </div>

    <div class="flex justify-center py-[153px]">
      <div class="signBg1 h-[690px]">
        <div class="signBg">
          <div class="signText">Sign In</div>
          <div class="flex justify-center">
            <div class="txt-and-button pt-16">
              <div class="txt">Email</div>
              <input type="email" id="email" name="email" required />
              <div class="txt">Password</div>
              <input type="password" id="password" name="password" required />
              <div class="btnBg pt-14">
                <div class="btn">
                  <button>Sign In</button>
                </div>
              </div>
              <div class="accountQuestion pt-8">
                Don’t have an account yet? Click
                <RouterLink class="hereStyle" to="/sign-up">here</RouterLink>
                to sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { inject } from 'vue';
import SignInUpNavbar from '@/components/SignInUpNavbar.vue';
export default {
  components: {
    SignInUpNavbar,
  },
  setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    return {
      Vue3GoogleOauth,
    };
  },
  data() {
    return {
      user: '',
    };
  },
  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log(this.$gAuth.signIn);
        if (!googleUser) {
          return null;
        }
        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        // console.log(this.$gAuth.signOut);
        this.user = '';
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};
</script>
