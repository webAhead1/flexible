<script>
import EditPhoto from "./EditPhoto.vue";
export default {
  data() {
    return {
      editPhotoButton: false,
    };
  },
  methods: {
    openEditPhoto() {
      this.editPhotoButton = !this.editPhotoButton;
      console.log("aaa");
    },
  },
  components: {
    EditPhoto,
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
    <button class="edit-button">Edit profile</button>
  </div>
  <EditPhoto v-if="editPhotoButton === true" />
</template>
