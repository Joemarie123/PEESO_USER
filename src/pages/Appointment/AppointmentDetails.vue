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
        <q-btn flat style="text-align: left" class="" icon="arrow_back"></q-btn>
        <p style="font-size: 22px; align-self: center">
          Web Developer / UX Specialist
        </p>
        <!-- if done "APPLY FOR THIS JOB" , then it shall be changed to "APPLIED" -->
        <q-btn
          outline
          rounded
          color="green"
          label="Applied"
          @click="$router.push({ path: '/apply' })"
          style="align-self: center"
        ></q-btn>
      </q-card-section>
      <q-card-section class="">
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
      </q-card-section>
    </q-card>
  </div>
  <div class="row skill-card">
    <div class="col-12">
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
      <q-item-section class="q-pa-md">
        <!-- <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit
            amet commodo nulla facilisi nullam vehicula ipsum a. Et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla. A
            iaculis at erat pellentesque adipiscing. Ut venenatis tellus in
            metus vulputate eu scelerisque felis imperdiet. Facilisi etiam
            dignissim diam quis. Cras fermentum odio eu feugiat pretium nibh
            ipsum consequat nisl. Integer feugiat scelerisque varius morbi enim
            nunc faucibus a pellentesque. Eu augue ut lectus arcu bibendum at.
            Lectus quam id leo in vitae turpis massa sed. Libero volutpat sed
            cras ornare arcu. Dictum at tempor commodo ullamcorper a lacus
            vestibulum. Scelerisque in dictum non consectetur a erat nam at.
            Amet aliquam id diam maecenas ultricies mi.
          </p> -->
        <p>Appointment Title:</p>
        <p>Appointment Date and Time:</p>
        <p>Appointment Location:</p>
        <p>Appointment Description:</p>
      </q-item-section>
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
