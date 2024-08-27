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
              @click="$router.push({ path: '/Appointment' })"
            ></q-btn>
          </div>
          <div class="col-12">
            <p style="font-size: 22px" class="text-center">
              {{ selected_Details.title }}
            </p>
          </div>
        </div>

        <!-- if done "APPLY FOR THIS JOB" , then it shall be changed to "APPLIED" -->
        <!-- <q-btn
          outline
          rounded
          color="warning"
          label="Applied"
          @click="$router.push({ path: '/apply' })"
          style="align-self: center"
        ></q-btn> -->
      </q-card-section>
    </q-card>
  </div>
  <div class="row skill-card">
    <div class="col-12">
      <q-card bordered>
        <q-item>
          <q-item-section avatar>
            <q-icon name="list" size="2em" class="colorText" />
          </q-item-section>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              APPOINTMENT DETAILS
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-card-section class="">
          <p>Appointment Title: <b>{{ selected_Details.title }}</b></p>
          <p class="">
            Appointment Date and Time:
            <b
              >{{ selected_Details.Appointment_date }} ||
              {{ selected_Details.Appointment_time }}
            </b>
          </p>
          <p>Appointment Location:</p>
          <p>Appointment Description: <b>{{ selected_Details.Desc }}</b></p>
        </q-card-section>
        <q-card-section align="right" style="margin-top: -30px" >
          <!-- Status will be according to the job posting and if there isnt update from applicant(Closed, Canceled, or Ended) -->
          <p>
            Status:
            <q-btn disabled color="blue" outline size="small">{{ selected_Details.Status }}</q-btn>
          </p>
        </q-card-section>
        <q-card-section align="right" style="margin-top: -30px">

          <q-btn color="green" class="" @click="Accept()">Accept</q-btn>
          <q-btn
            outline
            color="warning"
            class="q-ma-sm"
            @click="reschedule = true"
            >Re-schedule</q-btn
          >
          <q-btn color="red" @click="decline = true">Decline</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- Reschedule -->
  <q-dialog v-model="reschedule">
    <q-card>
      <q-toolbar class="text-white" style="background-color: #06372c">
        <q-toolbar-title>Reschedule Appointment</q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="">
        <p>Reason for Re-scheduling:</p>
        <q-input v-model="text" filled autogrow />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn color="green" label="Send" v-close-popup />
        <q-btn color="red" label="Cancel" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Decline -->
  <q-dialog v-model="decline">
    <q-card>
      <q-toolbar class="text-white" style="background-color: #06372c">
        <q-toolbar-title>Decline Appointment</q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="">
        <p>Reason for Declining :</p>
        <q-input v-model="text" filled autogrow />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn color="green" label="Send" v-close-popup />
        <q-btn color="red" label="Cancel" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      reschedule: false,
      decline: false,
      appDtls: [],
      selected_Details: [],
      appointment: [],
      rows: [
        { name: "John Doe", age: 30, job: "Developer" },
        { name: "Jane Smith", age: 28, job: "Designer" },
        { name: "Michael Johnson", age: 32, job: "Manager" },
        { name: "Sarah Connor", age: 29, job: "Analyst" },
        { name: "Chris Evans", age: 35, job: "Engineer" },
        { name: "Emma Watson", age: 27, job: "Actress" },
        { name: "Robert Downey", age: 45, job: "Actor" },
        // Add more rows as needed
      ],
      rowEmployers: [
        { name: "John Doe", age: 30, job: "Developer" },
        { name: "Jane Smith", age: 28, job: "Designer" },
        { name: "Michael Johnson", age: 32, job: "Manager" },
        { name: "Sarah Connor", age: 29, job: "Analyst" },
        { name: "Chris Evans", age: 35, job: "Engineer" },
        { name: "Emma Watson", age: 27, job: "Actress" },
        { name: "Robert Downey", age: 45, job: "Actor" },
      ],
      columnEmployer: [
        {
          name: "age",
          label: "DATE HIRED",
          field: "age",
          sortable: true,
          align: "left",
        },
        {
          name: "job",
          label: "BUSINESS NAME",
          field: "job",
          sortable: true,
          align: "left",
        },
        {
          name: "age",
          label: "STATUS",
          field: "age",
          sortable: true,
          align: "left",
        },
        {
          name: "age",
          label: "ACTION",
          field: "age",
          sortable: true,
          align: "left",
        },
      ],
      columns: [
        {
          name: "name",
          label: "DATE",
          field: "name",
          sortable: true,
          align: "left",
        },
        { name: "age", label: "JOB", field: "age", sortable: true },
        { name: "job", label: "ACTIONS", field: "job", sortable: true },
      ],
      pagination: {
        rowsPerPage: 5, // This controls how many rows are shown per page; set to the number you want to show
      },
    };
  },
  methods: {

  },
  created() {
    const store = useLoginCheck();
    this.appDtls = store.Appointments;
    console.log("Appointment Details: ", this.appDtls);

    const jobId = parseInt(this.$route.params.id, 10); // Convert ID to an integer
    const filteredJobs = this.appDtls.filter(
      (appointment) => appointment.ID == jobId
    );
    this.selected_Details = filteredJobs.length > 0 ? filteredJobs[0] : null;
    console.log("Selected Details:", this.selected_Details);
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
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card {
  max-width: 80%;
  margin: auto;
  margin-top: 1%;
  border-radius: 5px;
  overflow: hidden;
}

.colorText {
  color: #06372c;
}
</style>
