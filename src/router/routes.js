import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Settings from "@/pages/Settings.vue";
import Gallery from "@/pages/Gallery.vue";
import Video from "@/pages/Video.vue";
import Weather from "@/pages/Weather.vue";
const routes = [{
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [{
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "users",
        name: "users",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "gallery",
        name: "gallery",
        component: Gallery
      },
      {
        path: "video",
        name: "video",
        component: Video
      },
      {
        path: "weather",
        name: "weather",
        component: Weather
      },
      {
        path: "settings",
        name: "settings",
        component: Settings
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
