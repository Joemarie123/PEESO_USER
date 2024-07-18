<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">OTHER INFORMATION <q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn></p>
    <q-separator class="q-ma-md" />
    <div v-show="other">
      <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
        <p style="font-weight: 600" class="q-mb-lg">RELATED QUESTION</p>
        <div class="row" >
          <div class="col-12 col-sm-12 col-xs-12 col-md-6">
            <div class="row">
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Are you related by consanguinity or affinity to the
                  appointing or recommending authority, or to the chief of
                  bureau or office or to the person who has immediate
                  supervision over you in the Office, Bureau or Department where
                  you will be apppointed,
                </p>
              </div>
              <div class="col-12 col-lg-12 col-sm-12">
                <p class="q-ml-lg" style="margin-bottom: -5px">
                  a. within the third degree? <u>TEST</u>
                  <br />
                  b. within the fourth degree (for Local Government Unit -
                  Career Employees)? <u>TEST</u>
                </p>
              </div>

              <div class="col-12 col-lg-11 col-sm-12">
                <q-separator class="q-ma-sm"></q-separator>
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Have you ever been found guilty of any administrative
                  offense? <u>TEST</u>
                  <br />
                  • Have you been criminally charged before any court?
                  <u>TEST</u>
                </p>
                <q-separator class=""></q-separator>
              </div>
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Have you ever been convicted of any crime or violation of
                  any law, decree, ordinance or regulation by any court or
                  tribunal? <u>TEST</u>
                </p>
                <q-separator class=""></q-separator>
              </div>
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Have you ever been separated from the service in any of the
                  following modes: resignation, retirement, dropped from the
                  rolls, dismissal, termination, end of term, finished contract
                  or phased out (abolition) in the public or private sector?
                  <u>TEST</u>
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-12 col-xs-12 col-md-6">
            <div class="row">
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Have you ever been a candidate in a national or local
                  election held within the last year (except Barangay election)?
                  <u>TEST</u>

                  <br />
                  • b. Have you resigned from the government service during the
                  three (3)-month period before the last election to
                  promote/actively campaign for a national or local candidate?
                  <u>TEST </u>
                </p>
                <q-separator class="q-ma-sm"></q-separator>
              </div>
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Have you acquired the status of an immigrant or permanent
                  resident of another country?
                  <u>TEST</u>
                </p>
                <q-separator class="q-ma-sm"></q-separator>
              </div>
              <div class="col-12 col-lg-11 col-sm-12">
                <p class="q-ma-sm" style="margin-top: 0px; text-align: justify">
                  • Pursuant to: (a) Indigenous People's Act (RA 8371); (b)
                  Magna Carta for Disabled Persons (RA 7277); and (c) Solo
                  Parents Welfare Act of 2000 (RA 8972), please answer the
                  following items:
                </p>
              </div>
              <div class="col-12 col-lg-12 col-sm-12">
                <p class="q-ml-lg">
                  a. Are you a member of any indigenous group?
                  <u>TEST</u>
                  <br />
                  b. Are you a person with disability?
                  <u>TEST</u>
                  <br />
                  c. Are you a solo parent? <u>TEST</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
   <div v-show="EditProfile">
      <OtherInformation />
    </div>
</template>
<script>
import OtherInformation from '../EditPDS/OtherInformation.vue'

export default {
  data() {
    return {
EditProfile: false,
other: true,
    };
  },
   methods: {
    EditBtn() {
      this.EditProfile = true;
      this.other = false;
    },
  },
  components: {
    OtherInformation,
  },
}
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
</style>
