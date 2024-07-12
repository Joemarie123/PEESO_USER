<template>
  <div>
    <p class="title q-ma-sm">NON-ACADEMIC DISTINCTIONS</p>
    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">
                LIST OF NON-ACADEMIC DISTINCTIONS
              </p>
              <!-- <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                title=""
                wrap-cells=""
                dense
                :rows="academic"
                :columns="columnAcademic"
                row-key="id"
              >
                <template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteNonAcademic(row)"
                    >
                    </q-btn>
                  </div> </template
              ></q-table> -->
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <!-- DIALOG FOR NonAcademic DELETE -->
    <q-dialog
      v-model="DeleteNonAcademicDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Non-Academic Distinctions</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Non-Academic Distinctions?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteNonAcademicFinal()"
            class="text-green"
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
//       DeleteNonAcademicDialog: false,
//       NonAcademicID: "",
//       model: "",
//       personal: [],
//       academic: [],
//       columnAcademic: [
//         {
//           name: "NonAcademic",
//           required: true,
//           label: "Non-Academic Distinction",
//           align: "left",
//           field: "NonAcademic",
//           format: (val) => `${val}`,
//           sortable: true,
//         },
//         {
//           name: "actions",
//           label: "Actions",
//           field: "actions",
//           align: "left",
//         },
//       ],
//     };
//   },
//   created() {
//     const userstore = useLoginStore();
//     this.controlno = userstore.controlno;
//     this.academic = userstore.useracademic;
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
//     deleteNonAcademic(nonacademicid) {
//       this.NonAcademicID = nonacademicid.ID;
//       this.DeleteNonAcademicDialog = true;
//     },
//     deleteNonAcademicFinal() {
//       console.log("NonAcademic ID =>", this.NonAcademicID);
//       this.DeleteNonAcademicDialog = false;
//       // const store = useUserInfoStore
//       const loginstore = useLoginStore();
//       const user = new FormData();
//       user.append("controlno", loginstore.controlno);
//       const store = useUserInfoStore();
//       const data = new FormData();
//       data.append("tablename", "nonacademic");
//       data.append("id", this.NonAcademicID);
//       store.deletedata(data).then(() => {
//         loginstore.userdetails(user).then(() => {
//           // console.log("new data=", loginstore.usereducation)
//           this.academic = loginstore.useracademic;
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
