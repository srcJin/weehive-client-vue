import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/404.vue";

// Admin pages
import Dashboard from "src/pages/Dashboard.vue";
import User from "src/pages/User.vue";
import HiveManager from "src/pages/HiveManager.vue";
import HiveWorld from "src/pages/HiveWorld.vue";
import HiveAtlas from "src/pages/HiveAtlas.vue";
import Messages from "src/pages/Messages.vue";

import Tutorial from "src/components/Tutorial"
import AddTutorial from "src/components/AddTutorial"
import TutorialList from "src/components/TutorialList"

import UserList from "src/pages/User/UserList";
import AddUser from "src/pages/User/AddUser";
import UserCard from "src/pages/User/UserCard";
import EditUser from "src/pages/User/EditUser";

import HiveList from "src/pages/HiveManager/HiveList";
import AddHive from "src/pages/HiveManager/AddHive";
import HiveCard from "src/pages/HiveManager/HiveCard";
import EditHive from "src/pages/HiveManager/EditHive";
import FirstPage from "src/pages/FirstPage"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "FirstPage",
        component: FirstPage,
      },
      {
        path: "UserList",
        name: "UserList",
        component: UserList,
      },
      {
        path: "AddUser",
        name: "AddUser",
        component: AddUser,
      },      
      {
        path: "UserCard",
        name: "UserCard",
        component: UserCard,
      },      
      {
        path: "/user/:id",
        name: "EditUser",
        component: EditUser,
      },

      {
        path: "HiveList",
        name: "HiveList",
        component: HiveList,
      },
      {
        path: "AddHive",
        name: "AddHive",
        component: AddHive,
      },      

      {
        path: "HiveCard",
        name: "HiveCard",
        component: HiveCard,
      },      
      {
        path: "/hive/:id",
        name: "EditHive",
        component: EditHive,
      },

      // {
      //   path: "/tutorials",
      //   name: "tutorials",
      //   component: TutorialList,
      // },
      // {
      //   path: "/tutorials/:id",
      //   name: "tutorial-details",
      //   component: Tutorial
      // },

      // {
      //   path: "/add",
      //   name: "add",
      //   component: AddTutorial
      // },

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
