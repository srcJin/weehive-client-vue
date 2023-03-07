import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "src/pages/Dashboard.vue";
import User from "src/pages/User.vue";
import HiveManager from "src/pages/HiveManager.vue";
import HiveWorld from "src/pages/HiveWorld.vue";
import HiveAtlas from "src/pages/HiveAtlas.vue";
import Messages from "src/pages/Messages.vue";

const routes = [
  // {
  //   path: "/",
  //   component: DashboardLayout,
  // },
  {
    path: '/',
    component: DashboardLayout,
    children: [

  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "user",
    name: "User",
    component: User,
  },
  {
    path: "hivemanager",
    name: "HiveManager",
    component: HiveManager,
  },
  {
    path: "hiveworld",
    name: "HiveWorld",
    component: HiveWorld,
  },
  {
    path: "hiveatlas",
    name: "HiveAtlas",
    component: HiveAtlas,
  },
  {
    path: "messages",
    name: "Messages",
    component: Messages,
  },
],
  },
  { path: "*", component: NotFound },
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
