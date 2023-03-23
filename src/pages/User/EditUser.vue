<template>
  <div v-if="currentUser">
    <card>
      <h4 slot="header" class="title">Edit User</h4>
    <form>
        <div class="row">
          <div class="col-md-5">
            <base-input
              type="text"
              label="Username"
              v-model="currentUser.userName"
            >
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input
              type="text"
              label="Password"
              v-model="currentUser.password"
            >
            </base-input>
          </div>
          <div class="col-md-4">
            <base-input
              type="email"
              label="Email"
              v-model="currentUser.email"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <base-input
              type="text"
              label="adminType"
              v-model="currentUser.adminType"
            >
            </base-input>
          </div>
          <div class="col-md-6">
            <base-input
              type="text"
              label="icon"
              v-model="currentUser.icon"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea
                rows="5"
                class="form-control border-input"
                v-model="currentUser.aboutMe"
              >
              </textarea>
            </div>
          </div>
        </div>

        </form>
    <div class = "mt-4">
    <button
      type="submit"
      class="btn btn-primary me-3 badge-success"
      @click="updateUser"
    >
      Update
    </button>
    <button
      type="submit"
      class="btn btn-primary me-3 badge-success"
      @click="goBack"
    >
      Back
    </button>
    <button class="btn btn-danger me-3" @click="deleteUser">Delete</button>

    <p class="mt-4">{{ message }}</p>
  </div>
  </card>

  </div>

  <div v-else>
    <br />
    <p>Please click on a user...</p>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EditUser",
  data() {
    return {
      currentUser: null,
      message: "",
      userName:"",
    };
  },

  methods: {
    getUser(id) {
      DataService.getUser(id)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateUser() {
      console.log("this.currentUser=", this.currentUser);
      DataService.updateUser(this.currentUser.userId, this.currentUser) //@note use this line to define which id to use
        .then((response) => {
          console.log(response.data);
          this.message = "The information was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser() {
      DataService.deleteUser(this.currentUser.userId)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "Users" });
        })
        .catch((e) => {
          console.log(e);
        });
    },

    goBack() {
      this.$router.go(-1);
    },
  },

  mounted() {
    this.message = "";
    console.log("mounted() this.$route.params=", this.$route.params);
    this.getUser(this.$route.params.id);
  },
};
</script>

<style>
</style>
