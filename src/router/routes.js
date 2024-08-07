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
        path: "/UserProfile",
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
      },
      {
        path: "/familyback",
        component: () => import("pages/EditPDS/FamilyBackground.vue"),
      },
      {
        path: "/education",
        component: () => import("pages/EditPDS/EducationalBackground.vue"),
      },

      // Appointment

      {
        path: "/Appointment",
        component: () => import("pages/Appointment/AppointmentList.vue"),
      },
      {
        path: "/AppointmentDetails",
        component: () => import("pages/Appointment/AppointmentDetails.vue"),
      },

      {
        path: "/Announce",
        component: () => import("pages/AnnouncementPage.vue")
      },



      {
        path: "/CompanyProfile",
        component: () => import("pages/CompanyProfile.vue")
      }

      //

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
  {
    path: "/dashboard",
    component: () => import("layouts/DashBoard.vue"),
    children: [
      {
        path: "/login",
        component: () => import("layouts/LoginPage.vue"),
      },
      {
        path: "/register",
        component: () => import("layouts/RegistrationPage.vue"),
      },
      {
        path: "/Home",
        component: ()=> import ("pages/Dashboard/HomePage.vue")
      }
    ],
  },
];

export default routes;
