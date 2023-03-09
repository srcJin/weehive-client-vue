<template>
  <div>
    <h1>Edit Recipe</h1>
    <div>
      <label>Title</label>
      <input type="text" v-model="title" class="form-control" />
    </div>
    <div>
      <label>Ingredients</label>
      <input type="text" v-model="ingredients" class="form-control" />
    </div>
    <button class="btn btn-primary mt-3" @click="updateRecipe">Edit</button>
  </div>
</template>

<script>
import axios from "axios";
const BASE_API_URL =
  "http://localhost:8888/";
export default {
  props: ["recipeId"],
  async created() {
    const response = await axios.get(BASE_API_URL + "recipes/" + this.recipeId);
    this.title = response.data.title;
    this.ingredients = response.data.ingredients.join(",");
  },
  data: function () {
    return {
      title: "",
      ingredients: "",
    };
  },
  methods: {
    async updateRecipe() {
      await axios.put(BASE_API_URL + "recipes/" + this.recipeId, {
        title: this.title,
        ingredients: this.ingredients.split(","),
      });
      this.$emit("recipe-edited");
    },
  },
};
</script>