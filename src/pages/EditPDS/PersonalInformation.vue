<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <q-form>
        <div class="row">
          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
            <q-input
              ref="lastname"
              lazy-rules
              filled
              label="Lastname"
              dense
              class="q-pa-sm"
              style="text-transform: uppercase"
              :rules="inputRules"
            />
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
            <q-input
              ref="firstname"
              lazy-rules
              filled
              label="Firstname"
              class="q-pa-sm"
              dense
              style="text-transform: uppercase"
              :rules="inputRules"
            />
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
            <q-input
              filled
              label="Middlename"
              dense
              class="q-pa-sm"
              style="text-transform: uppercase"
            />
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
            <!-- <q-input filled label="Name Extension" dense class="q-pa-sm" /> -->
            <q-select
              filled
              v-model="model"
              use-input
              dense
              class="q-pa-sm"
              input-debounce="0"
              label="Name Extension"
              :options="extension"
              behavior="menu"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </q-form>
    </q-card>

    <!-- Additional Information -->
    <q-card class="q-pa-md q-ma-md">
      <div class="row" style="margin-top: -10px">
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            ref="bday"
            lazy-rules
            filled
            label="Date of Birth"
            dense
            class="q-pa-sm q-mb-xs"
            type="date"
            :rules="inputRules"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            filled
            label="Place of Birth"
            class="q-pa-sm q-mb-xs"
            dense
            style="text-transform: uppercase"
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            class="q-pa-sm"
            filled
            dense
            input-debounce="0"
            label="Sex"
            :options="sexOptions"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-12 col-lg-63 col-md-6 col-sm-6">
          <q-select
            class="q-pa-sm"
            ref="civilstatus"
            lazy-rules
            filled
            :rules="inputRules"
            dense
            input-debounce="0"
            label="Civil Status"
            :options="status"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>

        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            class="q-pa-sm"
            ref="gender"
            lazy-rules
            filled
            :rules="inputRules"
            dense
            input-debounce="0"
            label="Gender Preference"
            :options="genderPreference"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>

        <div class="col-6 col-lg-3 col-md-3 col-sm-3">
          <q-input
            :rules="numberValidationRule"
            filled
            label="Height (m)"
            dense
            class="q-pa-sm"
          />
        </div>
        <div class="col-6 col-lg-3 col-md-3 col-sm-3">
          <q-input
            :rules="numberValidationRule"
            filled
            label="Weight (kg)"
            class="q-pa-sm"
            dense
          />
        </div>

        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Blood Type"
            class="q-pa-sm"
            dense
          />
        </div>

        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input filled label="Telephone Number" class="q-pa-sm" dense />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input filled label="Cellphone Number" class="q-pa-sm" dense />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            filled
            label="Email Address"
            class="q-pa-sm"
            type="email"
            dense
          />
        </div>
      </div>

      <q-separator inset></q-separator>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="GSIS ID NO."
            dense
            class="q-pa-sm"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="PAGIBIG ID NO."
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="PHILHEALTH ID NO."
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="SSS NO."
            dense
            class="q-pa-sm"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="TIN NO."
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-input
            :disable="true"
            filled
            label="AGENCY EMPLOYEE NO."
            class="q-pa-sm"
            dense
            type=""
          />
        </div>
      </div>
      <q-separator inset></q-separator>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 col-sm-6">
          <q-select
            class="q-pa-sm q-mt-sm"
            filled
            dense
            input-debounce="0"
            label="Citizenship"
            :options="citizenship"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-sm-6 q-mt-sm q-mb-sm">
          <q-radio val="byBirth" label="by birth" inline />
          <q-radio val="byNaturalization" label="by naturalization" inline />
        </div>
        <div class="col-md-6 col-xs-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Please Indicate Country"
            class="q-pa-sm"
            dense
            type=""
          />
        </div>
      </div>
      <q-separator inset class="q-mb-sm"></q-separator>
      <q-separator inset class="q-mb-sm"></q-separator>
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <label for="Address" class="q-pa-md q-mt-sm"
            >Religious Sector:
          </label>
          <div class="">
            <q-select
              class="q-pa-sm"
              filled
              :rules="inputRules"
              lazy-rules
              dense
              input-debounce="0"
              label="Religious Sector"
              :options="religion"
              @filter="filterFn"
              behavior="menu"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
        <div class="col-md-12 col-xs-12">
          <div>
            <q-input
              filled
              label="Other Religious Affiliations"
              class="q-pa-sm"
              dense
              style="text-transform: uppercase"
            />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      extension: ["JR.", "SR.", "III", "IV"],
      status: ["SINGLE", "MARRIED", "WIDOWED", "SEPARATED", "OTHER/S"],
      citizenship: ["FILIPINO", "DUAL CITIZENSHIP"],
      sexOptions: ["MALE", "FEMALE"],
    };
  },
};
</script>
