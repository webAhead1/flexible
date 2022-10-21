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
                <!-- <fb:login-button
                  scope="public_profile,email"
                  size="large"
                  @onload="logInWithFacebook"
                  >Login wih Facebook
                </fb:login-button> -->
                <!-- <div id="fb-root"></div>
                <div
                  class="fb-login-button"
                  data-width=""
                  data-size="large"
                  data-button-type="continue_with"
                  data-layout="default"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div> -->
                <fb:login-button
                  scope="public_profile,email"
                  @Click="window.checkLoginState"
                  >jjj
                </fb:login-button>

                <div id="status"></div>
              </div>
              <div id="status"></div>
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
  mounted() {
    function statusChangeCallback(response) {
      // Called with the results from FB.getLoginStatus().
      console.log("statusChangeCallback");
      console.log(response); // The current login status of the person.
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
        testAPI();
      } else {
        // Not logged into your webpage or we are unable to tell.
        document.getElementById("status").innerHTML =
          "Please log " + "into this webpage.";
      }
    }

    window.checkLoginState = function () {
      // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function (response) {
        // See the onlogin handler
        statusChangeCallback(response);
      });
    };

    window.fbAsyncInit = function () {
      FB.init({
        appId: "1120793708641010",
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v15.0", // Use this Graph API version for this call.
      });

      FB.getLoginStatus(function (response) {
        // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
      });
    };

    function testAPI() {
      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
      console.log("Welcome!  Fetching your information.... ");
      FB.api("/me", function (response) {
        console.log("Successful login for: " + response.name);
        document.getElementById("status").innerHTML =
          "Thanks for logging in, " + response.name + "!";
      });
    }
  },
  // async logInWithFacebook() {
  //   await this.loadFacebookSDK(document, "script", "facebook-jssdk");
  //   await this.initFacebook();
  //   window.FB.login(function (response) {
  //     if (response.authResponse) {
  //       alert("You are logged in &amp; cookie set!");
  //       // Now you can redirect the user or do an AJAX request to
  //       // a PHP script that grabs the signed request from the cookie.
  //     } else {
  //       alert("User cancelled login or did not fully authorize.");
  //     }
  //   });
  //   return false;
  // },
  // async initFacebook() {
  //   window.fbAsyncInit = function () {
  //     window.FB.init({
  //       appId: "1120793708641010", //You will need to change this
  //       cookie: true, // This is important, it's not enabled by default
  //       xfbml: true,
  //       version: "v15.0",
  //     });
  //   };
  // },
  // async loadFacebookSDK(d, s, id) {
  //   var js,
  //     fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) {
  //     return;
  //   }
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // },
};
</script>
