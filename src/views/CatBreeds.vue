<template lang="html">
  <div id="breeds-view">
    <SearchFormCatBreeds :breeds="breeds" />
    <BreedDetail v-if="selectedBreed" :breed="selectedBreed" :interestingPoints="interestingPoints" :breedImageLink="breedImageLink" />
  </div>
</template>

<script>
import SearchFormCatBreeds from '@/components/SearchFormCatBreeds';
import BreedDetail from '@/components/BreedDetail'
import {eventBus} from '@/main.js';


export default {
  name: "cat-breeds",
  props:['breeds'],
  data(){
    return{
      selectedBreed: null,
      interestingPoints: [],
      breedImageAPI:"",
      breedImageLink:""
    }
  },
  mounted(){
    eventBus.$on('selected-breed', (breed) => {
      this.selectedBreed=breed;

      this.interestingPoints= [breed.rare, breed.suppressed_tail, breed.hairless, breed.rex, breed.short_legs, breed.hypoallergenic, breed.lap];

      this.breedImageAPI = 'https://api.thecatapi.com/v1/images/search?breed_ids='+breed.id;

      fetch(this.breedImageAPI)
      .then(res => res.json())
      .then(data => this.breedImageLink = data[0].url)

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

</style>
