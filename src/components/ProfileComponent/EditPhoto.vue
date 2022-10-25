<script>
export default {
  methods: {
    closeEditPhotoBox() {
      this.$emit("closephoto");
    },
  },
};
</script>
<template>
  <div class="edit-photo-container">
    <div class="edit-photo-box">
      <div class="absolute w-[2rem] mt-[1rem] ml-[1rem] h-[2rem]">
        <button @click="closeEditPhotoBox">
          <img src="@/assets/img/x-icon.png" />
        </button>
      </div>
      <div class="current-user-photo" id="profile-pic">
        <img class="rounded-full" src="@/assets/img/mario.png" />
      </div>
      <div class="add-photo-options">
        <div>
          <button>
            <img class="w-[3rem] h-[3rem]" src="@/assets/img/pencile.png" />
          </button>
        </div>
        <div>
          <button>
            <img class="w-[3rem] h-[3rem]" src="@/assets/img/trash-icon.png" />
          </button>
        </div>
        <div>
          <button>
            <img class="w-[3rem] h-[3rem]" src="@/assets/img/camera_icon.png" />
          </button>
        </div>
      </div>
      <div class="add-photo-option-t">
        <div class="font-normal text-[30px]"><p>Edit</p></div>
        <div class="font-normal text-[30px] pl-[3rem]"><p>Delete</p></div>
        <div class="font-normal text-[30px]"><p>Add photo</p></div>
      </div>
    </div>
  </div>
</template>
