<script>
import EditPhoto from "./EditPhoto.vue";
import EditProfile from "./EditProfile.vue";
export default {
  data() {
    return {
      editPhotoButton: false,
      editProfileButton: false,
    };
  },
  methods: {
    openEditPhoto() {
      this.editPhotoButton = !this.editPhotoButton;
    },
    openEditProfile() {
      this.editProfileButton = !this.editProfileButton;
    },
  },
  components: {
    EditPhoto,
    EditProfile,
  },
};
</script>
<template>
  <div class="userDetails-container">
    <h1 class="user-name">Mario saliba</h1>
    <div class="flex">
      <div class="relative">
        <img class="user-photo" src="@/assets/img/mario.png" />
        <div class="edit-photo">
          <button @click="openEditPhoto">
            <img src="@/assets/img/pencile.png" />
          </button>
        </div>
      </div>
    </div>
    <button @click="openEditProfile" class="edit-button">Edit profile</button>
  </div>
  <EditPhoto v-if="editPhotoButton === true" @closephoto="openEditPhoto" />
  <EditProfile
    v-if="editProfileButton === true"
    @closeprofile="openEditProfile"
  />
</template>
