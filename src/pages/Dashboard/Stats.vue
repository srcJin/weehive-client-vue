<template>
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Health Score</p>
              <h4 class="card-title">60</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
</template>

<script>
  import StatsCard from 'src/components/Cards/StatsCard.vue'

export default {
  name: "Stats",
  components: {
    StatsCard
  },
};
</script>
<style></style>
