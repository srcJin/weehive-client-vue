<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="hiveName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchByHiveName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Hive List</h4>
      
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(hive, index) in hives"
          :key="index"
          @click="setActiveHive(hive, index)"
        >
          {{ hive.hiveName }}
        </li>

      </ul>
      <button class="m-1 btn btn-md btn-primary" @click="toAddHivePage">
        New Hive
      </button>
      <button class="m-1 btn btn-md btn-primary" @click="editActiveHive">
        Edit Selected
      </button>
      <button class="m-1 btn btn-md btn-danger" @click="removeAllHives">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <!-- @todo hive list display -->
      <div v-if="currentHive">
        <h4>Current Beehive Info</h4>
        <div>
          <label><strong>hiveName:</strong></label> {{ currentHive.hiveName }}
        </div>
        <div>
          <label><strong>location:</strong></label> {{ currentHive.location }}
        </div>
        <div>
          <label><strong>queenName:</strong></label> {{ currentHive.queenName }}
        </div>

        <a class="badge badge-warning"
          :href="'/hive/' + currentHive.id"
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
import HiveDataService from "../../services/DataService";

export default {
  name: "hives-list",
  data() {
    return {
      hives: [],
      currentHive: null,
      currentIndex: -1,
      hiveName:"",
    };
  },
  methods: {
    retrieveHives() {
      HiveDataService.getAllHive()
        .then(response => {
          this.hives = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveHives();
      this.currentHive = null;
      this.currentIndex = -1;
    },

    toAddHivePage() {
      this.$router.push('/addHive');
    },

    setActiveHive(hive, index) {
      console.log("setActiveHive hive=",hive,"index=",index)
      this.currentHive = hive;
      this.currentIndex = index;
      // @note added with TA
      console.log("this.currentHive.hiveId=",this.currentHive.hiveId)

    },

    editActiveHive(){
      let id = this.currentHive.hiveId
      this.$router.push('hive/' + id)
    },

    removeAllHives() {
      HiveDataService.deleteAllHive()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchByHiveName() {
      HiveDataService.findByHiveName(this.hiveName)
        .then(response => {
          this.hives = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveHives();
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