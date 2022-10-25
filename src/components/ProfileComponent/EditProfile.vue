<script>
export default {
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
      <div class="absolute w-[2rem] mt-[1rem] ml-[1rem] h-[2rem]">
        <button @click="closeEditProfileBox">
          <img src="@/assets/img/x-icon.png" />
        </button>
      </div>
      <div class="edit-profile-input">
        <input
          required
          v-model="text"
          class="text"
          type="text"
          placeholder="mario"
        />
      </div>
    </div>
  </div>
</template>
