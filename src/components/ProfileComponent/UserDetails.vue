<template>
  <div class="userDetails-container">
    <h1 class="user-name">Mario saliba</h1>
    <div class="flex space-x-2">
      <div class="relative">
        <img class="user-photo" src="@/assets/img/mario.png" />
        <div class="edit-photo">
          <button><img src="@/assets/img/pencile.png" /></button>
        </div>
      </div>
    </div>

    <button class="edit-button">Edit profile</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      editPhotoButton:false;
    };
  }
  methods:{

  },
  components: {

  },
};
</script>
