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
        <q-card
          v-for="job in jobs"
          :key="job.id"
          class="q-mb-md custom-card"
          style=""
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="job.avatar" alt="Profile Picture" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ job.employerName }} </q-item-label>
              <q-item-label caption
                >{{ job.DatePosted }}
                <q-badge outline color="primary" label="Part Time"
              /></q-item-label>
            </q-item-section>
            <q-item-section class="justify-end"
              ><div class="text-right">
                <p
                  class="text-blue"
                  @click="$router.push({ path: '/JobDetails' })"
                >
                  See More
                </p>
              </div></q-item-section
            >
          </q-item>

          <q-item-section>
            <q-item-label class="q-pa-sm q-ml-sm">
              {{ job.JobDesc }}
            </q-item-label>
          </q-item-section>

          <img :src="job.avatar" />
        </q-card>
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
      jobs: [], // This should be initialized here, not users
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
          `https://run.mocky.io/v3/5b3347f0-3e5f-4dac-8957-050623712d1a`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newJobs = response.data.jobs;

        this.jobs = this.jobs.concat(newJobs); // Append new jobs to the existing list
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
.custom-card {
  width: 60%;
  height: auto;
  margin-bottom: 15px;
}
</style>
