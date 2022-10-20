<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div>
      <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
      <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
      <h2 v-if="user">signed user: {{ user }}</h2>
      <div class="btnBg pt-14">
        <div class="btn">
          <button
            @click="handleClickSignIn"
            :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
          >
            sign in
          </button>
        </div>
      </div>
      <div class="btnBg pt-14">
        <div class="btn">
          <button
            @click="handleClickSignOut"
            :disabled="!Vue3GoogleOauth.isAuthorized"
          >
            sign out
          </button>
        </div>
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
import SignInUpNavbar from '@/components/SignInUpNavbar.vue';
import { inject } from 'vue';

export default {
  components: {
    SignInUpNavbar,
  },
  data() {
    return {
      user: '',
    };
  },
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log('googleUser', googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log('getId', this.user);
        console.log('getBasicProfile', googleUser.getBasicProfile());
        console.log('getAuthResponse', googleUser.getAuthResponse());
        console.log(
          'getAuthResponse',
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log('isAuthorized', this.Vue3GoogleOauth.isAuthorized);
        this.user = '';
      } catch (error) {
        console.error(error);
      }
    },
  },
  setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
    };
  },
};
</script>
