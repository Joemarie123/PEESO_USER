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
          class="q-mb-md custom-card q-pt-sm "
          style=""
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="job.company_logo" alt="Profile Picture" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                @click="$router.push({ path: '/CompanyProfile' })"
                class="text-bold"
                >{{ job.company_name }}
              </q-item-label>
              <q-item-label caption>
                <q-badge outline label="" style="color: #06372c">{{
                  job.Type
                }}</q-badge
                ><q-icon name="fiber_manual_record" />
                {{ job.DateTo }}
              </q-item-label>
              <!-- <q-item-label caption>
                Valid Until: {{ job.DatePosted }}
              </q-item-label> -->
            </q-item-section>

            <q-item-section class="justify-end"
              ><div class="text-right" style="margin-top: -10px">
                <q-badge
                  color="warning"
                  @click="viewJobDetails(job)"
                  clickable
                  class="cursor-pointer"
                >
                See More..
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
            <q-item-label class="q-pa-md q-ml-sm">
              <p class="text-bold">{{ job.Title }}</p>
              {{ job.Description }}
            </q-item-label>
          </q-item-section>

          <img :src="job.pic" class="job-image" />
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
      scrollPosition: 0,
      jobs: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests

      jobposting: [],
      userinfo: [],
    };
  },
  methods: {
    viewJobDetails(job) {
      console.log("Job Post Clicked:", job);
      this.$router.push({
        name: "JobDetails",
        params: { id: job.ID },
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
  beforeRouteLeave(to, from, next) {
    // Save the scroll position before leaving the page
    this.scrollPosition = window.scrollY;
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // Restore the scroll position when navigating back
      vm.$nextTick(() => {
        window.scrollTo(0, vm.scrollPosition);
      });
    });
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

      store.Retrieve_JobPosting(data).then((res) => {
        this.jobposting = store.RetreivedJobPosting.data;
        console.log("Job Posting", this.jobposting);
      });
    } else {
      ("none");
    }
  },
  computed: {
    // Create a computed property to reactively fetch the job postings from the store
    jobPostingsFromStore() {
      const store = useLoginCheck();
      return store.RetreivedJobPosting.data;
    },
  },
  watch: {
    // Watch for changes in the computed property and update the local jobposting data
    jobPostingsFromStore(newData) {
      this.jobposting = newData;
    },
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
.job-image {
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: #06372c;
}
</style>
