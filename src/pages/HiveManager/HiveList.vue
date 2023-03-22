<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
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
          {{ user.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentUser">
        <h4>Current Beehive Info</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentUser.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentUser.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentUser.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/users/' + currentUser.id"
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
import UserDataService from "../../services/DataService";

export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveUser() {
      UserDataService.getAll()
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

    // @todo add a new function to do both setActiveUser and push to new page
    trigger(user, index) {
    },


    setActiveUser(user, index) {
      console.log("setActiveUser user=",user,"index=",index)
      this.currentUser = user;
      this.currentIndex = index;
      // @note added with TA
      console.log("this.currentUser.userId=",this.currentUser.userId)
      let id = this.currentUser.userId
      this.$router.push('users/' + id)
    },

    removeAllUsers() {
      UserDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      UserDataService.findByTitle(this.title)
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