<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">
        LIST SPECIAL SKILLS AND HOBBIES
        <q-btn
          label="Add"
          @click="SkillDialog = true"
          class="q-mb-sm q-ml-sm"
          style="background-color: green; color: white"
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
        :columns="columnSkills"
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
    v-model="SkillDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="" style="width: 500px">
      <q-toolbar style="background-color: #0275d8; color: white">
        <q-toolbar-title>ADD SKILLS</q-toolbar-title>
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="resetFieldsSkill"
          v-close-popup
        />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="SkillsandHobbies"
              label="Skills and Hobbies"
              dense
              class="q-pa-sm text-uppercase"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="">
        <q-btn
          flat
          label="Cancel"
          color="warning"
          @click="resetFieldsSkill"
          size="md"
        />
        <q-btn
          label="Add Update"
          color="primary"
          size="md"
          v-close-popup
          @click="saveskill()"
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
      columnSkills: [
        {
          name: "SkillsandHobbies",
          required: true,
          label: "Skills and Hobbies",
          align: "left",
          field: "Skills",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
    };
  },
  methods: {},
};
</script>
