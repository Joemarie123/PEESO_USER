<template>
  <div>
    <div class="row">
      <div class="scrollable-container col-10">
        <story-list></story-list>
        <job-posting></job-posting>
      </div>
      <div class="scrollable-container  col-2">
        <q-card class="q-pa-sm text-h6 q-ma-md text-white" style="background-color: #06372C;">Announcement</q-card>
        <announcement-page></announcement-page>
      </div>
    </div>
  </div>
</template>

<script>
import StoryList from "../EmpPicture.vue"; // Adjust the import path as necessary
import JobPosting from "../Job/JobPosting.vue";
import AnnouncementPage from "../AnnouncementPage.vue";
export default {
  name: "MainLayout",
  components: {
    StoryList,
    JobPosting,
    AnnouncementPage,
  },
};
</script>
<style scoped>
.scrollable-container {
  max-height: 93vh;
  overflow-y: auto;
  /* Custom scrollbar */
  scrollbar-width: none; /* For Firefox */
}

/* Custom scrollbar for WebKit browsers */
.scrollable-container::-webkit-scrollbar {
  width: 5px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
