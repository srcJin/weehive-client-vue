<template>
  <card class="card-image">
    <img slot="image" src="../../images/Header.jpg" alt="Header Image"/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="../../images/defaultHiveIcon.png" alt="User Icon"/>

        <h4 class="title">User<br />
          <small>Admin</small>
        </h4>
      </a>
    </div>
    <p class="description text-center"> Hi! I am a new beekeeper! </p>
  </card>
</template>

<script>
import Card from "../../components/Cards/Card.vue";
export default {
  name: "HiveInfo",
  components: {
    Card,
  },
};
</script>
<style></style>
