<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <p>Applicant Name</p>
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
      <p>Additional Information</p>
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
      <label for="Address" class="q-pa-md q-mt-sm">Religious Sector: </label>
      <div class="row">
        <div class="col-md-6 col-xs-12">
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
        <div class="col-md-6 col-xs-12">
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

    <!-- Address -->
    <q-card class="q-pa-md q-ma-md">
      <label for="Address" class="q-ml-sm">Residential Address </label>
      <div class="row">
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            :rules="inputRules"
            lazy-rules
            filled
            label="Region"
            :options="regionOptions"
            emit-value
            map-options
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="Province"
            :options="provinceOptions"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="City/Municipality"
            :options="cityOptions"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="Barangay"
            :options="brgyOptions"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Subdivision/Village"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Street/Purok"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-md-8 col-xs-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="House/Block/Lot No."
            dense
            class="q-pa-sm"
          />
        </div>
        <div class="col-md-4 col-xs-6">
          <q-input filled label="ZIP CODE" class="q-pa-sm" dense />
        </div>
      </div>

      <label for="Address" class="q-mb-md q-ml-sm q-mt-md"
        >Permanent Address:
      </label>
      <q-checkbox
        @update:model-value="address()"
        v-model="permanentAddress"
        label="Same as Residential Address"
        size="xs"
        true-value="yes"
        false-value="no"
      />
      <div class="row">
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="Region"
            :options="regionOptions"
            :option-label="(region) => region.region_name"
            :option-value="(region) => region.region_name"
            emit-value
            map-options
            @update:model-value="handleRRegionChange(4)"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="Province"
            :options="PprovinceOptions"
            @update:model-value="handleRRegionChange(5)"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="City/Municipality"
            @update:model-value="handleRRegionChange(6)"
            :options="PcityOptions"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-select
            lazy-rules
            :rules="inputRules"
            filled
            label="Baranggay"
            :options="PbrgyOptions"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Subdivision/Village"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="Street"
            class="q-pa-sm"
            dense
          />
        </div>
        <div class="col-md-8 col-xs-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="House/Block/Lot No."
            dense
            class="q-pa-sm"
          />
        </div>
        <div class="col-md-4 col-xs-6">
          <q-input
            style="text-transform: uppercase"
            filled
            label="ZIP CODE"
            class="q-pa-sm"
            dense
          />
        </div>
      </div>
    </q-card>
  </div>
  <div class="q-pa-sm q-ma-sm">
    <q-btn color="green" class="full-width" @click="onSave" label="Save Changes" />
  </div>
</template>
<script>
export default {
  props: {
    onSave: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      extension: ["JR.", "SR.", "III", "IV"],
      status: ["SINGLE", "MARRIED", "WIDOWED", "SEPARATED", "OTHER/S"],
      citizenship: ["FILIPINO", "DUAL CITIZENSHIP"],
      sexOptions: ["MALE", "FEMALE"],
    };
  },
  methods: {
    save() {
      // this.$router.push('/PDS')
    }
  }
};
</script>
