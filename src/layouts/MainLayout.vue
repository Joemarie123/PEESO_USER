<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="toolbar bg-white text-grey-10">
      <q-toolbar>
        <!-- Left side: Logo and Drawer button -->
        <q-btn flat round dense class="bg-green-3" @click="toggleLeftDrawer">
          <q-avatar size="40px">
            <img src="../assets/images/logo.png" alt="Logo" />
          </q-avatar>
        </q-btn>

        <!-- Search input -->
        <q-input
          filled
          dense
          class="searchIn q-ml-md"
          placeholder="Search PEESO"
          rounded
          color="green"
          style="width: 15%"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-space></q-space>

        <!-- Middle section: Navigation buttons or Dropdown -->
        <div    style="
                display: flex;
                justify-content: center;
                align-items: center;
              " v-if="$q.screen.gt.xs">
          <q-tabs v-model="tab" class="text-green-9">
            <q-tab
              name="mails"
              icon="work_outline"
              @click="$router.push({ path: '/' })"
            />
            <q-tab
              name="alarms"
              icon="school"
              @click="$router.push({ path: '/ScholarshipPosting' })"
            />
            <q-tab
              name="movies"
              icon="movie"
              @click="$router.push({ path: '/TrainingPosting' })"
            />
          </q-tabs>
        </div>

        <!-- <div class="q-pa-md q-gutter-md" v-if="$q.screen.gt.xs">
          <q-btn
            flat
            round
            dense
            icon="work_outline"
            @click="$router.push({ path: '/' })"
          />
          <q-btn
            flat
            round
            dense
            icon="school"
            @click="$router.push({ path: '/ScholarshipPosting' })"
          />
          <q-btn
            flat
            round
            dense
            icon="co_present"
            @click="$router.push({ path: '/TrainingPosting' })"
          />
        </div> -->

        <div v-else>
          <q-btn dense round flat icon="menu" @click="toggleMiddle" />
          <q-menu
            v-model="dropdownOpen"
            anchor="top right"
            self="top left"
            no-padding
          >
            <q-list>
              <q-item clickable @click="$router.push({ path: '/' })">
                <q-item-section avatar>
                  <q-icon name="work_outline" />
                </q-item-section>
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item
                clickable
                @click="$router.push({ path: '/ScholarshipPosting' })"
              >
                <q-item-section avatar>
                  <q-icon name="school" />
                </q-item-section>
                <q-item-section>Scholarship Posting</q-item-section>
              </q-item>
              <q-item
                clickable
                @click="$router.push({ path: '/TrainingPosting' })"
              >
                <q-item-section avatar>
                  <q-icon name="co_present" />
                </q-item-section>
                <q-item-section>Training Posting</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <q-space v-if="$q.screen.gt.xs"></q-space>

        <!-- Right side: Profile and Notifications -->
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn
            dense
            round
            flat
            icon="notifications"

            class="transparent-btn bg-green-9 text-white"
            @click="$router.push({ path: '/Appointment' })"
          />

          <q-btn
            flat
            round
            dense
            style="position: relative"
            class="transparent-btn  bg-green-9 text-white"
            icon="person"
          >
            <!-- <q-avatar rounded size="25px">
              <img
                src="https://cdn.quasar.dev/img/avatar3.jpg"
                alt="User Avatar"
              />
            </q-avatar> -->
            <q-badge class="badge bg-green-1">
              <q-icon name="arrow_drop_down" color="black" />
            </q-badge>
            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Go</strong></div>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ path: '/Profile' })"
                >
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ path: '/PDS' })"
                >
                  <q-item-section>Personal Data Sheet</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list class="q-gutter-sm">
        <q-item
          clickable
          v-ripple
          class="q-mt-lg"
          @click="$router.push({ path: '/UserProfile' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium">
            <b>Name Ni. Go </b>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/JobApplications' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img src="../assets/images/jobApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Job Applications
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/ScholarshipApplications' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img src="../assets/images/scholarApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Scholarship Applications
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/TrainingApplications' })"
        >
          <q-item-section avatar>
            <q-avatar rounded size="40px">
              <img src="../assets/images/seminarApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Training and Seminar Applications
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/Appointment' })"
        >
          <q-item-section avatar>
            <q-avatar rounded size="40px">
              <img src="../assets/images/appointment2.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Appointments
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator inset class="q-mt-sm"></q-separator>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      tab: "mails",
    };
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const dropdownOpen = ref(false);
    const tab = "";

    return {
      leftDrawerOpen,
      dropdownOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleMiddle() {
        this.dropdownOpen = !this.dropdownOpen;
      },
    };
  },
});
</script>

<style scoped>
.toolbar {
  background: linear-gradient(
    40deg,
    #279f27,
    #5fc331
  ); /* Gradient from green to white */
  color: white;
}
.searchIn .q-field__native {
  border-radius: 50px;
  height: 40px;
  padding-left: 45px;
}

.searchIn .q-field__control {
  border-radius: 50px;
  overflow: hidden;
}

.searchIn .q-field__control-container {
  border-radius: 50px;
}

.transparent-btn {
  background-color: rgba(229, 231, 235, 0.7);
  border: none;
  padding: 8px;
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s;
}

.transparent-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.badge {
  position: absolute;
  bottom: -5px;
  right: -3px;
  background-color: rgba(229, 231, 235, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 10px;
  color: black;
}
</style>
