<template lang="html">
  <div id="breeds-view">
    <SearchFormCatBreeds :breeds="breeds" />
    <h2 v-if="!selectedBreed">Click above or type in the search bar to find what might be your favourite cat breed!</h2>
    <h2 v-if="selectedBreed && !breedImageLink.length">Loading Info...</h2>
    <BreedDetail v-if="selectedBreed && breedImageLink.length" :breed="selectedBreed" :interestingPoints="interestingPoints" :breedImageLink="breedImageLink" :chartData="chartData" :chartOptions="chartOptions" :loading="loading"/>
  </div>
</template>

<script>
import SearchFormCatBreeds from '@/components/SearchFormCatBreeds';
import BreedDetail from '@/components/BreedDetail'
import {eventBus} from '@/main.js';


export default {
  name: "cat-breeds",
  props:['breeds', 'breed'],
  data(){
    return{
      selectedBreed: null,
      interestingPoints: [],
      breedImageAPI:"",
      breedImageLink:"",
      chartData:[],
      chartOptions:{},
      loading:null
    }
  },
  methods:{
    getExtraBreedInfo(breed){

    }
  },
  mounted(){
    if (this.breed){
      this.selectedBreed=this.breed;
    }
    //but then it does not set up all the stuff in the eventBus, even pasting all the info below doesn't work.


    eventBus.$on('selected-breed', (breed) => {
      this.breedImageLink="";
      this.selectedBreed=breed;

      this.interestingPoints= [breed.rare, breed.suppressed_tail, breed.hairless, breed.rex, breed.short_legs, breed.hypoallergenic, breed.lap];

      this.breedImageAPI = 'https://api.thecatapi.com/v1/images/search?breed_ids='+breed.id;

      fetch(this.breedImageAPI)
      .then(res => res.json())
      .then(data => this.breedImageLink = data[0].url)

      this.chartData = [
        ['Characterist', 'Level'],
        ['Affection', breed.affection_level],
        ['Child-Friendly', breed.child_friendly],
        ['Dog-Friendly', breed.dog_friendly],
        ['Stranger-Friendly', breed.stranger_friendly],
        ['Energy Level', breed.energy_level],
        ['Intelligence', breed.intelligence],
        ['Health Issues', breed.health_issues],
        ['Shedding', breed.shedding_level],
        ['Social Needs', breed.social_needs,],
        ['Vocalisation',  breed.vocalisation]
      ],
      this.chartOptions = {
        title: 'Characteristics of '+ breed.name,
        height: 500,
        backgroundColor: '#82acb3',
        colors: ['white'],
        hAxis:{viewWindow:{min:0, max:5}}
      }
      this.loading=false;

    })
  },
  components:{
    SearchFormCatBreeds,
    BreedDetail
  }
}
</script>

<style lang="css" scoped>
  #breeds-view{
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
    flex:1;
    height: 80vh;
    overflow-y: scroll;
  }

  h2{
    color: white;
    text-align: center;
    font-weight: lighter;
    font-style: italic;
    font-size: 1.8em;
    background-color: rgba(255,255,255,0.2);
    border: white 1px solid;
    border-radius: 4px;
    width: 60%;
    align-self: center;
    margin: 1em;
  }

</style>
