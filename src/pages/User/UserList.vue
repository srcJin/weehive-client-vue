<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="userName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchByUserName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>User List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.userName }}
        </li>
      </ul>
      <button class="m-1 btn btn-md btn-primary" @click="toAddUserPage">
        New User
      </button>
      <button class="m-1 btn btn-md btn-primary" @click="editActiveUser">
        Edit Selected
      </button>
      <button class="m-1 btn btn-md btn-danger" @click="removeAllUsers">
        Remove All
      </button>

    </div>
    <div class="col-md-6">
      <div v-if="currentUser">
        <!-- @todo user list display -->

        <h4>Current User Info</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentUser.userName }}
        </div>
        <div>
          <label><strong>adminType:</strong></label> {{ currentUser.adminType }}
        </div>
        <div>
          <label><strong>aboutMe:</strong></label> {{ currentUser.aboutMe}}
        </div>

        <a class="badge badge-warning"
          :href="'/user/' + currentUser.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a name...</p>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      userName:"",
      aboutMe: ""
    };
  },
  methods: {
    retrieveUsers() {
      DataService.getAllUser()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    toAddUserPage() {
      this.$router.push('/addUser');
    },

    setActiveUser(user, index) {
      console.log("setActiveUser user=",user,"index=",index)
      this.currentUser = user;
      this.currentIndex = index;
      // @note added with TA
      console.log("this.currentUser.userId=",this.currentUser.userId)
    },

    editActiveUser(){
      let id = this.currentUser.userId
      this.$router.push('user/' + id)
    },

    removeAllUsers() {
      DataService.deleteAllUser()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchByUserName() {
      DataService.findByUserName(this.userName)
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>