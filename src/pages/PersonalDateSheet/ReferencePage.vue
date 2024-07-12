<template>
  <div>
    <p class="title q-ma-sm">REFERENCES</p>
    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">LIST OF REFERENCES</p>
              <!-- <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                wrap-cells=""
                title=""
                dense
                :rows="reference"
                :columns="column"
                row-key="id"
                ><template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteReference(row)"
                    >
                    </q-btn>
                  </div> </template
              ></q-table> -->
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <!-- DIALOG FOR REFERENCE DELETE -->
    <q-dialog
      v-model="DeleteReferenceDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Reference</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Reference?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteReferenceFinal()"
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
//       reference: [],
//       DeleteReferenceDialog: false,
//       ReferenceID: "",
//       column: [
//         {
//           name: "Name",
//           align: "left",
//           label: "Name",
//           field: "Names",
//           sortable: true,
//         },
//         {
//           name: "Address",
//           align: "center",
//           label: "Address",
//           field: "Address",
//           sortable: true,
//         },
//         {
//           name: "ContactNo",
//           align: "center",
//           label: "Contact Number",
//           field: "TelNo",
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
//         this.reference = userstore.userreference;
//     this.controlno = userstore.controlno;
//     // this.personal = userstore.userinfo.map((item) => ({ ...item }));

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
//     deleteReference(referenceid) {
//       this.ReferenceID = referenceid.PMID;
//       this.DeleteReferenceDialog = true;
//     },
//     deleteReferenceFinal() {
//       console.log("Reference ID =>", this.ReferenceID);
//       // const store = useUserInfoStore
//       const loginstore = useLoginStore();
//       const user = new FormData();
//       user.append("controlno", loginstore.controlno);
//       const store = useUserInfoStore();
//       const data = new FormData();
//       data.append("tablename", "reference");
//       data.append("id", this.ReferenceID);
//       store.deletedata(data).then(() => {
//         loginstore.userdetails(user).then(() => {
//           // console.log("new data=", loginstore.usereducation)
//           // this.organization = loginstore.userorganization;
//           this.reference = loginstore.userreference.map((item) => ({
//             ...item,
//           }));

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
</style>
