import { defineStore } from "pinia";
import axios from "axios";

export const useLoginCheck = defineStore("SignUpAccouteStore", {
  state: () => ({
    Check_Login: "",
    OtpVerify: [],
    SaveData: [],
    RetrievedData: [],
    RetreivedJobPosting: [],
    AppliedJobs: [],
    job: null,
    jobs: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async LoginChecking(payload) {
      console.log("im here");
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/logincheck.php`,
        payload
      );
      console.log("Email Duplicate Checking", res.data.Email_duplicate);
      console.log("Login Duplicate Checking", res.data.login_duplicate);

      if (
        res.data.Email_duplicate == false &&
        res.data.login_duplicate == true
      ) {
        return 1;
      } else if (
        res.data.Email_duplicate == true &&
        res.data.login_duplicate == false
      ) {
        return 2;
      } else if (
        res.data.Email_duplicate == true &&
        res.data.login_duplicate == true
      ) {
        return 3;
      } else if (
        res.data.Email_duplicate == false &&
        res.data.login_duplicate == false
      ) {
        return 4;
      }
      console.log("res.data", res.data);
    },

    async Login_Store(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/login/client/login.php`,
        payload
      );
      this.LogIn = res.data;
      console.log("LOG IN Store", res.data);
    },

    async VerifyOtp(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/otp.php`,
        payload
      );
      this.OtpVerify = res.data;
      console.log("Verify OTP", this.OtpVerify);
    },

    async SaveToDatabase(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/register.php`,
        payload
      );
      this.SaveData = res.data;
      console.log("Store Databse Save", res.data);
    },

    async RetrievedData_function(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/dashboard/client/getuserinfo.php`,
        payload
      );
      this.RetrievedData = res.data;
      // console.log("Retrieved Data", res.data);
    },

    async Retrieve_JobPosting() {
      let res = await axios.get(
        `http://10.0.1.26:82/peesoportal/jobs/client/getjobs.php`
      );
      this.RetreivedJobPosting = res.data;
      console.log("Retrieved Job Data", res.data);
    },

    async ApplyJobs(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/client/applyjob.php`,payload
      );
      this.AppliedJobs = res.data;
      console.log("Applied Jobs =>", res.data )
    },

/*     async FetchJobDetails(id) {
      let res = await axios.get(
        `http://10.0.1.26:82/peesoportal/jobs/client/getjobs.php`
      );
      if (res.data && typeof res.data === "object" && res.data.ID === id) {
        this.RetreivedJobDetails = res.data;
      } else {
        console.error("Job Not Found or Unexpected Response Format");
      }
      console.log("Retrieved Job Data", this.RetreivedJobDetails);
    }, */
  },
  persist: true,
});
