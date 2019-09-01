<template lang="html">
  <div id="mini-details">
    <div id="details">
      <h3>{{breed.temperament}}</h3>
      <BreedDetailGraph :chartData="chartData" :chartOptions="chartOptions" />
    </div>
    <img :src="breedImageLink" :alt="breed.name">
  </div>

</template>

<script>
import BreedDetailGraph from '@/components/BreedDetailGraph.vue';

export default {
  name:'mini-details',
  props:['breed'],
  data(){
    return{
      breedImageAPI:"",
      breedImageLink:"",
      chartData:[],
      chartOptions:{}
    }
  },
  mounted(){
    this.breedImageAPI = 'https://api.thecatapi.com/v1/images/search?breed_ids='+this.breed.id;

    fetch(this.breedImageAPI)
    .then(res => res.json())
    .then(data => this.breedImageLink = data[0].url);

    this.chartData = [
      ['Characterist', 'Level'],
      ['Affection', this.breed.affection_level],
      ['Child-Friendly', this.breed.child_friendly],
      ['Dog-Friendly', this.breed.dog_friendly],
      ['Stranger-Friendly', this.breed.stranger_friendly],
      ['Energy Level', this.breed.energy_level],
      ['Intelligence', this.breed.intelligence],
      ['Health Issues', this.breed.health_issues],
      ['Shedding', this.breed.shedding_level],
      ['Social Needs', this.breed.social_needs,],
      ['Vocalisation',  this.breed.vocalisation]
    ];
    this.chartOptions = {
      title: 'Characteristics of '+ this.breed.name,
      height: 500,
      backgroundColor: '#82acb3',
      colors: ['white'],
      hAxis:{viewWindow:{max:5}}
    }
  },
  components: {
    BreedDetailGraph
  }
}
</script>

<style lang="css" scoped>
#mini-details{
  margin-left:2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#details{
  display:flex;
  flex:1;
  align-self:flex-start;
  flex-direction: column;
  padding-right: 2em;
}
img{
  align-self: center;
  width:50%;
  height: 50%;
}
</style>
