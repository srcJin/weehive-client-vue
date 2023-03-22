<template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Current Beehive</h4>
      <form>
        <div class="form-group">
          <label for="title">Name</label>
          <input type="text" class="form-control" id="title"
            v-model="currentTutorial.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentTutorial.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Inspected:</strong></label>
          {{ currentTutorial.published ? "Inspected" : "Not Yet" }}
        </div>
      </form>
  
      <button class="btn btn-primary me-3"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
      >
        UnInspect
      </button>
      <button v-else class="btn btn-primary me-3"
        @click="updatePublished(true)"
      >
        Inspect
      </button>
  
      <button class="btn btn-primary me-3"
        @click="deleteTutorial"
      >
        Delete
      </button>
  
      <button type="submit" class="btn btn-primary me-3 badge-success"
        @click="updateTutorial"
      >
        Update
      </button>
      <button type="submit" class="btn btn-primary me-3 badge-success"
        @click="goBack"
      >
        Back
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Tutorial...</p>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  
  export default {
    name: "tutorial",
    data() {
      return {
        currentTutorial: null,
        message: ''
      };
    },
    methods: {
      getTutorial(id) {
        DataService.get(id)
          .then(response => {
            this.currentTutorial = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        console.log("updatePublished status=", status)
        console.log("updatePublished this.currentTutorial=", this.currentTutorial)
        var data = {
          userId: this.currentTutorial.userId,
          title: this.currentTutorial.title,
          description: this.currentTutorial.description,
          published: status
        };
  
        DataService.update(this.currentTutorial.userId, data)
          .then(response => {
            this.currentTutorial.published = status;
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateTutorial() {
        console.log("this.currentTutorial=",this.currentTutorial)
        DataService.update(this.currentTutorial.userId, this.currentTutorial) //@note use this line to define which id to use
          .then(response => {
            console.log(response.data);
            this.message = 'The information was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteTutorial() {
        DataService.delete(this.currentTutorial.userId)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "tutorials" });
          })
          .catch(e => {
            console.log(e);
          });
      },

      goBack() {
        this.$router.go(-1);

      }
    },
    mounted() {
      this.message = '';
      console.log('mounted() this.$route.params=', this.$route.params)
      this.getTutorial(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>