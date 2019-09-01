<template lang="html">
  <GChart type="BarChart" :data="favouriteBreedsData" :options="chartOptions" />
</template>

<script>
import {GChart} from 'vue-google-charts';

export default {
  name: "compare-breeds-graph",
  props: ['favouriteBreedsData'],
  data(){
    return{
      chartOptions: {
        title: 'Characteristics of Favourite Breeds',
        height: 500,
        backgroundColor: '#82acb3',
        hAxis:{viewWindow:{min:0, max:5}}
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
