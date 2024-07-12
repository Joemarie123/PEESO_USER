<template>
  <div>
    <p class="title q-ma-sm">WORK EXPERIENCE</p>
    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">LIST OF WORK EXPERIENCES</p>
              <!-- <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                title=""
                wrap-cells=""
                dense
                :rows="personal"
                :columns="columns"
                row-key="id"
              >
                <template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteExperience(row)"
                    >
                    </q-btn>
                  </div>
                </template>
              </q-table> -->
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <!-- DIALOG FOR EXPIRIENCE DELETE -->
    <q-dialog
      v-model="DeleteExperienceDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Work Experience</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Work Experience?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteExperienceFinal()"
            class="text-green"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
// import { useLoginStore } from "src/stores/LoginStore";
// import { useUserInfoStore } from "src/stores/AdditionalStore";
// export default {
//   data() {
//     return {
//       DeleteExperienceDialog: false,
//       ExperienceID: "",
//       model: "",
//       personal: [],
//       columns: [
//         {
//           name: "InclusiveDateFrom",
//           required: true,
//           label: "From",
//           align: "left",
//           field: "wfrom",
//           format: (val) => `${val}`,
//           sortable: true,
//         },
//         {
//           name: "InclusiveDateTo",
//           align: "center",
//           label: "To",
//           field: "wto",
//           sortable: true,
//         },
//         {
//           name: "PositionTitle",
//           align: "center",
//           label: "PositionTitle",
//           field: "wposition",
//           sortable: true,
//         },
//         {
//           name: "Department",
//           align: "center",
//           label: "Department",
//           field: "wcompany",
//           sortable: true,
//         },
//         {
//           name: "MonthlySalary",
//           align: "center",
//           label: "Monthly Salary",
//           field: "wsalary",
//           format: (val) => {
//             const numVal = Number(val);
//             if (!isNaN(numVal)) {
//               return numVal.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "PHP",
//               });
//             }
//             return val;
//           },
//           sortable: true,
//         },
//         {
//           name: "SalaryGrade",
//           align: "center",
//           label: "Salary Grade",
//           field: "wgrade",
//           sortable: true,
//         },
//         {
//           name: "StatusofAppointment",
//           align: "center",
//           label: "Status of Appointment",
//           field: "status",
//           sortable: true,
//         },
//         {
//           name: "GovtService",
//           align: "center",
//           label: "Gov't Service",
//           field: "wgov",
//           sortable: true,
//         },
//         {
//           name: "actions",
//           label: "ACTIONS",
//           field: "actions",
//           align: "left",
//         },
//       ],
//     };
//   },
//   created() {
//     this.personal = [];
//     const userstore = useLoginStore();
//     // this.personal=userstore.userexperience.map((item)=>({...item}));
//     this.personal = userstore.userexperience;
//     this.ControlNo = userstore.controlno;
//     const userinfostore = useUserInfoStore();

//     let data = new FormData();
//     data.append("controlno", userstore.controlno);
//     userinfostore.getworkexp(data).then((res) => {
//       // console.log("service record=", userinfostore.userexperience);
//       // console.log("experience=", this.personal);
//       let servicerecord = userinfostore.workexp;

//       servicerecord.forEach((item) => {
//         if (
//           !this.personal.some(
//             (existingItem) => existingItem.wposition == item.wposition
//           )
//         ) {
//           this.personal.push(item);
//         }
//       });
//       // console.log("experience=",this.personal)
//     });
//     // console.log("experience=",this.personal)
//   },
//   setup() {
//     const store = useLoginStore();
//     const personals = store.userinfo[0];
//     return {
//       store,
//       personals,
//     };
//   },
//   methods: {
//     deleteExperience(experienceid) {
//       this.ExperienceID = experienceid.ID;
//       this.DeleteExperienceDialog = true;
//     },
//     deleteExperienceFinal() {
//       console.log("Experience ID =>", this.ExperienceID);
//       this.DeleteExperienceDialog = false;
//       // const store = useUserInfoStore
//       const loginstore = useLoginStore();
//       const user = new FormData();
//       user.append("controlno", loginstore.controlno);
//       const store = useUserInfoStore();
//       const data = new FormData();
//       data.append("tablename", "experience");
//       data.append("id", this.ExperienceID);
//       store.deletedata(data).then(() => {
//         loginstore.userdetails(user).then(() => {
//           // console.log("new data=", loginstore.usereducation)
//           this.personal = loginstore.userexperience;
//           const userinfostore = useUserInfoStore();

//           userinfostore.getworkexp(user).then((res) => {
//             // console.log("service record=", userinfostore.userexperience);
//             // console.log("experience=", this.personal);
//             let servicerecord = userinfostore.workexp;

//             servicerecord.forEach((item) => {
//               if (
//                 !this.personal.some(
//                   (existingItem) => existingItem.wposition == item.wposition
//                 )
//               ) {
//                 this.personal.push(item);
//               }
//             });
//             // console.log("experience=",this.personal)
//           });
//           // console.log("old children=", this.personal[0].children)
//           // this.personal = loginstore.userinfo.map((item) => ({ ...item }))
//           // console.log("new children=", this.personal[0].children)
//         });
//       });
//     },
//   },
// };
</script>

<style scoped>
.title {
  font-size: 15px;
}
.item {
  font-weight: 400;
}
.item1 {
  font-weight: 400;
  margin-left: -10px;
}
.item2 {
  font-weight: 400;
  margin-left: -38px;
}
.item3 {
  font-weight: 400;
  margin-left: -15px;
}
.item4 {
  font-weight: 400;
  margin-left: -20px;
}
.info-line {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 70px;
  font-weight: 500;
  margin-top: -10px;
}
.name {
  font-weight: 500;
}
.nameLabel {
  font-style: italic;
  margin-top: -15px;
}

/* .label {
  text-align: right;
  white-space: nowrap;
} */

/* Optional: Additional styling for better readability */
.info-line span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address {
  margin-top: -12px;
}
.addressTitle {
  margin-top: -12px;
  font-weight: 500;
}
</style>
