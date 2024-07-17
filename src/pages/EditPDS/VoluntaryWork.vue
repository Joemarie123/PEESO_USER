<template>
  <div>
    <q-card  class="q-pa-md q-ma-md">
    <div class="text-bold">
      LIST OF WORKS
      <q-btn
        label="Add"
        @click="secondDialog = true"
         class="q-mb-sm q-ml-sm"
          style="background-color: green; color: white"
      ></q-btn>
    </div>
    <q-table
      :grid="$q.screen.lt.md"
      class="my-sticky-header-table"
      flat
      bordered
      title=""
      wrap-cells=""
      dense
      :rows="personal"
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
      </template></q-table>
    <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px">
        <q-toolbar style="background-color: #0275d8; color: white">
          <q-toolbar-title>ADD DETAILS</q-toolbar-title>
          <q-btn icon="close" flat round dense @click="resetFields" />
        </q-toolbar>
        <q-separator />
        <q-card-section>
          <q-form ref="voluntary" lazy-rules>
            <div class="row">
              <div class="col-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Name"
                  label="Name and Address of Organization"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="InclusiveDateFrom"
                  label="Inclusive Date From"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="InclusiveDateTo"
                  label="Inclusive Date To"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="NumberofHours"
                  label="Number of Hours"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Position"
                  label="Position"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
            </div>

          </q-form>
        </q-card-section>

        <q-card-actions align="right" >
          <q-btn
            flat
            label="Cancel"
            color="warning"
            @click="resetFields"
            size="md"
          />
          <q-btn
            label="Add Update"
            color="primary"
            size="md"
            v-close-popup
            @click="addVoluntary()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="small">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">{{ smalltitle }}!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ smallmessage }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      ControlNo: "",
      small: false,
      smalltitle: "",
      smallmessage: "",
      inputRules: [(v) => !!v || "Field is required"],
      Name: "",
      InclusiveDateFrom: "",
      InclusiveDateTo: "",
      NumberofHours: "",
      Position: "",

      personal: [],
      secondDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      columns: [
        {
          name: "Name",
          required: true,
          label: "NAME & ADDRESS OF ORGANIZATION",
          align: "left",
          field: "OrgName",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "InclusiveDateFrom",
          align: "center",
          label: "From",
          field: "DateFrom",
          sortable: true,
        },
        {
          name: "InclusiveDateTo",
          align: "center",
          label: "To",
          field: "DateTo",
          sortable: true,
        },
        {
          name: "NumberofHours",
          align: "center",
          label: "Number of Hours",
          field: "NoHours",
          sortable: true,
        },
        {
          name: "Position",
          align: "center",
          label: "Position",
          field: "OrgPosition",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    resetFields() {
      this.secondDialog = false;
      this.Name = "";
      this.InclusiveDateFrom = "";
      this.InclusiveDateTo = "";
      this.NumberofHours = "";
      this.Position = "";
      this.fileimage = "";
      this.fileimagesrc = "";
    },
    async addVoluntary() {
      const valid = await this.$refs.voluntary.validate();
      if (this.fileimage) {
        this.smalltitle = "Error!";
        this.smallmessage =
          "You need to upload a suppporting document in image format.";
        this.small = true;
      }
      if (valid) {
        let Form = new FormData();
        console.log("ControlNo_VoluntaryWork=", this.ControlNo);
        Form.append("ControlNo", this.ControlNo);
        Form.append("Orgname", this.name);
        Form.append("Datefrom", this.InclusiveDateFrom);
        Form.append("Dateto", this.InclusiveDateTo);
        Form.append("NoHours", this.NumberofHours);
        Form.append("OrgPosition", this.Position);

        Form.append("file", this.fileimage);
        const userstore = useUserInfoStore();
        userstore.saveVoluntary(Form).then((res) => {
          console.log("res=", res);
          if (res == 1) {
            this.secondDialog = false;
            this.smalltitle = "Requested!";
            this.smallmessage =
              "The request for update has been sent to the HR.";
            this.small = true;
            this.resetFields();
          } else if (res == 2) {
            this.secondDialog = false;
            this.smalltitle = "Duplicate Entry!";
            this.smallmessage =
              "The request for update has already been sent to the HR, Please check the Request history for more information.";
            this.small = true;
             this.resetFields();
          } else {
            this.secondDialog = false;
            this.smalltitle = "Error!";
            this.smallmessage =
              "Please contact the SPM Team on local number 508";
            this.small = true;
             this.resetFields();
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0275d8;
}
.bold-header {
  font-weight: bold;
}
</style>
