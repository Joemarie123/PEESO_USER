<template>
  <div>
    <p class="title q-ma-sm">
      PERSONAL INFORMATION
      <q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="$router.push({ path: '/personalinfo' })"
      ></q-btn>
    </p>

    <q-separator class="q-ma-sm" />
    <div class="row">
      <div class="col-12">
        <q-card class="q-ma-md q-pa-md">
          <p class="" style="font-weight: 600">EMPLOYEE'S NAME</p>
          <div class="row">
            <div class="col-3 col-sm-6 col-xs-12 col-md-3">
              <!-- <p class="name">{{ personals.Firstname }}</p> -->
              <p class="nameLabel">Firstname</p>
            </div>
            <div class="col-3 col-sm-6 col-xs-12 col-md-3">
              <!-- <p class="name">{{ personals.Surname }}</p> -->
              <p class="nameLabel">Lastname</p>
            </div>
            <div class="col-3 col-sm-6 col-xs-12 col-md-3">
              <!-- <p class="name">{{ personals.MIddlename }}</p> -->
              <p class="nameLabel">Middlename</p>
            </div>
            <div class="col-3 col-sm-6 col-xs-12 col-md-3">
              <p class="name">{{ this.model }}</p>
              <p class="nameLabel">Name Extension</p>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div>
      <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
        <p style="font-weight: 600" class="q-mb-lg">ADDITIONAL INFORMATION</p>
        <div class="row">
          <div class="col-12 col-sm-12 col-xs-12 col-md-6">
            <div class="row">
              <div class="col-12 col-lg-12 col-sm-12">
                <q-input
                  bottom-slots
                  v-model="text"
                  label="Label"
                  counter
                  maxlength="12"
                  dense
                >
                  <template v-slot:before>
                    <p style="font-size: 12px">DATE OF BIRTH:</p>
                  </template>
                </q-input>

                <p class="addressTitle">
                  DATE OF BIRTH:
                  <!-- <p class="address">{{ personals.Bday }}</p> -->
                  <q-input bordered dense>dfsdsdsddddhjh</q-input>
                </p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6"></div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">PLACE OF BIRTH:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.BirthPlace }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">SEX:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.Sex }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">CIVIL STATUS:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.CivilStatus }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">GENDER PREFERENCE:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.gender }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">HEIGHT:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.Heights }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">WEIGHT:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.Weights }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">BLOOD TYPE:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.BloodType }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">TELEPHONE NUMBER:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.TelNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">CELLPHONE NUMBER:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.CellphoneNo }}</p> -->
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-12 col-xs-12 col-md-6">
            <div class="row">
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">EMAIL ADDRESS:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.EmailAdd }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">GSIS ID NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.GSISNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">PAGIBIG ID NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.PAGIBIGNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">PHILHEALTH ID NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.PHEALTHNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">SSS NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.SSSNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">TIN NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.TINNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">AGENCY EMPLOYEE NO.:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.ControlNo }}</p> -->
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">CITIZENSHIP:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <p class="address">
                  <!-- {{ personals.cit }} {{ personals.citizenshipStatus }} -->
                </p>
              </div>
              <div class="col-12 col-lg-4 col-sm-6">
                <p class="addressTitle">RELIGIOUS SECTOR:</p>
              </div>
              <div class="col-12 col-lg-8 col-sm-6">
                <!-- <p class="address">{{ personals.Religion }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
      <div class="col">
        <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
          <!-- <p class="info-line" style="margin-top: 0px">ADDRESS</p> -->
          <div class="row">
            <div class="col-12 col-sm-12 col-xs-12 col-md-6">
              <p style="font-weight: 600" class="q-mb-lg">
                RESIDENTIAL ADDRESS
              </p>
              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">REGION:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rregion }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">PROVINCE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rprovince }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">MUNICIPALITY:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rcity }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">BARANGGAY:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rbarangay }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">SUBDIVISION / VILLAGE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rsubdivision }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">STREET PUROK:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rstreet }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">HOUSE/BLOCK/LOT NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rhouse }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">ZIP CODE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Rzip }}</p> -->
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-xs-12 col-md-6">
              <p style="font-weight: 600" class="q-mb-lg">PERMANENT ADDRESS</p>

              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">REGION:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pregion }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">PROVINCE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pprovince }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">MUNICIPALITY:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pcity }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">BARANGGAY:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pbarangay }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">SUBDIVISION / VILLAGE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Psubdivision }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">STREET PUROK:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pstreet }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">HOUSE/BLOCK/LOT NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Phouse }}</p> -->
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">ZIP CODE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <!-- <p class="address">{{ personals.Pzip }}</p> -->
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
// import { useLoginStore } from "src/stores/LoginStore";

export default {
  data() {
    return {
      model: "",
    };
  },
  // created() {
  //   const store = useLoginStore();
  //   this.personal = store.userinfo.map((item) => ({ ...item }));
  //   this.controlno = store.controlno;
  //   if (
  //     this.personal[0].Surname.includes("JR") ||
  //     this.personal[0].Surname.includes("SR") ||
  //     this.personal[0].Surname.includes(" III") ||
  //     this.personal[0].Surname.includes(" IV")
  //   ) {
  //     this.personal[0].Surname.replace(/\s(Jr|Sr|III| IV)$/, "");
  //     const regex = /\s(Jr|Sr|III| IV)$/;
  //     const matches = this.personal[0].Surname.match(regex);
  //     this.model = matches.slice(1);
  //   } else {
  //     this.model = "N/A";
  //   }
  // },
  // setup() {
  //   const store = useLoginStore();
  //   const personals = store.userinfo[0];
  //   return {
  //     store,
  //     personals,
  //   };
  // },
};
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
