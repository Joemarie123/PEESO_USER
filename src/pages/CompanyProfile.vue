<template>
  <q-page>
    <q-card class="profile-card" style="border-radius: 12px">
      <input
        type="file"
        @change="onBannerUpload"
        accept="image/*"
        ref="bannerInput"
        class="banner-upload-input"
      />
      <q-img
        style="border-radius: 12px"
        :src="bannerSrc"
        class="banner-image"
      />

      <div class="text-right" style="margin-right: 30px; margin-top: 12px">
        <q-btn icon="camera" @click="triggerBannerUpload"> EDIT BANNER</q-btn>
      </div>

      <div class="profile-picture-wrapper">
        <input
          type="file"
          @change="onProfilePictureUpload"
          accept="image/*"
          ref="profilePictureInput"
          class="profile-picture-upload-input"
        />
        <q-avatar
          size="100px"
          class="profile-picture"
          @click="triggerProfilePictureUpload"
        >
          <img :src="profilePictureSrc" alt="Profile Picture" />
        </q-avatar>
      </div>
      <div class="profile-info">
        <h2 class="profile-name">Joma Internet Cafe</h2>
        <p class="profile-description">Tagum City Davao Del Norte</p>
      </div>
    </q-card>

    <div class="row">
      <q-card> </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      bannerSrc: "/banner_1.jpg",
      profilePictureSrc: "https://cdn.quasar.dev/img/avatar1.jpg",
    };
  },
  methods: {
    triggerBannerUpload() {
      this.$refs.bannerInput.click();
    },
    triggerProfilePictureUpload() {
      this.$refs.profilePictureInput.click();
    },
    onBannerUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.bannerSrc = URL.createObjectURL(file);
      }
    },
    onProfilePictureUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePictureSrc = URL.createObjectURL(file);
      }
    },
  },
};
</script>

<style scoped>
.profile-card {
  position: relative;
  margin: 20px;
}

.banner-image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensure the image covers the container while maintaining aspect ratio */
  cursor: pointer;
}

.profile-picture-wrapper {
  position: absolute;
  top: 200px; /* Adjust based on banner height */
  left: 20px;
  transform: translateY(-50%);
  border-radius: 12px;
  border-radius: 50%;
}

.profile-picture {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.profile-info {
  margin-top: -40px;
  text-align: left;
  padding: 60px 20px 20px; /* Adjust padding based on profile picture position */
}

.profile-name {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.profile-description {
  margin: 0;
  color: #666;
}

.banner-upload-input,
.profile-picture-upload-input {
  display: none;
}
</style>
