<template>
  <div class="wrapper">
    <side-bar>
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <!-- @todo add a responsive empty space -->

      <sidebar-link to="/dashboard">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>HiveCenter</p>
      </sidebar-link>
      <sidebar-link to="/hivemanager">
        <i class="nc-icon nc-notes"></i>
        <p>HiveManager</p>
      </sidebar-link>
      <sidebar-link to="/hiveatlas">
        <i class="nc-icon nc-atom"></i>
        <p>HiveAtlas</p>
      </sidebar-link>

      <!-- test -->
      <!-- <sidebar-link to="/UserList">
        <i class="nc-icon nc-notes"></i>
        <p>UserList</p>
      </sidebar-link>
      <sidebar-link to="/AddUser">
        <i class="nc-icon nc-notes"></i>
        <p>AddUser</p>
      </sidebar-link>
      <sidebar-link to="/UserCard">
        <i class="nc-icon nc-notes"></i>
        <p>UserCard</p>
      </sidebar-link>
      <sidebar-link to="/EditUser">
        <i class="nc-icon nc-notes"></i>
        <p>EditUser</p>
      </sidebar-link>
      <sidebar-link to="/HiveList">
        <i class="nc-icon nc-notes"></i>
        <p>HiveList</p>
      </sidebar-link>
      <sidebar-link to="/AddHive">
        <i class="nc-icon nc-notes"></i>
        <p>AddHive</p>
      </sidebar-link>
      <sidebar-link to="/HiveCard">
        <i class="nc-icon nc-notes"></i>
        <p>HiveCard</p>
      </sidebar-link>
      <sidebar-link to="/EditHive">
        <i class="nc-icon nc-notes"></i>
        <p>EditHive</p>
      </sidebar-link> -->
      
      <!-- <sidebar-link to="/hiveworld">
        <i class="nc-icon nc-paper-2"></i>
        <p>HiveWorld</p>
      </sidebar-link> -->
      <!-- top division line -->
      <hr class="responsive-divider"/>
      <!-- bottom division line -->
      <hr>
      <sidebar-link to="/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User</p>
      </sidebar-link>
      <sidebar-link to="/messages">
        <i class="nc-icon nc-bell-55"></i>
        <p>Messages</p>
      </sidebar-link>
      <!-- <sidebar-link to="/tutorials">
        <i class="nc-icon nc-notes"></i>
        <p>API</p>
      </sidebar-link> -->

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  // import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  // import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      // ContentFooter,
      DashboardContent,
      // MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
