<template>
  <card>
    <h4 slot="header" class="card-title">Register New Hive</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text"
                    label="Username"
                    placeholder="username"
                    v-model="user.username">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Password"
                    placeholder="Password"
                    v-model="user.password">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="user.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="adminType"
                    placeholder="adminType"
                    v-model="user.adminType">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="icon"
                    placeholder="icon"
                    v-model="user.icon">
          </base-input>
        </div>
      </div>
<!-- 
      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="user.address">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </base-input>
        </div>
      </div> -->

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Comment</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Edit User
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          username: 'Jin',
          email: 'hello@hello.com',
          adminType: '1',
          Icon: 'defaultUserIcon.png',
          aboutMe: `Hi! I am a new beekeeper!`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
