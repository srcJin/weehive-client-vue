<template>
  <div>
    <card>
      <h4 slot="header" class="title">Register New User</h4>
      <div v-if="!submitted">
        <form>
        <div class="row">
          <div class="col-md-5">
            <base-input
              type="text"
              label="Username"
              placeholder="userName"
              v-model="user.userName"
            >
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input
              type="text"
              label="Password"
              placeholder="Password"
              v-model="user.password"
            >
            </base-input>
          </div>
          <div class="col-md-4">
            <base-input
              type="email"
              label="Email"
              placeholder="Email"
              v-model="user.email"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <base-input
              type="text"
              label="adminType"
              placeholder="adminType"
              v-model="user.adminType"
            >
            </base-input>
          </div>
          <div class="col-md-6">
            <base-input
              type="text"
              label="icon"
              placeholder="icon"
              v-model="user.icon"
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
                placeholder="Here can be your description"
                v-model="user.aboutMe"
              >
              </textarea>
            </div>
          </div>
        </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-info btn-fill float-right"
              @click.prevent="submitForm"
            >
              Submit
            </button>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
      <div v-else>
        <h4>New User Registered!</h4>
        <button class="btn btn-success" @click="newForm">New User</button>
        <button class="btn btn-success" @click="toUserList">User List</button>

      </div>
    </card>
  </div>
</template>

<script>
import Card from "src/components/Cards/Card.vue";
import DataService from "../../services/DataService";

export default {
  name: "addUser",
  components: {
    Card,
  },
  data() {
    return {
      user: {
        userName: "weeHiveUser",
        password: "password",
        email: "hello@hello.com",
        adminType: 1,
        icon: "defaultUserIcon.png",
        aboutMe: `Hi! I am a new beekeeper!`,
      },
      submitted: false,
    };
  },
  methods: {
    alertForm() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    submitForm() {
      var data = {
        userName: this.user.userName,
        password: this.user.password,
        email: this.user.email,
        adminType: this.user.adminType,
        icon: this.user.icon,
        aboutMe: this.user.aboutMe,
      };
      console.log('AddUser,DataService.create(data) data=',data)
      DataService.createUser(data)
        .then((response) => {
          this.user.id = response.data.id;
          this.submitted = true;
          alert("Successfully Submitted data: " + JSON.stringify(this.user));
        })
        .catch((e) => {
          alert("Error Submitting data: " + e + JSON.stringify(this.user) );
          console.log("addUser.vue submitForm() error:  ",e);
        });
    },

    newForm() {
      this.submitted = false;
      this.user = {};
    },

    toUserList() {
      this.$router.push('/userList');
    }
  },
};
</script>
<style></style>
