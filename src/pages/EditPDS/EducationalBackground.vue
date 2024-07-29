<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class=" text-bold">
        ATTENDED SCHOOLS
        <q-btn
          label="Add"
          @click="secondDialog = true"
          class="q-mb-sm q-ml-sm"
         style="background-color: #06372C; color: white;"
        ></q-btn>


      </div>
      <q-table
        class="my-sticky-header-table"
        :grid="$q.screen.lt.md"
        flat
        bordered
        title=""
        wrap-cells=""
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:header="props">
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
        </template>
      </q-table>
      <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 800px">
        <q-toolbar style="background-color: #06372C; color: white;">
          <q-toolbar-title>ADD DETAILS</q-toolbar-title>
          <q-btn icon="close" flat round dense @click="resetFields"  v-close-popup/>
        </q-toolbar>
        <q-separator />
        <q-card-section>
          <q-form ref="educational" lazy-rules>
            <div class="row">
              <div class="col-md-5 col-sm-5 col-xs-12">
                <q-select
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="level"
                  label="Educational Level"
                  dense
                  class="q-pa-sm q-mb-sm"
                  :options="leveloptions"
                />
              </div>
              <div class="col-md-7 col-sm-7 col-xs-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="name"
                  label="Name of School"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <q-select
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="degree"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  label="Basic Education/Degree/Course"
                  dense
                  class="q-pa-sm q-mb-sm"
                  :options="degreeoption"
                  :option-label="(degree) => degree.Descriptions"
                  @filter="filterFn"
                />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="PeriodofAttendanceFrom"
                  label="Period of Attendance From"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
                />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="PeriodofAttendanceTo"
                  label="Period of Attendance To"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
                />
              </div>
              <div class="row q-mr-xl">
                <label for="Graduated" class="q-ml-lg q-mb-xs"
                  >Graduated:</label
                >
                <q-radio v-model="Graduated" val="YES" label="Yes" inline />
                <q-radio v-model="Graduated" val="NO" label="No" inline />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12" v-if="Graduated == 'NO'">
                <q-input
                  filled
                  v-model="Unit"
                  label="Highest Level / Units Earned"
                  dense
                  class="q-pa-sm q-mb-xs"
                />
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <q-input
                  filled
                  v-model="Scholarship"
                  label="Scholarship / Academic Honors Received"
                  dense
                  class="q-pa-sm q-mb-xs"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="">
          <q-btn
            flat
            label="Cancel"
            color="warning"
            @click="resetFields"
            size="md"
          />
          <q-btn
            label="Add Update"
           style="background-color: #06372C; color: white;"
            size="md"
            @click="addEducation()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-card>
  </div>
  <!-- <div class="q-pa-sm q-ma-sm">
    <q-btn color="green" class="full-width" label="Save Changes" />
  </div> -->
</template>
<script scoped>
export default {
  data() {
    return {
      secondDialog: false,
      EditProfile: false,
      eb: true,
      columns: [
        {
          name: "LEVEL",
          required: true,
          label: "LEVEL ",
          align: "center",
          field: "Education",

          sortable: true,
        },
        {
          name: "NameofSchool",
          align: "left",
          label: "Name of School",
          field: "School",
          sortable: true,
        },
        {
          name: "Degree",
          align: "left",
          label: "Basic Education / Degree / Course",
          field: "Degree",
          sortable: true,
        },
        {
          name: "PeriodofAttendanceFrom",
          align: "center",
          label: "From",
          field: "From",
          sortable: true,
        },
        {
          name: "PeriodofAttendanceTo",
          align: "center",
          label: "To",
          field: "To",
          sortable: true,
        },
        {
          name: "Unit",
          align: "left",
          label: "Highest Level / Units Earned",
          field: "NumUnits",
          sortable: true,
        },
        {
          name: "YearGraduated",
          align: "center",
          label: "Year Graduated",
          field: "yeargraduated",
          sortable: true,
        },
        {
          name: "Scholarship",
          align: "left",
          label: "Scholarship / Academic Honors Received",
          field: "Honors",
          sortable: true,
        },
      ],
      rows: [
        {
          Level: "2",
          NameofSchool: "s",
          Degree: "s",
          PeriodofAttendanceFrom: "s",
          PeriodofAttendanceTo: "s",
          Unit: "s",
          YearGraduated: "s",
          Scholarship: "s",
        },
      ],
    };
  },
};
</script>
