<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">
        CIVIL SERVICE ELIGIBILITY
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
        </template></q-table
      >
      <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px">
        <q-toolbar style="background-color: #0275d8; color: white">
          <q-toolbar-title>ADD DETAILS</q-toolbar-title>
          <q-btn icon="close" flat round dense @click="resetFields" v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-card-section>
          <q-form ref="service" lazy-rules>
            <div class="row">
              <div class="col-12 col-md-6">
                <q-select
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="name"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  label="Eligibility"
                  dense
                  class="q-pa-sm q-mb-sm"
                  :options="eligibilityoptions"
                  :option-label="(degree) => degree.Descriptions"
                  @filter="filterFn"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="rating"
                  label="Rating"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="dateofexamination"
                  label="Date of Examination"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
                />
              </div>
              <div class="col-12">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="PlaceofExamination"
                  label="Place of Examination"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12">
                <q-input
                  filled
                  :rules="inputRules"
                  v-model="LicenseNumber"
                  label="License Number"
                  dense
                  class="q-pa-sm q-mb-sm"
                />
              </div>
              <div class="col-12">
                <q-input
                  filled
                  v-model="dateofvalidity"
                  label="Date of Validity"
                  dense
                  class="q-pa-sm q-mb-sm"
                  type="date"
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
            color="primary"
            size="md"
            @click="saveservice()"
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
      columns: [
        {
          name: "Eligibility",
          required: true,
          label: "Eligibility",
          align: "center",
          field: "CivilServe",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Rating",
          align: "left",
          label: "Rating (if Applicable)",
          field: "Rates",
          format: (val) => {
            const numVal = Number(val);
            if (!isNaN(numVal)) {
              return `${numVal.toFixed(2)}`;
            }
            return val;
          },
          sortable: true,
        },
        {
          name: "DateofExamination",
          align: "left",
          label: "Date of Examination",
          field: "Dates",
          sortable: true,
        },
        {
          name: "PlaceofExamination",
          align: "left",
          label: "Place of Examination",
          field: "Place",
          sortable: true,
        },
        {
          name: "LicenseNumber",
          align: "left",
          label: "License Number",
          field: "LNumber",
          sortable: true,
        },
        {
          name: "DateofValidity",
          align: "left",
          label: "Date of Validity",
          field: "LDate",
          sortable: true,
        },
      ],
      rows: [
        {
          Eligibility: "2",
          Rating: "s",
          DateofExamination: "s",
          PlaceofExamination: "s",
          LicenseNumber: "s",
          DateofValidity: "s",
        },
      ],
    };
  },
};
</script>
