<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="m-auto min-h-[40px]" id="google">
      <!-- <div
        id="g_id_onload"
        data-client_id="905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
      ></div>
      <div class="g_id_signin" data-type="standard"></div> -->
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
import SignInUpNavbar from "@/components/SignInUpNavbar.vue";
export default {
  components: {
    SignInUpNavbar,
  },
  mounted() {
    console.log("first");
    window.handleCredentialResponse = (response) => {
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
      console.log(JSON.parse(jsonPayload));
      localStorage.setItem;
    };
    google.accounts.id.initialize({
      client_id:
        "905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com",
      callback: window.handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google"),
      { theme: "outline", size: "large" } // customization attributes
    );
  },
};
</script>
