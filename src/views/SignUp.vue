<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="flex justify-center py-8 drop-shadow-xl">
      <div
        class="bg-[#2B4F6087] w-[600px] h-[940px] rounded-[20px] drop-shadow-xl"
      >
        <div class="signBg">
          <div class="signText">Sign Up</div>
          <div class="flex justify-center">
            <div class="text-[30px] pt-6 font-myFont">
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
              <div class="btnBg pt-2">
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
import SignInUpNavbar from '../components/SignInUpNavbar.vue';
export default {
  components: {
    SignInUpNavbar,
  },
};
</script>
