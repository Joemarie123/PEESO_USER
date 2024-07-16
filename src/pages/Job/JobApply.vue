<template>
  <div class="profile-card">
    <q-card>
      <q-card-section
        style="
          background-color: rgb(3, 69, 113);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        "
        class="text-white"
      >
        <q-btn flat style="text-align: left" class="" icon="arrow_back" @click="$router.push({path: '/JobDetails'})"></q-btn>
        <p style="font-size: 22px; align-self: center">Web Developer / UX Specialist</p>
        <!-- <q-btn class="bg-green" rounded label="Apply For This Job"></q-btn> -->
      </q-card-section>
      <!-- <q-card-section class="">
        <q-card flat>
          <div class="row q-pa-md">
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="work"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>TYPE OF WORK</q-item-label>
                  <q-item-label>PART TIME</q-item-label></q-item-section
                >
                <q-separator vertical />
              </q-item>
            </div>

            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="php"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>SALARY</q-item-label>
                  <q-item-label>PHP 10,000</q-item-label></q-item-section
                >
                <q-separator vertical />
              </q-item>
            </div>
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="watch"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>HOURS / WEEK</q-item-label>
                  <q-item-label>40</q-item-label></q-item-section
                >
                <q-separator vertical />
              </q-item>
            </div>
            <div class="col-12 col-lg-3 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="event"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>DATE POSTED</q-item-label>
                  <q-item-label>July 09, 2024</q-item-label></q-item-section
                >
                <q-separator vertical />
              </q-item>
            </div>
          </div>
        </q-card>
      </q-card-section> -->
    </q-card>
  </div>
  <div class="row skill-card">
    <div class="col-12">
      <q-card class="q-ma-xs">
        <q-item>
          <q-item-section avatar>
            <q-icon name="edit" size="2em" class="colorText" />
          </q-item-section>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              JOB APPLICATION
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item-section class="q-pa-md">
          <q-form>
            <div class="row">
              <div class="col-6">
                <q-input
                  filled
                  label="Subject"
                  dense
                  class="q-pa-sm text-uppercase"
                />
              </div>
              <div class="col-6">
                <q-input
                  filled
                  label="Item Code"
                  dense
                  class="q-pa-sm text-uppercase"
                />
              </div>

              <div class="col-12">
                <q-input
                  uppercase
                  filled
                  label="Cover Letter"
                  type="textarea"
                  class="q-pa-sm text-uppercase"
                  dense
                />
              </div>
            </div>
            <q-btn
              class="bg-green q-ma-sm text-white"
              rounded
              label="Send Message"
            ></q-btn>
          </q-form>
        </q-item-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  color: rgb(3, 69, 113);
}
</style>
