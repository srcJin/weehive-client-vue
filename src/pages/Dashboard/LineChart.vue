<template>
  <div class="container">
    <div class="app">
      <apexcharts width="100%" height="300vh" type="bar" :options="chartOptions" :series="series"></apexcharts>
      <div>
        <button @click="updateChart">Update!</button>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue-apexcharts'
  
  export default {
    name: 'Chart',
    components: {
      apexcharts: VueApexCharts,
    },
    data: function() {
        return {
          chartOptions: {
            chart: {
              id: 'vuechart-example',
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
            fill: {
              colors:['#FDD1b7'],
              },
          },
          series: [{
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 81]
          }]
        }
      },
      methods: {
        updateChart() {
          const max = 90;
          const min = 20;
          const newData = this.series[0].data.map(() => {
            return Math.floor(Math.random() * (max - min + 1)) + min
          })
          // In the same way, update the series option
          this.series = [{
            data: newData
          }]
        }
      }
  }
  </script>
  <style scoped>
    button {
      background: #ffd1b7;
      border: 0;
      font-size: 16px;
      color: '#fff';
      padding: 5px;
      /* margin-left: 28px; */
    }
  </style>
  
  