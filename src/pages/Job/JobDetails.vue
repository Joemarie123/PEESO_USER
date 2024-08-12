<template>
  <div class="profile-card">
    <q-card>
      <q-card-section
        style="background-color: #06372c; display: flex; flex-direction: column"
        class="text-white"
      >
        <div class="row">
          <div class="col">
            <q-btn
              flat
              style="text-align: left"
              class=""
              icon="arrow_back"
              @click="$router.push({ path: '/' })"
            ></q-btn>
          </div>
          <div class="col-12">
            <p style="font-size: 22px" class="text-center">
              {{ selected_Details.Title }}
            </p>
          </div>
        </div>

        <!-- if done "APPLY FOR THIS JOB" , then it shall be changed to "APPLIED" -->
        <q-btn
          class="bg-green"
          rounded
          label="Apply For This Job"
          @click="Apply()"
          style="align-self: center"
        ></q-btn>
      </q-card-section>
      <q-card-section class="">
        <q-card flat>
          <div class="row q-pa-md">
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon name="work" size="2em" style="color: #06372c" />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>TYPE OF WORK</q-item-label>
                  <q-item-label>{{ selected_Details.Type }}</q-item-label>
                </q-item-section>
                <q-separator vertical v-if="$q.screen.gt.xs" />
              </q-item>
            </div>

            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon name="php" size="2em" style="color: #06372c" />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>SALARY</q-item-label>
                  <q-item-label>{{
                    selected_Details.Salary
                  }}</q-item-label></q-item-section
                >
                <q-separator vertical v-if="$q.screen.gt.md" />
              </q-item>
            </div>
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon name="watch" size="2em" style="color: #06372c" />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>HOURS / WEEK</q-item-label>
                  <q-item-label>{{
                    selected_Details.NumHours
                  }}</q-item-label></q-item-section
                >
                <q-separator vertical v-if="$q.screen.gt.xs" />
              </q-item>
            </div>
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon name="event" size="2em" style="color: #06372c" />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>DATE POSTED</q-item-label>
                  <q-item-label>{{
                    selected_Details.DateTo
                  }}</q-item-label></q-item-section
                >
                <q-separator vertical v-if="$q.screen.gt.md" />
              </q-item>
            </div>
          </div>
        </q-card>
      </q-card-section>
    </q-card>
  </div>
  <div class="row skill-card">
    <div class="col-12 col-sm-8 col-md-8 col-lg-8">
      <q-card class="q-ma-sm">
        <q-item>
          <q-item-section avatar>
            <q-icon name="list" size="2em" class="colorText" />
          </q-item-section>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              JOB OVERVIEW
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item-section class="q-pa-md"
          ><p>
            {{ selected_Details.Description }}
          </p>

          <p><b>Number of Vacancy:</b> {{ selected_Details.VacantCount }}</p>
          <p>{{ selected_Details.Course }}</p>
          <p>{{ selected_Details.EducationLevel }}</p>
          <p>{{ selected_Details.License }}</p>
        </q-item-section>

        <q-item-section class="q-pa-sm">
          <p class="text-bold">Open Until: {{ selected_Details.DateFrom }}</p>
        </q-item-section>
      </q-card>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4">
      <q-card class="q-ma-sm">
        <q-item>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              ABOUT THE EMPLOYER
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item-section class="q-pa-md">
          <p>
            Company Name: <b>{{ selected_Details.company_name }}</b>
          </p>
          <p>Contact Person: <b>JomzTv</b></p>
          <p>Total Job Posts: <b>1</b></p></q-item-section
        >
      </q-card>
    </div>
    <div class="col-12">
      <q-card> </q-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  name: "JobDetails",
  data() {
    return {
      job: null,
      ApplyPage: [],
      jobposting_me: [],
      selected_Details: [],


      retrievedLogin: "",
      userinfo: [],
    };
  },
  methods: {
    Apply() {
      const store = useLoginCheck();
      let data = new FormData();
      data.append("JobID", this.selected_Details.ID);
      data.append("ApplicantID", this.userinfo.data[0].PMID)

       console.log("Apply Success", this.selected_Details.ID);
        console.log("Apply Success", this.userinfo.data[0].PMID);

      store
        .ApplyJobs(data)
        .then((res) => {
          this.ApplyPage = store.AppliedJobs;
          console.log("Apply Success", this.ApplyPage);
        })
        .catch((error) => {
          console.log("Apply Error", error);
        });
    },
  },
  created() {
    const store1 = useLoginCheck();
    let data1 = new FormData();

    store1.Retrieve_JobPosting(data1).then((res) => {
      this.jobposting_me = store1.RetreivedJobPosting.data;
      console.log("Job Posting Details", this.jobposting_me);

      const jobId = parseInt(this.$route.params.id, 10); // Convert ID to an integer
      const filteredJobs = this.jobposting_me.filter((job) => job.ID == jobId);
      this.selected_Details = filteredJobs.length > 0 ? filteredJobs[0] : null;
      console.log("Selected Details:", this.selected_Details);
    });


    this.retrievedLogin = localStorage.getItem("Login");
     let data2 = new FormData();
    data2.append("LoginID", this.retrievedLogin);

    store1.RetrievedData_function(data2).then((res) => {
      this.userinfo = store1.RetrievedData;
      console.log("Ako ni ID,", this.userinfo)
    });

  },
  computed: {
    limitedRows() {
      // Limit the rows to the number set in pagination rowsPerPage
      return this.rows.slice(0, this.pagination.rowsPerPage);
    },
    limitedRowsEmployers() {
      // Limit the rows to the number set in pagination rowsPerPage
      return this.rowEmployers.slice(0, this.pagination.rowsPerPage);
    },
  },
};
</script>

<style scoped>
.profile-card {
  max-width: 70%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card {
  max-width: 70%;
  margin: auto;
  margin-top: 1%;
  border-radius: 5px;
  overflow: hidden;
}

.colorText {
  color: #06372c;
}
</style>
