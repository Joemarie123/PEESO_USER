<template>
  <div class="profile-card">
    <div class="row profile-container">
      <div class="profile-avatar">
        <q-avatar class="avatar">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>
      <div class="col-12" style="text-align: center">
        <p style="font-weight: 500; margin-bottom: -2px">Name Ni. Go</p>
        <p>Web Development, JavaScript, CSS, HTML</p>
      </div>
    </div>
  </div>

  <div class="q-pa-md profile-card">
    <!-- <p class="title">PERSONAL DATA SHEET</p> -->
    <!-- <q-separator class="q-ma-md" /> -->
    <div class="row">
      <div class="col-md-2 col-sm-12 col-xs-12">
        <q-select
          dense=""
          v-if="$q.screen.lt.md"
          filled
          v-model="activeButton"
          :options="[
            {
              label: 'PERSONAL INFORMATION',
              value: 'PERSONAL INFORMATION',
            },
            { label: 'FAMILY BACKGROUND', value: 'FAMILY BACKGROUND' },
            {
              label: 'EDUCATIONAL BACKGROUND',
              value: 'EDUCATIONAL BACKGROUND',
            },
            {
              label: 'CIVIL SERVICE ELIGIBILITY',
              value: 'CIVIL SERVICE ELIGIBILITY',
            },
            { label: 'WORK EXPERIENCE', value: 'WORK EXPERIENCE' },
            { label: 'VOLUNTARY WORK', value: 'VOLUNTARY WORK' },
            { label: 'L&D INTERVENTIONS', value: 'L&D INTERVENTIONS' },
            {
              label: 'SPECIAL SKILLS & HOBBIES',
              value: 'SPECIAL SKILLS & HOBBIES',
            },
            { label: 'NON-ACADEMIC', value: 'NON-ACADEMIC' },
            {
              label: 'MEMBERSHIP ASSOCIATION',
              value: 'MEMBERSHIP ASSOCIATION',
            },
            { label: 'OTHER INFORMATIONS', value: 'OTHER INFORMATIONS' },
            { label: 'REFERENCES', value: 'REFERENCES' },
          ]"
          style="width: 100%; margin-bottom: 20px"
          @update:model-value="handleSelectionChange"
        />
        <template v-else>
          <q-btn
            flat
            rounded
            align="left"
            v-ripple
            class=""
            :class="{
              'active-button': activeButton === 'PERSONAL INFORMATION',
            }"
            style="width: 95%; margin-bottom: -10px"
            @click="personalinf()"
            >PERSONAL INFORMATION
          </q-btn>

          <q-separator class="q-mt-md" inset></q-separator>

          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{
              'active-button': activeButton === 'FAMILY BACKGROUND',
            }"
            style="width: 95%; margin-bottom: -10px"
            @click="familyback()"
            >FAMILY BACKGROUND
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{
              'active-button': activeButton === 'EDUCATIONAL BACKGROUND',
            }"
            style="width: 95%; margin-bottom: -10px"
            @click="educationalback()"
            >EDUCATIONAL BACKGROUND
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{
              'active-button': activeButton === 'CIVIL SERVICE ELIGIBILITY',
            }"
            style="width: 95%; margin-bottom: -10px"
            @click="civilserv()"
            >CIVIL SERVICE ELIGIBILITY
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{ 'active-button': activeButton === 'WORK EXPERIENCE' }"
            style="width: 95%; margin-bottom: -10px"
            @click="workexp()"
            >WORK EXPERIENCE
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{ 'active-button': activeButton === 'VOLUNTARY WORK' }"
            style="width: 95%; margin-bottom: -10px"
            @click="volunwork()"
            >VOLUNTARY WORK
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
          <q-btn
            flat
            rounded
            align="left"
            class="q-mt-xs"
            :class="{
              'active-button': activeButton === 'L&D INTERVENTIONS',
            }"
            style="width: 95%; margin-bottom: -10px"
            @click="learnint()"
            >L&D INTERVENTIONS
          </q-btn>
          <q-separator class="q-mt-md" inset></q-separator>
           <q-btn
                flat
                rounded
                align="left"
                class="q-mt-xs"
                :class="{
                  'active-button': activeButton === 'SPECIAL SKILLS & HOBBIES',
                }"
                style="width: 95%; margin-bottom: -10px"
                @click="specialskills()"
                >SPECIAL SKILLS & HOBBIES
              </q-btn>
              <q-separator class="q-mt-md" inset></q-separator>
              <q-btn
                flat
                rounded
                align="left"
                class="q-mt-xs"
                :class="{ 'active-button': activeButton === 'NON-ACADEMIC' }"
                style="width: 95%; margin-bottom: -10px"
                @click="nonacademic()"
                >NON-ACADEMIC
              </q-btn>
              <q-separator class="q-mt-md" inset></q-separator>
              <q-btn
                flat
                rounded
                align="left"
                class="q-mt-xs"
                :class="{
                  'active-button': activeButton === 'MEMBERSHIP ASSOCIATION',
                }"
                style="width: 95%; margin-bottom: -10px"
                @click="memberass()"
                >MEMBERSHIP ASSOCIATION
              </q-btn>
              <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
                flat
                rounded
                align="left"
                class="q-mt-xs"
                :class="{
                  'active-button': activeButton === 'OTHER INFORMATIONS',
                }"
                style="width: 95%; margin-bottom: -10px"
                @click="otherinf()"
                >OTHER INFORMATION
              </q-btn>
              <q-separator class="q-mt-md" inset></q-separator>
              <q-btn
                flat
                rounded
                align="left"
                class="q-mt-xs"
                :class="{ 'active-button': activeButton === 'REFERENCES' }"
                style="width: 95%; margin-bottom: -10px"
                @click="reference()"
                >REFERENCES
              </q-btn>
        </template>
      </div>

      <div class="col-md-10 col-sm-12">
        <q-card
          flat
          bordered
          class="  "
          style="height: auto; margin-top: -0px; width: 100%"
        >
          <PersonalInf v-if="activeButton === 'PERSONAL INFORMATION'" />
          <FamilyBack v-if="activeButton === 'FAMILY BACKGROUND'" />
          <EducationalBack v-if="activeButton === 'EDUCATIONAL BACKGROUND'" />
          <WorkExp v-if="activeButton === 'WORK EXPERIENCE'" />
          <CivilServ v-if="activeButton === 'CIVIL SERVICE ELIGIBILITY'" />
          <VolunWork v-if="activeButton === 'VOLUNTARY WORK'" />
          <LearnInt v-if="activeButton === 'L&D INTERVENTIONS'" />
            <SpecialSkills
                v-if="activeButton === 'SPECIAL SKILLS & HOBBIES'"
              />
              <NonAcademic v-if="activeButton === 'NON-ACADEMIC'" />
              <MemberAss v-if="activeButton === 'MEMBERSHIP ASSOCIATION'" />
          <OtherInf v-if="activeButton === 'OTHER INFORMATIONS'" />
              <ReferencePage v-if="activeButton === 'REFERENCES'" />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { ref } from "vue";
