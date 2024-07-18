<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-bold">RELATED QUESTION</div>

      <div>
        <q-card-section>
          34. Are you related by consanguinity or affinity to the appointing or
          recommending authority, or to the chief of bureau or office or to the
          person who has immediate supervision over you in the Office, Bureau or
          Department where you will be apppointed,
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg">a. within the third degree?</label>
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
          </div>
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg"
              >b. within the fourth degree (for Local Government Unit - Career
              Employees)?</label
            >
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
          </div>
          <!-- <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            />
          </div> -->
        </q-card-section>
        <q-card-section>
          35. a. Have you ever been found guilty of any administrative offense?

          <q-radio val="YES" label="Yes" inline />
          <q-radio val="NO" label="No" inline />
          <!-- <q-input
            filled
            label="If Yes, give details"
            class="q-pa-sm"
            dense
            type=""
          /> -->

          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg"
              >b. Have you been criminally charged before any court?</label
            >
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
            <!-- <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            /> -->
          </div>
        </q-card-section>
        <q-card-section>
          36. Have you ever been convicted of any crime or violation of any law,
          decree, ordinance or regulation by any court or tribunal?
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
            <!-- <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            /> -->
          </div>
        </q-card-section>
        <q-card-section>
          37. Have you ever been separated from the service in any of the
          following modes: resignation, retirement, dropped from the rolls,
          dismissal, termination, end of term, finished contract or phased out
          (abolition) in the public or private sector?
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
            <!-- <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            /> -->
          </div>
        </q-card-section>
        <q-card-section>
          38. a. Have you ever been a candidate in a national or local election
          held within the last year (except Barangay election)?
          <q-radio val="YES" label="Yes" inline />
          <q-radio val="NO" label="No" inline />
          <!-- <q-input
            filled
            label="If Yes, give details"
            class="q-pa-sm"
            dense
            type=""
          /> -->
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg"
              >b. Have you resigned from the government service during the three
              (3)-month period before the last election to promote/actively
              campaign for a national or local candidate?</label
            >
            <q-radio val="1" label="Yes" inline />
            <q-radio val="0" label="No" inline />
            <!-- <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            /> -->
          </div>
        </q-card-section>
        <q-card-section>
          39. Have you acquired the status of an immigrant or permanent resident
          of another country?
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <q-radio val="1" label="Yes" inline />
            <q-radio val="0" label="No" inline />
            <!-- <q-input
              filled
              label="If Yes, give details"
              class="q-pa-sm"
              dense
              type=""
            /> -->
          </div>
        </q-card-section>
        <q-card-section>
          40. Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna
          Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act
          of 2000 (RA 8972), please answer the following items:
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg"
              >a. Are you a member of any indigenous group?</label
            >
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
            <!-- <q-select
              filled
              use-input
              dense
              input-debounce="0"
              label="Indigenous People"
              :options="stringIndigenous"
              behavior="menu"
            /> -->
          </div>
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg"
              >b. Are you a person with disability?</label
            >
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
            <div>
              <label for="Address" class="q-mb-md q-ml-lg q-mt-md"
                >Types of Disabilities:
              </label>
              <div class="q-pa-md">
                <div class="q-gutter-sm">
                  <q-checkbox label="Psychosocial Disability" />
                  <q-checkbox label="Disability Caused by Chronic Illness" />
                  <q-checkbox label="Learning Disability" />
                  <q-checkbox label="Mental Disability" />
                  <q-checkbox keep-color label="Visual Disability" />
                  <q-checkbox keep-color label="Orthopedic Disability" />
                  <q-checkbox keep-color label="Communication Disability" />
                </div>
              </div>
            </div>
          </div>
          <div class="q-gutter-sm q-mr-md col-md-6 col-xs-12">
            <label for="sex" class="q-ml-lg">c. Are you a solo parent?</label>
            <q-radio val="YES" label="Yes" inline />
            <q-radio val="NO" label="No" inline />
          </div>
          <div class="row justify-center">
            <div class="col-md-12 col-xs-12 q-ma-md">
              <q-btn color="green" class="full-width" label="Save Changes" />
            </div>
          </div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      EditProfile: false,
      other: true,
      stringIndigenous: [
        "IGOROT",
        "MANGYAN",
        "IBALOI",
        "TAGBANWA",
        "MANDAYA",
        "IFUGAO PEOPLE",
        "BATAK PEOPLE",
        "MORO PEOPLE",
        "TAUSUG PEOPLE",
        "KALINGA",
        "VISAYANS",
        "SAMA-BAJAU",
        "MAMANWA",
        "PALAWAN PEOPLE",
        "TBOLI PEOPLE",
        "ILOCANO PEOPLE",
        "LUMAD",
        "NEGRITO",
        "BLAAN PEOPLE",
        "BUKIDNON",
        "AETA PEOPLE",
        "TAGABAWA",
        "BICOLANO PEOPLE",
        "BONTOC PEOPLE",
        "MANSAKA",
      ],
    };
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.other = false;
    },
  },
  components: {},
};
</script>
