<template lang="html">
  <div id="chart">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />

  </div>
</template>

<script>
import {GChart} from 'vue-google-charts';

export default {
  name:"breed-detail-graph",
  props:['chartData', 'chartOptions'],
  data(){
    return{


    }
  },
  computed:{
  },
  components:{
    GChart
  }
}
</script>

<style lang="css" scoped>
#chart{
  width:100%;
}
</style>
