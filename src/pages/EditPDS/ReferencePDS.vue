<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">
        LIST OF REFERENCES
        <q-btn
          label="Add"
          @click="ReferenceDialog = true"
          class="q-mb-sm q-ml-sm"
          style="background-color: green; color: white"
        ></q-btn>
      </div>
      <q-table
        class="my-sticky-header-table"
        flat
        bordered
        title=""
        dense
        wrap-cells=""
        :rows="reference"
        :columns="columns"
        row-key="id"
        ><template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="bold-header text-uppercase"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template></q-table
      >
    </q-card>
  </div>

  <q-dialog
    v-model="ReferenceDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="" style="width: 500px">
      <q-toolbar style="background-color: #0275d8; color: white">
        <q-toolbar-title>ADD REFERENCE DETAILS</q-toolbar-title>
        <q-btn icon="close" flat round dense @click="resetFieldsReference" />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <q-input
              filled
              v-model="Name"
              label="Reference Name"
              dense
              class="q-pa-sm"
            />
          </div>
          <div class="col-12 col-md-6 col-sm-6">
            <q-input
              filled
              v-model="Address"
              label="Address"
              dense
              class="q-pa-sm"
            />
          </div>
          <div class="col-12 col-md-6 col-sm-6">
            <q-input
              filled
              v-model="ContactNo"
              label="Contact No. / Telephone No."
              dense
              class="q-pa-sm"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancel"
          color="warning"
          @click="resetFieldsReference"
          size="md"
        />
        <q-btn
          label="Add Update"
          color="primary"
          size="md"
          v-close-popup
          @click="addreference()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: {
    activeButton: String,
  },
  data() {
    return {
      alert: false,
      dialog: false,
      Name: "",
      Address: "",
      ContactNo: "",

      personal: [],
      reference: [],
      ReferenceDialog: false,
      columns: [
        {
          name: "Name",
          align: "left",
          label: "Name",
          field: "Names",
          sortable: true,
        },
        {
          name: "Address",
          align: "center",
          label: "Address",
          field: "Address",
          sortable: true,
        },
        {
          name: "ContactNo",
          align: "center",
          label: "Contact Number",
          field: "TelNo",
          sortable: true,
        },
      ],
      updatecolumns: [
        {
          name: "Type",
          align: "left",
          label: "Update Type",
          field: "type",
          sortable: true,
        },
        {
          name: "Field",
          align: "center",
          label: "Field",
          field: "label",
          sortable: true,
        },
        {
          name: "DFrom",
          align: "center",
          label: "Data From",
          field: "Dfrom",
          sortable: true,
        },
        {
          name: "DTo",
          align: "center",
          label: "Data To",
          field: "Dto",
          sortable: true,
        },
      ],
      images: [],
      imagesurl: [],
      small: false,
      smallmessage: "",
      smalltitle: "",
      changepic: false,
    };
  },

  methods: {
    resetFieldsReference() {
      this.ReferenceDialog = false;
      this.Name = "";
      this.Address = "";
      this.ContactNo = "";
    },
    savePic() {
      if (this.image) {
        const store = useUserInfoStore();
        let Form = new FormData();

        Form.append("ControlNo", this.personal[0].ControlNo);
        Form.append("file", this.image);
        store.savePic(Form).then((res) => {
          if (res == 1) {
            this.changepic = false;
            this.smalltitle = "Requested!";
            this.smallmessage =
              "The request for update has been sent to the HR.";
            this.small = true;
            this.resetFieldsPicture();
          } else if (res == 2) {
            this.changepic = false;
            this.smalltitle = "Duplicate Entry!";
            this.smallmessage =
              "The request for update has already been sent to the HR, Please check the Request history for more information.";
            this.small = true;
            this.resetFieldsPicture();
          } else {
            this.changepic = false;
            this.smalltitle = "Error!";
            this.smallmessage =
              "Please contact the SPM Team on local number 508";
            this.small = true;
            this.resetFieldsPicture();
          }
        });
      } else {
        this.smalltitle = "ERROR!";
        this.smallmessage = "No Image found!";
        this.small = true;
      }
    },
    addreference() {
      const userstore = useUserInfoStore();
      let Form = new FormData();
      console.log("ControlNo_Reference=", this.ControlNo);
      Form.append("Controlno", this.ControlNo);
      Form.append("names", this.Name);
      Form.append("address", this.Address);
      Form.append("telno", this.ContactNo);
      Form.append("status", "PENDING");

      userstore.savereference(Form).then((res) => {
        console.log("res=", res);
        if (res == 1) {
          this.ReferenceDialog = false;
          this.smalltitle = "Requested!";
          this.smallmessage = "The request for update has been sent to the HR.";
          this.small = true;
          this.resetFieldsReference();
        } else if (res == 2) {
          this.ReferenceDialog = false;
          this.smalltitle = "Duplicate Entry!";
          this.smallmessage =
            "The request for update has already been sent to the HR, Please check the Request history for more information.";
          this.small = true;
          this.resetFieldsReference();
        } else {
          this.ReferenceDialog = false;
          this.smalltitle = "Error!";
          this.smallmessage = "Please contact the SPM Team on local number 508";
          this.small = true;
          this.resetFieldsReference();
        }
      });

      this.Name = "";
      this.Address = "";
      this.ContactNo = "";
    },

    Savedata() {
      console.log("savedate");
      this.updatearr = [];

      const labelarray = [
        { name: "third degree", column: "Q1" },
        { name: "fourth degree details", column: "R11" },
        { name: "fourth degree", column: "Q11" },
        { name: "third degree details", column: "R1" },
        { name: "any court or tribunal", column: "Q3" },
        { name: "any court or tribunal details", column: "R3" },
        { name: "administrative offense", column: "Q4" },
        { name: "administrative offense details", column: "R4" },
        {
          name: "phased out(abolition) in the public or private sector?",
          column: "Q5",
        },
        {
          name: "phased out(abolition) in the public or private sector? details",
          column: "R5",
        },
        {
          name: "local election held within the last year (except Barangay election)?",
          column: "Q6",
        },
        {
          name: "local election held within the last year (except Barangay election)? details",
          column: "R6",
        },
        { name: "criminally charged before any court", column: "Q7" },
        { name: "criminally charged before any court details", column: "R7" },
        { name: "Local", column: "local" },
        { name: "Local Details", column: "localdetails" },
        { name: "Country", column: "country" },
        { name: "Country Details", column: "countrydetails" },
        { name: "IP", column: "IP" },
        { name: "IP Reason", column: "IPR" },
        { name: "PWD", column: "PWD" },
        { name: "Chronic", column: "chronic" },
        { name: "Psychosocial", column: "Psychosocial" },
        { name: "Orthopedic", column: "Orthopedic" },
        { name: "Communication", column: "Communication" },
        { name: "Learning", column: "Learning" },
        { name: "Mental", column: "Mental" },
        { name: "Visual", column: "Visual" },
        { name: "Solo Parent", column: "SoloP" },
      ];
    },
  },
};
</script>
