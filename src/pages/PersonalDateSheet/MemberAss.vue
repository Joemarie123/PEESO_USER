<template>
  <div>
    <p class="title q-ma-sm">MEMBERSHIP IN ASSOCIATION</p>
    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">
                LIST OF MEMBERSHIP IN ASSOCIATION
              </p>
              <!-- <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                wrap-cells=""
                title=""
                dense
                :rows="organization"
                :columns="columnMembership"
                row-key="id"
                ><template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteMembership(row)"
                    >
                    </q-btn>
                  </div> </template
              ></q-table> -->
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <!-- DIALOG FOR Membership DELETE -->
    <q-dialog
      v-model="DeleteMembershipDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Membership in Association</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Membership in Association?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteMembershipFinal()"
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
//       model: "",
//       DeleteMembershipDialog: false,
//       MembershipID: "",
//       personal: [],
//       organization: [],
//       columnMembership: [
//         {
//           name: "Membership",
//           required: true,
//           label: "Membership in Organization",
//           align: "left",
//           field: "Organization",
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
//     this.organization = userstore.userorganization;
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
//     deleteMembership(membershipid) {
//       this.MembershipID = membershipid.ID;
//       this.DeleteMembershipDialog = true;
//     },
//     deleteMembershipFinal() {
//       console.log("Membership ID =>", this.MembershipID);
//       this.DeleteMembershipDialog = false;
//       // const store = useUserInfoStore

//       const loginstore = useLoginStore();
//       const user = new FormData();
//       user.append("controlno", loginstore.controlno);
//       const store = useUserInfoStore();
//       const data = new FormData();
//       data.append("tablename", "organization");
//       data.append("id", this.MembershipID);
//       store.deletedata(data).then(() => {
//         loginstore.userdetails(user).then(() => {
//           // console.log("new data=", loginstore.usereducation)
//           this.organization = loginstore.userorganization;
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
