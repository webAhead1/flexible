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
import SignInUpNavbar from '@/components/SignInUpNavbar.vue';
export default {
  components: {
    SignInUpNavbar,
  },
};
</script>
