import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    components: {
      default: () => import("../views/Dashboard/DashboardView.vue"),
      SideBarDashboard: () => import("../views/Dashboard/DashboardSideBar.vue"),
      NavBarDashboard: () => import("../views/Dashboard/DashboardNavBar.vue"),
    },
    // beforeEnter: (_to, _from) => {
    // },
    children: [
      {
        path: "",
        name: "dashboardBody",
        component: () =>
          import("../views/Dashboard/MainPage/DashboardMain.vue"),
      },
      {
        path: "all-roles",
        name: "dashboardRoles",
        component: () => import("../views/Dashboard/Roles/AllRoles.vue"),
      },
      {
        path: "create-roll",
        name: "dashboardCreateRoll",
        component: () => import("../views/Dashboard/Roles/CreateRoll.vue"),
      },
      {
        path: "create-user",
        name: "dashboardCreateUser",
        component: () => import("../views/Dashboard/Users/CreateUser.vue"),
      },
    ],
  },
  {
    path: "",
    name: "website",
    components: {
      default: () => import("../views/Website/WebsiteView.vue"),
      NavBarWebsite: () => import("../views/Website/WebsiteNavbar.vue"),
      FooterWebsite: () => import("../views/Website/WebsiteFooter.vue"),
    },
    children: [
      {
        path: "",
        name: "websiteBody",
        components: {
          default: () =>
            import("../views/Website/MainPage/WebsiteMainPage.vue"),
          BookingSection: () =>
            import("../views/Website/WebsiteBookingSection.vue"),
        },
      },
      {
        path: "about",
        name: "about",
        components: {
          default: () => import("../views/Website/About/WebsiteAbout.vue"),
          BookingSection: () =>
            import("../views/Website/WebsiteBookingSection.vue"),
        },
      },
      {
        path: "booking",
        name: "booking",
        component: () => import("../views/Website/Booking/WebsiteBooking.vue"),
      },
      {
        path: "FAQ",
        name: "faq",
        component: () =>
          import("../views/Website/HelpCenter/WebsiteHelpCenter.vue"),
      },
      {
        path: "contact-us",
        name: "contact",
        component: () => import("../views/Website/Contact/WebsiteContact.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Auth/LogIn.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
