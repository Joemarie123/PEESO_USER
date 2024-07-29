<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">
        LIST OF MEMBERSHIP IN ASSOCIATION
        <q-btn
          label="Add"
          @click="MembershipDialog = true"
          class="q-mb-sm q-ml-sm"
         style="background-color: #06372C; color: white;"
        ></q-btn>
      </div>
      <q-table
        class="my-sticky-header-table"
        flat
        bordered
        wrap-cells=""
        title=""
        dense
        :rows="skills"
        :columns="columnMembership"
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
    v-model="MembershipDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="" style="width: 500px">
      <q-toolbar style="background-color: #06372C; color: white;">
        <q-toolbar-title>ADD MEMBERSHIP</q-toolbar-title>
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="resetFieldsMembership"
          v-close-popup
        />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <q-input
              filled
              v-model="Membership"
              label="MEMBERSHIP IN ASSOCIATION/ORGANIZATION"
              dense
              class="q-pa-sm q-mb-sm"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancel"
          color="warning"
          @click="resetFieldsMembership"
          size="md"
        />
        <q-btn
          label="Add Update"
         style="background-color: #06372C; color: white;"
          size="md"
          @click="saveorganization()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    activeButton: String,
  },
  data() {
    return {
      small: false,
      smalltitle: "",
      smallmessage: "",
      SkillsandHobbies: "",
      NonAcademic: "",
      Membership: "",
      ControlNo: "",
      inputRules: [(v) => !!v || "Field is required"],
      skills: [],
      academic: [],
      organization: [],
      SkillDialog: false,
      NonAcademicDialog: false,
      MembershipDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      controlno: "",

      columnMembership: [
        {
          name: "Membership",
          required: true,
          label: "Membership in Organization",
          align: "left",
          field: "Organization",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
    };
  },
  methods: {},
};
</script>
