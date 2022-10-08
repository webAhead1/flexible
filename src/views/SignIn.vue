<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="flex justify-center py-8 drop-shadow-xl">
      <div
        class="bg-[#2B4F6087] w-[600px] h-[690px] rounded-[20px] drop-shadow-xl"
      >
        <div class="signBg">
          <div class="signText">Sign In</div>
          <div class="flex justify-center">
            <div class="text-[30px] pt-16 font-myFont">
              <div class="txt">Email</div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
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
import SignInUpNavbar from '../components/SignInUpNavbar.vue';
export default {
  components: {
    SignInUpNavbar,
  },
};
</script>
