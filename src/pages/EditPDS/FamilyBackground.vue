<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <p class="text-bold">SPOUSE'S INFORMATION</p>
      <div class="row">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Spouse's Surname"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Spouse's Firstname"
            class="q-pa-sm text-uppercase"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Spouse's Middlename"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <!-- <q-input filled label="Name Extension" dense class="q-pa-sm" /> -->
          <q-select
            filled
            class="q-pa-sm"
            use-input
            dense
            input-debounce="0"
            label="Name Extension"
            :options="extension"
            style="min-width: 70%; max-width: 98%"
            behavior="menu"
          >
          </q-select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Occupation"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Employers / Business Name"
            class="q-pa-sm text-uppercase"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Business Address"
            class="q-pa-sm text-uppercase"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Telephone Number"
            class="q-pa-sm"
            dense
            type="number"
          />
        </div>
      </div>
    </q-card>
    <!-- Parents Information -->
    <q-card class="q-pa-md q-ma-md"
      ><p class="q-mb-lg text-bold">PARENT'S INFORMATION</p>
      <div class="row" style="">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Surname"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Firstname"
            class="q-pa-sm text-uppercase"
            dense
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Middlename"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <!-- <q-input filled label="Name Extension" dense class="q-pa-sm" /> -->
          <q-select
            filled
            use-input
            dense
            class="q-pa-sm"
            input-debounce="0"
            label="Name Extension"
            :options="extension"
            style="min-width: 70%; max-width: 98%"
            behavior="menu"
          >
          </q-select>
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Mother's Maiden Surname"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Mother's Firstname"
            class="q-pa-sm text-uppercase"
            dense
          />
        </div>
        <div class="col-md-12 col-xs-12">
          <q-input
            filled
            label="Mother's Maiden Middlename"
            dense
            class="q-pa-sm text-uppercase"
          />
        </div>
      </div>
    </q-card>
    <!-- Childrens Information -->
    <q-card class="q-pa-md q-ma-md"
      ><p class="text-bold">CHILDREN'S INFORMATION</p>
      <div class="q-pa-sm">
        <div style="margin-bottom: 10px; margin-top: -20px">
          CHILDREN NAMES
          <q-btn
            label="Add"
            @click="secondDialog = true"
            dense
            class="q-mb-sm q-ml-sm"
            style="background-color: green; color: white"
          ></q-btn>
        </div>

        <q-table
          class="my-sticky-header-table text-uppercase"
          flat
          bordered
          title=""
          dense
          :rows="children"
          :columns="columns"
          row-key="id"
        ></q-table>
        <q-dialog
          v-model="secondDialog"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card class="" style="width: 500px">
            <q-toolbar style="background-color: #0275d8; color: white">
              <q-toolbar-title>ADD CHILDREN</q-toolbar-title>
              <q-btn icon="close" flat round dense v-close-popup />
            </q-toolbar>
            <q-separator />
            <q-card-section>
              <div class="row">
                <div class="col-12">
                  <q-input
                    filled
                    label="Name of Children"
                    dense
                    class="q-pa-sm q-mb-sm"
                  />
                </div>
                <div class="col-12">
                  <q-input
                    filled
                    label="Date of Birth"
                    dense
                    class="q-pa-sm q-mb-sm"
                    type="date"
                  />
                </div>
              </div>
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
      </div>
    </q-card>
  </div>
  <div class="q-pa-sm q-ma-sm">
    <q-btn
      color="green"
      class="full-width"
      label="Save Changes"
      @click="onSave"
    />
  </div>
</template>
<script scoped>
export default {
  props: {
    onSave: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      secondDialog: false,
      columns: [
        {
          name: "lastname",
          required: true,
          label: "Name of Children",
          align: "left",
          field: "ChildName",

          sortable: true,
        },
        {
          name: "firstname",
          align: "center",
          label: "Date of Birth",
          field: "BirthDate",
          sortable: true,
        },
      ],
      children: [
        {
          lastName: "Honey Curay",
          firstName: "11-28-99",
        },
      ],
    };
  },
};
</script>
