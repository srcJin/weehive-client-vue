<template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
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
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button class="badge badge-primary mr-2"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2"
        @click="deleteTutorial"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateTutorial"
      >
        Update
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
            this.message = 'The tutorial was updated successfully!';
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