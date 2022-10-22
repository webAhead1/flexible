<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="flex justify-center py-4">
      <div class="signBg1 h-[900px]">
        <div class="signBg">
          <div class="signText">Sign Up</div>
          <div class="flex justify-center">
            <div class="txt-and-button pt-6">
              <div class="txt">First Name</div>
              <input type="text" id="fName" name="fName" required />
              <div class="txt">Last Name</div>
              <input type="text" id="lName" name="lName" required />
              <div class="txt">Email</div>
              <input type="email" id="email" name="email" required />
              <div class="txt">Password</div>
              <input type="password" id="password" name="password" required />
              <div class="txt">Confirm Password</div>
              <input type="password" id="cPassword" name="cPassword" required />
              <div class="btnBg pt-6">
                <div class="btn">
                  <button>Submit</button>
                </div>
              </div>
              <div class="accountQuestion pt-4">
                Already have an account? Click
                <RouterLink class="hereStyle" to="/sign-in">here</RouterLink>
                to sign in
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
      localStorage.setItem("user", jsonPayload);
      window.location.href = "/profile";
    };
    google.accounts.id.initialize({
      client_id:
        "905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google"),
      { theme: "outline", size: "large", text: "signin", width: "220px" } // customization attributes
    );
    if (localStorage.getItem("user")) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
