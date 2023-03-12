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
  import EditProfileForm from './User/AddUser.vue'
  import UserCard from './User/UserCard.vue'
  import EditUser from './User/EditUser.vue'
  import UserList from './User/UserList.vue'

  export default {
    components: {
      EditProfileForm,
      UserCard,
      EditUser,
      UserList
    }
  }

</script>
<style>

</style>
