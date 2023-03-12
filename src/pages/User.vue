<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <AddUser>
          </AddUser>
        </div>
        <div class="col-md-4">
          <UserCard>
          </UserCard>
        </div>
        <div class="col-md-8">
          <EditUser>
          </EditUser>
        </div>
        <div class="col-md-4">
          <UserList>
          </UserList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AddUser from './User/AddUser.vue'
  import UserCard from './User/UserCard.vue'
  import EditUser from './User/EditUser.vue'
  import UserList from './User/UserList.vue'

  export default {
    components: {
      AddUser,
      UserCard,
      EditUser,
      UserList
    }
  }

</script>
<style>

</style>
