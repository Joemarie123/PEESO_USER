<template>
  <q-layout class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <!-- <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        /> -->
        <q-btn
          round
          dense
          flat
          :ripple="false"
          :icon="logo"
          size="19px"
          color="white"
          class="q-mr-sm"
          no-caps
        />

        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          shrink
          class="row items-center no-wrap"
        >
          <img
            src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
          />
          <span class="q-ml-sm">Photos</span>
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-primary"
          v-model="search"
          placeholder="Search"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>

        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          dense
          no-wrap
          color="primary"
          icon="add"
          no-caps
          label="Create"
          class="q-ml-sm q-px-md"
        >
          <q-menu anchor="top end" self="top end">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section
                  class="text-uppercase text-grey-7"
                  style="font-size: 0.7rem"
                  >Create New</q-item-section
                >
              </q-item>
              <q-item
                v-for="menu in createMenu"
                :key="menu.text"
                clickable
                v-close-popup
                aria-hidden="true"
              >
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>
                <q-item-section>{{ menu.text }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          v-if="$q.screen.gt.xs"
          flat
          dense
          no-wrap
          color="primary"
          icon="cloud_upload"
          no-caps
          label="Upload"
          class="q-ml-sm q-px-md"
        />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";

const stringOptions = [
  "quasarframework/quasar",
  "quasarframework/quasar-awesome",
];

export default {
  name: "MyLayout",

  setup() {
    const text = ref("");
    const options = ref(null);
    const filteredOptions = ref([]);
    const search = ref(null); // $refs.search

    function filter(val, update) {
      if (options.value === null) {
        // load data
        setTimeout(() => {
          options.value = stringOptions;
          search.value.filter("");
        }, 2000);
        update();
        return;
      }

      if (val === "") {
        update(() => {
          filteredOptions.value = options.value.map((op) => ({ label: op }));
        });
        return;
      }

      update(() => {
        filteredOptions.value = [
          {
            label: val,
            type: "In this repository",
          },
          {
            label: val,
            type: "All GitHub",
          },
          ...options.value
            .filter((op) => op.toLowerCase().includes(val.toLowerCase()))
            .map((op) => ({ label: op })),
        ];
      });
    }

    return {
      fabGithub,

      text,
      options,
      filteredOptions,
      search,

      filter,
    };
  },
};
</script>

<style>
.GL__select-GL__menu-link .default-type {
    visibility: hidden;
}

.GL__select-GL__menu-link:hover {
    background: #0366d6;
    color: white;
}

.GL__select-GL__menu-link:hover .q-item__section--side {
    color: white;
}

.GL__select-GL__menu-link:hover .default-type {
    visibility: visible;
}

.GL__toolbar-link a {
    color: white;
    text-decoration: none;
}

.GL__toolbar-link a:hover {
    opacity: 0.7;
}

.GL__menu-link:hover {
    background: #0366d6;
    color: white;
}

.GL__menu-link-signed-in:hover,
.GL__menu-link-status:hover {
    background: white !important;
}

.GL__menu-link-status {
    color: #78909c; /* Assuming $blue-grey-6 is a shade of blue-grey */
}

.GL__menu-link-status:hover {
    color: #0288d1; /* Assuming $light-blue-9 is a shade of light blue */
}

.GL__toolbar-select.q-field--focused {
    width: 450px !important;
}

.GL__toolbar-select.q-field--focused .q-field__append {
    display: none;
}
</style>
