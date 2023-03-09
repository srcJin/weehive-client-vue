<template>
  <div>
    <h1>Add New Recipe</h1>
    <div>
      <label>Title</label>
      <input type="text" v-model="title" class="form-control" />
    </div>
    <div>
      <label>Ingredients</label>
      <input type="text" v-model="ingredients" class="form-control" />
    </div>
    <button @click="addNew" class="btn btn-primary mt-3">Add New</button>
  </div>
</template>

<script>
import axios from "axios";
const BASE_API_URL =
  "http://localhost:8888/";
export default {
  data: function () {
    return {
      title: "",
      ingredients: "",
    };
  },
  methods: {
    async addNew() {
      const response = await axios.post(BASE_API_URL + "recipes", {
        title: this.title,
        ingredients: this.ingredients.split(","), // split the comma seperated string into an array of strings
      });
      this.$emit("added-new-recipe");
    },
  },
};
</script>