<template>
  <div>
    <h1>All Recipes</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Ingredients</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in recipes" :key="r._id">
          <td>{{ r._id }}</td>
          <td>{{ r.title }}</td>
          <td>
            <span
              class="badge bg-primary m-1"
              v-for="(ingredient, index) in r.ingredients"
              :key="index"
              >{{ ingredient }}</span
            >
          </td>
          <td>
            <button class="btn btn-primary btn-sm" @click="editRecipe(r._id)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
const BASE_API_URL =
  "http://localhost:8888/";

export default {
  async created() {
    const response = await axios.get(BASE_API_URL + "recipes");
    this.recipes = response.data;
  },
  data: function () {
    return {
      recipes: [],
    };
  },
  methods: {
    editRecipe(recipeId) {
      this.$emit("edit-recipe", recipeId);
    },
  },
};
</script>