<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="flex justify-center py-4">
      <div class="signBg1 h-[620px]">
        <div class="signBg">
          <div class="signText">Sign In</div>
          <div class="flex justify-center">
            <div class="txt-and-button py-10">
              <div class="txt">Email</div>
              <input type="email" id="email" name="email" required />
              <div class="txt">Password</div>
              <input type="password" id="password" name="password" required />
              <div class="btnBg py-10">
                <div class="btn">
                  <button>Sign In</button>
                </div>
              </div>
              <div class="google-button" id="google"></div>
              <button
                :disabled="!user"
                :hidden="!user"
                @click="handleSignOut(e)"
              >
                Sign Out
              </button>
              <div class="accountQuestion py-4">
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
export default {
  data() {
    return {
      // to do global state or redux to manage this userObject
      user: '',
    };
  },
  components: {
    SignInUpNavbar,
  },
  methods: {
    handleSignOut(event) {
      this.user = '';
      console.log('logged out' + this.user);
    },
  },
  mounted() {
    const handleCredentialResponse = (response) => {
      var base64Url = response.credential.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      // console.log('Encoded JWT ID token:' + response.credential);
      localStorage.setItem;
      this.user = JSON.parse(jsonPayload);
      console.log(this.user);
    };
    google.accounts.id.initialize({
      client_id:
        '905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('google'),
      { theme: 'outline', size: 'large', text: 'signin', width: '220px' } // customization attributes
    );
  },
};
</script>
