<template>
  <div>
    <p class="title q-ma-sm">EDUCATIONAL BACKGROUND</p>
    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">ATTENDED SCHOOLS</p>
              <!-- <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase q-pa-sm"
                flat
                wrap-cells=""
                bordered
                title=""
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
                      @click="deleteEducation(row)"
                    >
                    </q-btn>
                  </div> </template
              ></q-table> -->
            </div>
          </div>
        </q-card>
      </div>
    </div>

    <!-- DIALOG FOR Education DELETE -->
    <q-dialog
      v-model="DeleteEducationDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Education</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Education Details?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteEducationFinal()"
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
//       DeleteEducationDialog: false,
//       EducationID: "",
//       model: "",
//       personal: [],
//       columns: [
//         {
//           name: "Level",
//           required: true,
//           label: "Level",
//           align: "left",
//           field: "Education",

//           sortable: true,
//         },
//         {
//           name: "NameofSchool",
//           align: "center",
//           label: "Name of School",
//           field: "School",
//           sortable: true,
//         },
//         {
//           name: "Degree",
//           align: "center",
//           label: "Basic Education / Degree / Course",
//           field: "Degree",
//           sortable: true,
//         },
//         {
//           name: "PeriodofAttendanceFrom",
//           align: "center",
//           label: "From",
//           field: "From",
//           sortable: true,
//         },
//         {
//           name: "PeriodofAttendanceTo",
//           align: "center",
//           label: "To",
//           field: "To",
//           sortable: true,
//         },
//         {
//           name: "Unit",
//           align: "center",
//           label: "Highest Level / Units Earned",
//           field: "NumUnits",
//           sortable: true,
//         },
//         {
//           name: "YearGraduated",
//           align: "center",
//           label: "Year Graduated",
//           field: "yeargraduated",
//           sortable: true,
//         },
//         {
//           name: "Scholarship",
//           align: "center",
//           label: "Scholarship / Academic Honors Received",
//           field: "Honors",
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
//     const userstore = useLoginStore();
//     this.personal = userstore.usereducation;
//     console.log("Personal", this.personal);
//     for (let i = 0; i < this.personal.length; i++) {
//       this.personal[i].From = this.personal[i].DateAttend.slice(0, 4);
//       this.personal[i].To = this.personal[i].DateAttend.slice(6, 11);
//       if (this.personal[i].Graduated == "YES") {
//         this.personal[i].yeargraduated = this.personal[i].To;
//         this.personal[i].NumUnits = "";
//       } else {
//         this.personal.yeargraduated = "";
//       }
//     }
//     console.log("education=", this.personal);
//     this.ControlNo = userstore.controlno;
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
//     deleteEducation(educationid) {
//       this.EducationID = educationid.PMID;
//       this.DeleteEducationDialog = true;
//     },
//     deleteEducationFinal() {
//       console.log("Education ID =>", this.EducationID);
//       // const store = useUserInfoStore
//       const loginstore = useLoginStore();
//       const user = new FormData()
//       user.append('controlno', loginstore.controlno)
//       const store = useUserInfoStore();
//       const data = new FormData
//       data.append('tablename', 'education')
//       data.append('id', this.EducationID)
//       store.deletedata(data).then(() => {
//         loginstore.userdetails(user).then(
//           () => {
//             console.log("new data=",loginstore.usereducation)
//             this.personal = loginstore.usereducation;
//             // console.log("old children=", this.personal[0].children)
//             // this.personal = loginstore.userinfo.map((item) => ({ ...item }))
//             // console.log("new children=", this.personal[0].children)
//           }
//         )
//       })
//     },
//   }
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
