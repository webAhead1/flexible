<template>
  <header>
    <SignInUpNavbar />
  </header>
  <div class="parallax">
    <img class="parallax-img" src="../../assets/img/bg.png" />
    <div class="sign-container">
      <div class="signBg1 h-[38rem]">
        <div class="signBg">
          <div class="signText">Sign In</div>
          <div class="sign-body">
            <div class="txt-and-button py-5">
              <div class="flex flex-row justify-around">
                <div class="flex flex-col justify-start">
                  <div class="txt">Email</div>
                  <input
                    class="emailInput"
                    type="email"
                    id="email"
                    name="email"
                    v-model="emailInput"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-row justify-around">
                <div class="flex flex-col justify-start">
                  <div class="txt">Password</div>
                  <input
                    class="emailInput"
                    type="password"
                    id="password"
                    name="password"
                    v-model="passwordInput"
                    required
                  />
                </div>
              </div>
              <div class="btnBg">
                <div class="btn">
                  <button>Sign In</button>
                </div>
              </div>
              <div class="flex justify-around pt-5">
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
                </div>
                <div class="google-button" id="google"></div>
              </div>
              <div class="accountQuestion pt-4">
                Don???t have an account yet? Click
                <RouterLink class="hereStyle" to="/sign-up">here</RouterLink>
                to sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInUpNavbar from "@/components/SignInUpNavbar.vue";
export default {
  data() {
    return {
      emailInput: "",
      passwordInput: "",
    };
  },

  components: {
    SignInUpNavbar,
  },
  methods: {
    facebookLogIn() {
      FB.login((res) => {
        FB.api("/me?fields=name,email", function (response) {
          response.type = "facebook";
          localStorage.setItem("user", JSON.stringify(response));
          window.location.href = "/";
        });
      });
    },
    signIn() {
      const data = {
        email: this.emailInput,
        password: this.passwordInput,
      };
      this.axios
        .post("http://localhost:4000/api/sign-in", data)
        .then((response) => {
          window.localStorage.setItem(
            "access_token",
            response.data.access_token
          );
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    FB.init({
      appId: "631600558695178",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
    const handleCredentialResponse = (response) => {
      var base64Url = response.credential.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      // console.log('Encoded JWT ID token:' + response.credential);
      const json = JSON.parse(jsonPayload);
      json.type = "google";
      localStorage.setItem("user", JSON.stringify(json));
      window.location.href = "/";
    };
    google.accounts.id.initialize({
      client_id:
        "905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google"),
      {
        theme: "outline",
        size: "large",
        height: "100px",
        text: "signin",
        width: "240px",
      } // customization attributes
    );
    if (localStorage.getItem("user") || localStorage.getItem("access_token")) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
