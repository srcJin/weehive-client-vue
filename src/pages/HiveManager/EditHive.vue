<template>
  <div v-if="currentHive">
    <card>
      <h4 slot="header" class="title">Edit Hive</h4>
      <form>
        <div class="row">
          <div class="col-md-4">
            <base-input
              type="text"
              label="Hivename"
              placeholder="hiveName"
              v-model="currentHive.hiveName"
            >
            </base-input>
          </div>
          <div class="col-md-4">
            <base-input
              type="queenName"
              label="queenName"
              placeholder="queenName"
              v-model="currentHive.queenName"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <base-input
              type="text"
              label="inspection"
              placeholder="inspection"
              v-model="currentHive.inspection"
            >
            </base-input>
          </div>
          <div class="col-md-4">
            <base-input
              type="text"
              label="location"
              placeholder="location"
              v-model="currentHive.location"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label>comment</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your comment"
                v-model="currentHive.comment"
              >
              </textarea>
            </div>
          </div>
        </div>
      </form>

      <div class="mt-4">
        <button
          type="submit"
          class="btn btn-primary me-3 badge-success"
          @click="goBack"
        >
          Back
        </button>
        <button
          type="submit"
          class="btn btn-primary me-3 badge-success"
          @click="updateHive"
        >
          Update
        </button>

        <button class="btn btn-danger me-3" @click="deleteHive">Delete</button>

        <p class="mt-4">{{ message }}</p>
      </div>
    </card>
  </div>

  <div v-else>
    <br />
    <p>Please click on a hive...</p>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EditHive",
  data() {
    return {
      currentHive: null,
      message: "",
      hiveName: "",
    };
  },

  methods: {
    getHive(id) {
      DataService.getHive(id)
        .then((response) => {
          this.currentHive = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateHive() {
      console.log("this.currentHive=", this.currentHive);
      DataService.updateHive(this.currentHive.hiveId, this.currentHive) //@note use this line to define which id to use
        .then((response) => {
          console.log(response.data);
          this.message = "The information was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteHive() {
      DataService.deleteHive(this.currentHive.hiveId)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "Hives" });
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
    this.getHive(this.$route.params.id);
  },
};
</script>

<style></style>
