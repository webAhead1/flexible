<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    closeEditProfileBox() {
      this.$emit("closeprofile");
    },
  },
};
</script>
<template>
  <div class="edit-profile-container">
    <div class="edit-profile-box">
      <div class="flex flex-row space-x-[25rem]">
        <div class="absolute w-[1.5rem] mt-[1rem] ml-[1rem] h-[1.5rem]">
          <button @click="closeEditProfileBox">
            <img src="@/assets/img/x-icon.png" />
          </button>
        </div>

        <div class="text-[30px] font-poppins absolute">
          <button @click="closeEditProfileBox">save</button>
        </div>
      </div>
      <div class="edit-profile-input">
        <div class="txt">First Name</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.name"
            required
            class="profile-input-text"
          />
        </div>
        <div class="txt">Last Name</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.name"
            required
            class="profile-input-text"
          />
        </div>
        <div class="txt">Email</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.email"
            required
            class="profile-input-text"
          />
        </div>
      </div>
    </div>
  </div>
</template>
