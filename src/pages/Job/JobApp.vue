<template>
  <div class="job-card ">
    <q-card class="">

    <p class="title text-white" >MY JOB APPLICATIONS</p>
    <q-separator class="q-ma-md" inset />
    <div class="" style="justify-content: center; flex-wrap: wrap">
      <q-list
        class="rounded-borders"
        style="max-width: 100%"
        v-for="job in jobapp"
        :key="job.id"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="job.avatar" alt="Profile Picture" />
            </q-avatar>
          </q-item-section>

          <q-item-section @click="$router.push({ path: '/JobDetails' })">
            <q-item-label lines="1">{{ job.employerName }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ job.JobTitle }}</span>
            </q-item-label>
            <q-item-label caption lines="3">
              <span class="">{{ job.JobDesc }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>{{job.DatePosted}} </q-item-section>
        </q-item>

        <q-separator inset="item" />
      </q-list>
    </div>
    </q-card>
  </div>
</template>
<script>
import axios from "axios";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      jobs: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests
      jobapp: [],
        userinfo: [],
    };
  },
  methods: {
    async loadMoreUsers() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://marj28.github.io/job-listing-api/jobs.json`,
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

     const store = useLoginCheck();
    this.userinfo = store.RetrievedData;

    console.log("length", this.userinfo.length);
    if (this.userinfo) {
      console.log("USer", this.userinfo.data[0].PMID);

      let data = new FormData();
      data.append("ApplicantID", this.userinfo.data[0].PMID);

      store.JobApplications(data).then((res) => {
        this.jobapp = store.MyJobApp;
        console.log("Job Applications", this.jobapp);
      });
    } else {
      ("none");
    }
  },
};
</script>
<style scoped>
.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 10px 10px 10px;
  background-color: #06372C ;
}
.job-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;

}
</style>
