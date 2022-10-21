<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
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
                  <button>Submit</button>
                </div>
              </div>
              <div class="fb-btn">
                <button
                  @click="facebookLogIn"
                  class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                >
                  <svg
                    class="w-5 h-5 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  <span>Login with Facebook</span>
                </button>
                <div id="status"></div>
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
import SignInUpNavbar from "@/components/SignInUpNavbar.vue";
export default {
  components: {
    SignInUpNavbar,
  },
  methods: {
    facebookLogIn() {
      FB.login((res) => {
        FB.api("/me?fields=name,email", function (response) {
          console.log(JSON.stringify(response));
        });
      });
    },
  },

  mounted() {
    FB.init({
      appId: "631600558695178",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  },
};
</script>
