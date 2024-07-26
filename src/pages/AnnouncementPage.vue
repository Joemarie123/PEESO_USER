<template>
  <q-page class="q-pa-md">
    <div
      class="row"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
      <div
        class="col-12 q-gutter-md"
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <div class="text-h6 q-pa-md" style="margin-left: -30%">
          Announcement
        </div>
        <q-card
          v-for="user in announcement"
          :key="user.id"
          class="custom-card q-mb-md"
          style="width: 100%; height: auto; margin-bottom: auto"
        >
          <q-item>
            <q-item-section>
              <q-item-label>{{ user.Title }}</q-item-label>
              <q-item-label caption>{{ user.DatePosted }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item-section>
            <q-item-label class="q-pa-sm q-ml-sm">
              {{ getLimitedWords(user.Desc) }}
            </q-item-label>
          </q-item-section>
          <q-separator></q-separator>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      announcement: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests
    };
  },
  methods: {
    async loadMoreUsers() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://marj28.github.io/job-listing-api/announcement.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newAnnouncement = response.data.announcement;

        this.announcement = this.announcement.concat(newAnnouncement); // Append new jobs to the existing list
        this.page++;
        this.hasMore = newAnnouncement.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
    getLimitedWords(text) {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length <= 10) return text;
      return words.slice(0, 10).join(" ") + "...";
    },
  },
  created() {
    this.loadMoreUsers();
  },
};
</script>

<style scoped>
.q-page {
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.q-card {
  margin: 10px 0;
}

.custom-card {
  border: none;
  box-shadow: none;
}
</style>
