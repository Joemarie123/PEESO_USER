<template>
  <div>
    <q-card  class="q-pa-md q-ma-md">
    <div class="text-bold">
     LIST OF TRAININGS
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
      wrap-cells=""
      title=""
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
          <q-form ref="learning" lazy-rules>
            <div class="row">
              <div class="col-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Title"
                  label="Title of Learning and Development"
                  dense
                  autogrow=""
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
                  type="number"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Type"
                  label="Type of LD"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Conducted"
                  label="Conducted / Sponsored by"
                  dense
                  class="q-pa-sm "
                />
              </div>
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
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
            @click="addlearninganddevelopment()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-card>
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {

      small: false,
      smalltitle: "",
      smallmessage: "",
      inputRules: [(v) => !!v || "Field is required"],
      Title: "",
      InclusiveDateFrom: "",
      InclusiveDateTo: "",
      NumberofHours: "",
      Type: "",
      Conducted: "",

      ControlNo: "",
      personal: [],
      secondDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      columns: [
        {
          name: "Title",
          required: true,
          label: "Title",
          align: "left",
          field: "Training",
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
          field: "NumHours",
          sortable: true,
        },
        {
          name: "Type",
          align: "center",
          label: "Type",
          field: "type",
          sortable: true,
        },
        {
          name: "Conducted",
          align: "center",
          label: "Conducted / Sponsored by",
          field: "Conductor",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    resetFields() {
      this.secondDialog = false;
      this.Title = "";
      this.InclusiveDateFrom = "";
      this.InclusiveDateTo = "";
      this.NumberofHours = "";
      this.Type = "";
      this.Conducted = "";
      this.fileimage = "";
      this.fileimagesrc = "";
    },
    async addlearninganddevelopment() {
      const valid = await this.$refs.learning.validate();
      if (!this.fileimage) {
        this.smalltitle = "Error!";
        this.smallmessage =
          "You need to upload a suppporting document in image format.";
        this.small = true;
      }
      if (valid) {
        let Form = new FormData();
        console.log("ControlNo_Learning=", this.ControlNo);
        Form.append("ControlNo", this.ControlNo);
        Form.append("Training", this.Title);
        Form.append("Datefrom", this.InclusiveDateFrom);
        Form.append("Dateto", this.InclusiveDateTo);
        Form.append("NumHours", this.NumberofHours);
        Form.append("Type", this.Type);
        Form.append("Conductor", this.Conducted);

        Form.append("file", this.fileimage);
        const userstore = useUserInfoStore();
        userstore.saveTraining(Form).then((res) => {
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
