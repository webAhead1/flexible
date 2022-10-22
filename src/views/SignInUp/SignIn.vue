<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="sign-container">
      <div class="signBg1 h-[620px]">
        <div class="signBg">
          <div class="signText">Sign In</div>
          <div class="sign-body">
            <div class="txt-and-button py-10">
              <div class="txt">Email</div>
              <input
                class="emailInput"
                type="email"
                id="email"
                name="email"
                required
              />
              <div class="txt">Password</div>
              <input
                class="emailInput"
                type="password"
                id="password"
                name="password"
                required
              />
              <div class="btnBg py-10">
                <div class="btn">
                  <button>Sign In</button>
                </div>
              </div>
              <div class="google-button" id="google"></div>
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
  components: {
    SignInUpNavbar,
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
      localStorage.setItem('user', jsonPayload);
      window.location.href = '/profile';
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
    if (localStorage.getItem('user')) {
      this.$router.push({ name: 'home' });
    }
  },
};
</script>
