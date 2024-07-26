<template>
  <q-page class="">
    <div class="scrollable-container ">
    <p class="title q-mt-md" style="text-align: center;">SCHOLARSHIP AVAILABLE</p>
    <div class="row" style="display: flex; flex-wrap: wrap">
      <div
        class="col-12 q-gutter-md"
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <q-card
          v-for="job in scholarship"
          :key="job.id"
          class="q-mb-md custom-card"
          style="width: 60%; height: auto; margin-bottom: auto"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="job.Image" alt="Profile Picture" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ job.ScholarSponsor }}</q-item-label>
              <q-spacer></q-spacer>
                <q-spacer></q-spacer>
              <q-item-label caption>{{ job.DatePosted }}</q-item-label>
            </q-item-section>

            <q-item-section class="justify-end"
              ><div class="text-right">
                <p
                  class="text-blue"
                  @click="$router.push({ path: '/ScholarshipDetails' })"
                >
                  More...
                </p>
              </div></q-item-section
            >
          </q-item>

          <q-item-section>
            <q-item-label class="q-pa-sm q-ml-sm">
              {{ job.ScholarDesc }}
            </q-item-label>
          </q-item-section>

          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "UserProfileCardList",
  data() {
    return {
      scholarship: [], // This should be initialized here, not users
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
          `https://marj28.github.io/job-listing-api/scholarship.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newJobs = response.data.scholarship;

        this.scholarship = this.scholarship.concat(newJobs); // Append new jobs to the existing list
        this.page++;
        this.hasMore = newJobs.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.loadMoreUsers();
  },
};
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 15px 10px 5px 10px;
}
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
