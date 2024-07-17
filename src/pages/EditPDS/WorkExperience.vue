<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">
        LIST OF EXPERIENCES
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
      <q-card class="" style="width: 500px">
        <q-toolbar style="background-color: #0275d8; color: white">
          <q-toolbar-title>ADD WORK DETAILS</q-toolbar-title>
          <q-btn icon="close" flat round dense @click="resetFields" />
        </q-toolbar>
        <q-separator />
        <q-card-section>
          <q-form ref="experience" lazy-rules>
            <div class="row">
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
                  v-model="PositionTitle"
                  label="Position Title"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Department"
                  label="Department"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="MonthlySalary"
                  label="Monthly Salary"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  filled
                  v-model="SalaryGrade"
                  label="Salary Grade"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="StatusofAppointment"
                  label="Status of Appointment"
                  dense
                  class="q-pa-sm text-uppercase"
                />
              </div>
              <div class="col-12 col-md-6 col-sm-6">
                <div class="q-gutter-sm q-mt-sm q-ml-sm q-mb-sm">
                  <label for="">Government Service</label>
                  <br />
                  <q-radio
                    v-model="GovtService"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="yes"
                    dense
                    label="Yes"
                  />
                  <q-radio
                    v-model="GovtService"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="no"
                    dense
                    label="No"
                  />
                </div>
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
            label="Add update"
            color="primary"
            size="md"
            v-close-popup
            @click="addWorkexperience()"
          />
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
      inputRules: [(v) => !!v || "Field is required"],
      small: false,
      smalltitle: "",
      smallmessage: "",
      InclusiveDateFrom: "",
      InclusiveDateTo: "",
      PositionTitle: "",
      Department: "",
      MonthlySalary: "",
      SalaryGrade: "",
      StatusofAppointment: "",
      GovtService: "no",
      personal: [],
      secondDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      columns: [
        {
          name: "InclusiveDateFrom",
          required: true,
          label: "From",
          align: "center",
          field: "wfrom",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "InclusiveDateTo",
          align: "center",
          label: "To",
          field: "wto",
          sortable: true,
        },
        {
          name: "PositionTitle",
          align: "left",
          label: "Position Title",
          field: "wposition",
          sortable: true,
        },
        {
          name: "Department",
          align: "center",
          label: "Department",
          field: "wcompany",
          sortable: true,
        },
        {
          name: "MonthlySalary",
          align: "left",
          label: "Monthly Salary",
          field: "wsalary",
          format: (val) => {
            const numVal = Number(val);
            if (!isNaN(numVal)) {
              return numVal.toLocaleString("en-US", {
                style: "currency",
                currency: "PHP",
              });
            }
            return val;
          },
          sortable: true,
        },
        {
          name: "SalaryGrade",
          align: "center",
          label: "Salary Grade",
          field: "wgrade",
          sortable: true,
        },
        {
          name: "StatusofAppointment",
          align: "left",
          label: "Status of Appointment",
          field: "status",
          sortable: true,
        },
        {
          name: "GovtService",
          align: "center",
          label: "Gov't Service",
          field: "wgov",
          sortable: true,
        },
      ],
      rows: [
        {
          InclusiveDateFrom: "2",
          InclusiveDateTo: "s",
          PositionTitle: "s",
          Department: "s",
          MonthlySalary: "s",
          SalaryGrade: "s",
          StatusofAppointment: "s",
          GovtService: "s",
        },
      ],
    };
  },
  methods: {
    resetFields() {
      this.secondDialog = false;
     this.InclusiveDateFrom = '';
      this.InclusiveDateTo = '';
      this.PositionTitle = '';
      this.Department = '';
      this.MonthlySalary = '';
      this.SalaryGrade = '';
      this.StatusofAppointment = '';
      this.GovtService = '';
      this.fileimage = '';
      this.fileimagesrc = '';
    },
    resetall() {
      this.personal = [];
    },
    async addWorkexperience() {
      const valid = await this.$refs.experience.validate();
      if (!this.fileimage) {
        this.smalltitle = "Error!";
        this.smallmessage =
          "You need to upload a suppporting document in image format.";
        this.small = true;
      }
      if (valid) {
        console.log("ControlNo_workexpe=", this.ControlNo);
        let Form = new FormData();

        Form.append("ControlNo", this.ControlNo);
        Form.append("wfrom", this.InclusiveDateFrom);
        Form.append("wto", this.InclusiveDateTo);
        Form.append("wposition", this.PositionTitle);
        Form.append("wcompany", this.Department);
        Form.append("wsalary", this.MonthlySalary);
        Form.append("status", this.StatusofAppointment);
        Form.append(
          "wgrade",
          isNaN(this.SalaryGrade) ? this.SalaryGrade : "N/A"
        );
        Form.append("wgov", this.GovtService);

        Form.append("file", this.fileimage);
        const userstore = useUserInfoStore();
        userstore.saveWorkExperience(Form).then((res) => {
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
