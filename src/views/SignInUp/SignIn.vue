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
};
</script>
