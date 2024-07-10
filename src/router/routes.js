
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
      { path: "", component: () => import("layouts/DashboardView.vue") },
      {
        path: "/ScholarshipPosting",
        component: () => import("layouts/ScholarshipPosting.vue"),
      },
      {
        path: "/TrainingPosting",
        component: () => import("layouts/TrainingPosting.vue"),
      },
      {
        path: "/JobApplications",
        component: () => import("pages/JobApplications/JobApp.vue"),
      },
      {
        path: "/Userprofile",
        component: () => import("pages/NavBar/UserProfile.vue"),
      },
      {
        path: "/Profile",
        component: () => import("pages/NavBar/UserProfileEdit.vue"),
      },
      {
        path: "/ScholarshipApplications",
        component: () => import("pages/NavBar/ScholarApp.vue"),
      },
      {
        path: "/TrainingApplications",
        component: () => import("pages/NavBar/TrainingApp.vue"),
      },
      {
        path: "/JobDetails",
        component: () => import("pages/JobDetails.vue"),
      },
      {
        path: "/apply",
        component: () => import("pages/JobApply.vue"),
      },

      // {
      //   path: "/ViewAllJobs",
      //   component: () => import("pages/ViewAllJobs.vue"),
      // },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes
