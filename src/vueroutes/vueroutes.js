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
import Test from "src/pages/Recipes.vue";

import Tutorial from "src/components/Tutorial"
import AddTutorial from "src/components/AddTutorial"
import TutorialList from "src/components/TutorialList"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "test",
        name: "Test",
        component: Test,
      },

      {
        path: "/tutorials",
        name: "tutorials",
        component: TutorialList,
      },
      {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component: Tutorial
      },
      {
        path: "/add",
        name: "add",
        component: AddTutorial
      },

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
