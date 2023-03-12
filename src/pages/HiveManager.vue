<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <div class="col-md-4">
          <user-card>
          </user-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AddHive from './HiveManager/AddHive.vue'
  import EditHive from './HiveManager/EditHive.vue'
  import HiveList from './HiveManager/HiveList.vue'
  import HiveCard from './HiveManager/HiveCard.vue'

  export default {
    components: {
      AddHive,
      EditHive,
      HiveList,
      HiveCard
    }
  }

</script>
<style>

</style>
