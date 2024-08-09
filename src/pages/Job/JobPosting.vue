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
          v-for="job in jobposting"
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
              <q-item-label @click="$router.push({ path: '/CompanyProfile' })"
                >{{ job.company_name }}
              </q-item-label>
              <q-item-label caption
                >{{ job.DateTo }}

                <q-badge outline label="" style="color: #06372c">{{
                  job.Type
                }}</q-badge></q-item-label
              >
              <!-- <q-item-label caption>
                Valid Until: {{ job.DatePosted }}
              </q-item-label> -->
            </q-item-section>

            <q-item-section class="justify-end"
              ><div class="text-right" style="margin-top: -10px">
                <q-badge
                  color="warning"
                  label="See More.."
                  @click="viewJobDetails(job)"
                >
                </q-badge>
                <!-- <p
                  class="text-blue"
                  @click="$router.push({ path: '/JobDetails' })"
                >
                  See More
                </p> -->
              </div></q-item-section
            >
          </q-item>

          <q-item-section>
            <q-item-label class="q-pa-sm q-ml-sm">
              {{ job.Description }}
            </q-item-label>
          </q-item-section>

          <img :src="job.pic" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  name: "JobPosting",
  data() {
    return {
      jobs: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests

      jobposting: [],
    };
  },
  methods: {
    viewJobDetails(job) {

      console.log("Job Post Clicked:", job);
      this.$router.push({
        name: "JobDetails",
        params: { id: job.ID},
      });
    },
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
        console.log("Response Data:", response.data);

        const newJobs = response.data.jobs;

        this.jobs = this.jobs.concat(newJobs);
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
    let data = new FormData();

    store.Retrieve_JobPosting(data).then((res) => {
      this.jobposting = store.RetreivedJobPosting.data;
      console.log("Job Posting", this.jobposting);
    });
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
  width: 80%;
  height: auto;
  margin-bottom: 15px;
}
</style>
