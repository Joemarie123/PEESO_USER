<template>
  <div class="profile-card">
    <div class="row profile-container">
      <div class="profile-avatar">
        <q-avatar class="avatar">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>
      <div class="col-12" style="text-align: center">
        <p style="font-weight: 500; margin-bottom: -2px">
          <span
           
          >
            {{ userinfo.data[0].Firstname }}  {{ userinfo.data[0].Surname }}
          </span>
        </p>
        <p>Web Development, JavaScript, CSS, HTML</p>
      </div>
      <!-- <div class="profile-details">
        <h2 class="title"><b>John Doe</b></h2>
        <p class="title">Web Development, JavaScript, CSS, HTML</p>
        <br>
        <p style="margin-bottom: -10px; margin-top: 20px; font-weight: 500;">SALARY</p>
        <p>P 10,000 / month</p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500">EDUCATION</p>
        <p>College Level</p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500">SKILLS</p>
        <p>Programming , Technical</p>
        <q-btn outline rounded color="green" label="Edit Profile" icon="edit"/>
      </div> -->
    </div>
  </div>
  <div class="row skill-card">
    <div class="col-12 col-sm-8 col-md-8 col-lg-8">
      <q-card class="q-ma-sm">
        <q-card-section style=""
          ><p style="font-weight: 500; font-size: 16px">Profile Description</p>
          <p>
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
          </p>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4">
      <q-card class="q-ma-sm">
        <q-card-section style=""
          ><p style="font-weight: 500; font-size: 16px">Basic Information</p>
          <p>
            Age <br />
            <b>25</b>
          </p>
          <p>
            Gender <br />
            <b>{{ userinfo.data[0].Sex }}</b>
          </p>
          <p>
            Email Address <br />
            <b>{{ userinfo.data[0].Email }}</b>
          </p>
          <p>
            Mailing Address <br />
            <b>{{ userinfo.data[0].Address }}</b>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      retrievedLogin: "",
      userinfo: [],
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
  created() {
    this.retrievedLogin = localStorage.getItem("Login");
    console.log("Retrieved Login:", this.retrievedLogin); // Check the retrieved login

    const store = useLoginCheck();
    let data = new FormData();
    data.append("LoginID", this.retrievedLogin);

    store.RetrievedData_function(data).then((res) => {
      this.userinfo = store.RetrievedData;
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
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  background: linear-gradient(to bottom, #06372c 50%, #ffffff 50%);
  padding: 20px;
  height: 100%; /* Ensure the container fills vertical space */
}

.profile-avatar {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 50%;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-details {
  flex: 1;
  padding: 10px;
  text-align: left;
}
.title {
  color: white;
}

.profile-details h2 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.profile-details p {
  margin: 5px 0;
  font-size: 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #ffffff 50%);
    padding: 20px;
  }

  .profile-avatar {
    margin-right: 0;
    margin-bottom: 20px;
    background: white; /* Blue background for the avatar */
  }

  .profile-details {
    text-align: center;
    background: #ffffff; /* White background for the details */
    padding: 20px;
    border-radius: 8px;
  }
  .title {
    color: black;
  }
}
</style>
