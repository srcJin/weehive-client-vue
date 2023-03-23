<template>
  <div>
    <card>
      <h4 slot="header" class="title">Register New Hive</h4>
      <div v-if="!submitted">
        <form>
          <div class="row">
            <div class="col-md-4">
              <base-input
                type="text"
                label="Hivename"
                placeholder="hiveName"
                v-model="hive.hiveName"
              >
              </base-input>
            </div>
            <div class="col-md-4">
              <base-input
                type="queenName"
                label="queenName"
                placeholder="queenName"
                v-model="hive.queenName"
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
                v-model="hive.inspection"
              >
              </base-input>
            </div>
            <div class="col-md-4">
              <base-input
                type="text"
                label="location"
                placeholder="location"
                v-model="hive.location"
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
                  v-model="hive.comment"
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
        <h4>New Hive Registered!</h4>
        <button class="btn btn-success" @click="newForm">New</button>
      </div>
    </card>
  </div>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import DataService from "../../services/DataService";

export default {
  name: "addHive",
  components: {
    Card,
  },
  data() {
    return {
      hive: {
        hiveName: "myHive",
        queenName: "myQueen",
        inspection: "1",
        location:"Singapore",
        comment: 'This is the comment for this beehive',
      },
      submitted: false
    };
  },
  methods: {
    alertForm() {
      alert("Your data: " + JSON.stringify(this.hive));
    },
    submitForm() {
      var data = {
        hiveName: this.hive.hiveName,
        queenName: this.hive.queenName,
        inspection: this.hive.inspection,
        location:this.hive.location,
        comment: this.hive.comment,
      };

      DataService.createHive(data)
        .then((response) => {
          this.hive.id = response.data.id;
          console.log('AddHive,DataService.create(data) response.data = ',response.data);
          this.submitted = true;
          alert("Successfully Submitted data: " + JSON.stringify(this.hive));
        })
        .catch((e) => {
          alert("Error Submitting data: " + e + JSON.stringify(this.hive) );
          console.log("addHive.vue submitForm() error:  ",e);
        });
    },

    newForm() {
      this.submitted = false;
      this.hive = {};
    },
  },
};
</script>
<style></style>
