import { defineStore } from "pinia";
import axios from "axios";

export const useLoginCheck = defineStore("SignUpAccouteStore", {
  state: () => ({
    Check_Login: "",
    OtpVerify: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async LoginChecking(payload) {
      // http://10.0.1.26:82/HRPORTAL/login.php
      let res = await axios.post(
        'http://10.0.1.26:82/peesoportal/registration/admin/logincheck.php',
        payload
      );
      console.log("Login Duplicate Checking", res.data.company_duplicate);

      if (res.data.company_duplicate == false) {
        return 1;
      } else if (res.data.company_duplicate == true) {
        return 2;
      }
    },

    async VerifyOtp(payload) {
      // http://10.0.1.26:82/HRPORTAL/login.php
      let res = await axios.post(
        'http://10.0.1.26:82/peesoportal/registration/admin/otp.php',
        payload
      );
      this.OtpVerify = res.data;
      console.log("Verify OTP", this.OtpVerify);
    },
  },
  persist: true,
});
