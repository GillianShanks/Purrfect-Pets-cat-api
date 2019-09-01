<template lang="html">
  <div id="mini-details">
    <router-link :to="{ name: 'cat-breeds', params: {breed}}">More info</router-link>
    <h3>{{breed.temperament}}</h3>
    <div id="details">
      <div id="graph">
        <BreedDetailGraph :chartData="chartData" :chartOptions="chartOptions" />
      </div>
      <div id="img-points">
        <img :src="breedImageLink" :alt="breed.name">
        <BreedInterestingPoints :breed="breed" />
      </div>

    </div>

  </div>

</template>

<script>
import BreedDetailGraph from '@/components/BreedDetailGraph.vue';
import BreedInterestingPoints from '@/components/BreedInterestingPoints';

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
      hAxis:{viewWindow:{min:0, max:5}}
    }
  },
  components: {
    BreedDetailGraph,
    BreedInterestingPoints
  }
}
</script>

<style lang="css" scoped>
#mini-details{
  margin-left:2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#details{
  display:flex;
  flex-direction: row;

}
#graph{
  display:flex;
  flex:1;
  align-self:flex-start;
  flex-direction: column;
  padding-right: 2em;
}
#img-points{
  width: 50%;
}
img{
  align-self: center;
  width:100%;
  /* height: 50%; */
}
</style>
