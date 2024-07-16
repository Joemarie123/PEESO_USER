const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  // },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/NavBar/DashboardView.vue") },

      // Job
      {
        path: "/JobApplications",
        component: () => import("pages/Job/JobApp.vue"),
      },
      {
        path: "/JobDetails",
        component: () => import("pages/Job/JobDetails.vue"),
      },
      {
        path: "/apply",
        component: () => import("pages/Job/JobApply.vue"),
      },

      // Scholarship
      {
        path: "/ScholarshipPosting",
        component: () => import("pages/Scholarship/ScholarshipPosting.vue"),
      },
      {
        path: "/ScholarshipApplications",
        component: () => import("pages/Scholarship/ScholarApp.vue"),
      },
      {
        path: "/ScholarshipDetails",
        component: () => import("pages/Scholarship/ScholarshipDetails.vue"),
      },

      // Training
      {
        path: "/TrainingPosting",
        component: () => import("pages/Training/TrainingPosting.vue"),
      },
      {
        path: "/TrainingDetails",
        component: () => import("pages/Training/TrainingDetails.vue"),
      },
      {
        path: "/TrainingApplications",
        component: () => import("pages/Training/TrainingApp.vue"),
      },

      // User
      {
        path: "/Userprofile",
        component: () => import("pages/NavBar/UserProfile.vue"),
      },
      {
        path: "/Profile",
        component: () => import("pages/NavBar/UserProfileEdit.vue"),
      },

      {
        path: "/PDS",
        component: () => import("pages/NavBar/PersonalSheet.vue"),
      },



      // PDS

      {
        path: "/personalinfo",
        component: () => import("pages/EditPDS/PersonalInformation.vue"),
      }

      // {
      //   path: "/ViewAllJobs",
      //   component: () => import("pages/ViewAllJobs.vue"),
      // },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