import PersonalInf from "../PersonalDateSheet/PersonalInf.vue";
import FamilyBack from "../PersonalDateSheet/FamilyBack.vue";
import EducationalBack from "../PersonalDateSheet/EducationalBack.vue";
import CivilServ from "../PersonalDateSheet/CivilServ.vue";
import WorkExp from "../PersonalDateSheet/WorkExp.vue";
import VolunWork from "../PersonalDateSheet/VolunWork.vue";
import LearnInt from "../PersonalDateSheet/LearnInt.vue";
 import SpecialSkills from "../PersonalDateSheet/SpecialSkills.vue";
 import NonAcademic from "../PersonalDateSheet/NonAcademic.vue";
 import MemberAss from "../PersonalDateSheet/MemberAss.vue";
 import OtherInf from "../PersonalDateSheet/OtherInf.vue";
 import ReferencePage from "../PersonalDateSheet/ReferencePage.vue";

export default {
  data() {
    return {
      activeButton: "PERSONAL INFORMATION",

      dataTable: [
        { id: "", name: "", age: "" },
        { id: "", name: "", age: "" },
        // Add more data as needed
      ],
      // Define your q-table columns
      columns: [
        { name: "id", label: "ID", align: "left", field: "id", sortable: true },
        {
          name: "name",
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "age",
          label: "Age",
          align: "left",
          field: "age",
          sortable: true,
        },
      ],

      step: ref(1),
      model: ref(null),
      cit: ref(null),
      options: ["Single", "Married", "Widowed", "Separated", "Other/s"],
      citizenship: ["Filipino", "Dual Citizenship"],
      extension: ["Jr.", "Sr.", "III"],
      ReferenceDialog: false,
    };
  },

  methods: {
    handleSelectionChange(selectedOption) {
      console.log("Selected Option:", selectedOption.value);
      this.activeButton = selectedOption.value;
    },
    personalinf() {
      this.activeButton = "PERSONAL INFORMATION";
    },
    familyback() {
      this.activeButton = "FAMILY BACKGROUND";
    },
    educationalback() {
      this.activeButton = "EDUCATIONAL BACKGROUND";
    },
    civilserv() {
      this.activeButton = "CIVIL SERVICE ELIGIBILITY";
    },
    workexp() {
      this.activeButton = "WORK EXPERIENCE";
    },
    volunwork() {
      this.activeButton = "VOLUNTARY WORK";
    },
    learnint() {
      this.activeButton = "L&D INTERVENTIONS";
    },
    specialskills() {
      this.activeButton = "SPECIAL SKILLS & HOBBIES";
    },
    nonacademic() {
      this.activeButton = "NON-ACADEMIC";
    },
    memberass() {
      this.activeButton = "MEMBERSHIP ASSOCIATION";
    },
    otherinf() {
      this.activeButton = "OTHER INFORMATIONS";
    },
    reference() {
      this.activeButton = "REFERENCES";
    },
    printPage() {
      // Open the print dialog when the button is clicked
      // window.print();
      this.$router.push("/printpds");
    },
  },
  components: {
    PersonalInf,
    FamilyBack,
    EducationalBack,
    CivilServ,
    WorkExp,
    VolunWork,
    LearnInt,
    SpecialSkills,
    NonAcademic,
    MemberAss,
    OtherInf,
    ReferencePage,
  },
};
</script>

<style scoped>
.profile-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #ffffff 50%);
  padding: 20px;
  height: 100%; /* Ensure the container fills vertical space */
}

.profile-avatar {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 50%;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #ffffff 50%);
    padding: 20px;
  }

  .profile-avatar {
    margin-right: 0;
    margin-bottom: 20px;
    background: white; /* Blue background for the avatar */
  }
}
</style>
