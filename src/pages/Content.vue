<!-- <template>
  <span>Content</span>
</template>

<script>
export default {
  name: "Content"
};
</script>
 -->

 <template>
  <card class="card-user">
    <img slot="image" src="userBackgroundImage" alt="Header Image"/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="img/faces/defaultUserIcon.jpg" alt="User Icon"/>

        <h4 class="title">User<br />
          <small>Admin</small>
        </h4>
      </a>
    </div>
    <p class="description text-center"> Hi! I am a new beekeeper! </p>
    <!-- <div slot="footer" class="text-center d-flex justify-content-center">
      <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"></i></button>
    </div> -->
  </card>
</template>

<script>
import Card from "../components/Cards/Card.vue";
export default {
  name: "fdfdf",
  components: {
    Card,
  },
};
</script>
<style></style>
