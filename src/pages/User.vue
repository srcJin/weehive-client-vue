<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <UserCard>
          </UserCard>
        </div>
        <div class="col-md-6">
          <UserList>
          </UserList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserCard from './User/UserCard.vue'
  import UserList from './User/UserList.vue'

  export default {
    components: {
      UserCard,
      UserList
    }
  }

</script>
<style>

</style>
