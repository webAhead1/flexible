<template>
  <header>
    <SignInUpNavbar />
  </header>
  <body>
    <div class="flex justify-center py-8 drop-shadow-xl">
      <div
        class="bg-[#2B4F6087] w-[550px] h-[940px] rounded-[20px] drop-shadow-xl"
      >
        <div class="bg-[#2B4F6087] rounded-t-[20px] h-[70px]">
          <div
            class="flex justify-center text-white font-myFont pt-3 text-[34px]"
          >
            Sign In
          </div>
          <div class="flex justify-center">
            <div class="text-[30px] pt-6 font-myFont">
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
              <div class="flex justify-center pt-6">
                <div class="btn">
                  <button>Submit</button>
                </div>
              </div>
              <div class="pt-7 text-center text-[20px] text-white">
                Don’t have an account yet? Click
                <a class="text-[#013565F0]" href="#">here</a> to sign up
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
