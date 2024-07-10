<template>
  <div class="q-pa-md">
    <p class="title">MY TRAINING AND SEMINAR APPLICATIONS</p>
    <q-separator class="q-ma-md" inset />
    <div class="q-pa-lg" style="justify-content: center; flex-wrap: wrap">
      <q-list
        class="rounded-borders"
        style="max-width: 100%"
        v-for="job in scholarship"
        :key="job.id"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="job.avatar" alt="Profile Picture" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ job.scholarSponsor }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ job.ScholarTitle }}</span>
            </q-item-label>
            <q-item-label caption lines="3">
              <span class="">{{ job.scholarDesc }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>{{job.DatePosted}} </q-item-section>
        </q-item>

        <q-separator  />
      </q-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
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
          `https://run.mocky.io/v3/7d64c7cf-f4c2-4410-9570-24cc47e458a2`,
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
.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 15px 10px 5px 10px;
}
</style>
