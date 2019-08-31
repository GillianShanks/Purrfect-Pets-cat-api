<template lang="html">
  <div id="breeds-view">
    <SearchFormCatBreeds :breeds="breeds" />
    <BreedDetail v-if="breed" :breed="breed" :interestingPoints="interestingPoints" :breedWikiTitle="breedWikiTitle" />
  </div>
</template>

<script>
import SearchFormCatBreeds from '@/components/SearchFormCatBreeds';
import BreedDetail from '@/components/BreedDetail'
import {eventBus} from '@/main.js';

export default {
  name: "cat-breeds",
  data(){
    return{
      breeds: [],
      breed: null,
      interestingPoints: [],
      breedWikiTitle:"",
      breedWikiImageAPI:""
    }
  },
  mounted(){
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => this.breeds=data)

    eventBus.$on('selected-breed', (breed) => {
      this.breed=breed;

      this.interestingPoints= [breed.rare, breed.suppressed_tail, breed.hairless, breed.rex, breed.short_legs, breed.hypoallergenic, breed.lap];

      this.breedWikiTitle = breed.wikipedia_url.substring(breed.wikipedia_url.lastIndexOf('/')+1)
      .replace(/[()]/g, '');

      this.breedWikiImageAPI = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles='+this.breedWikiTitle;

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
    height: 85vh;
    overflow-y: scroll;
  }

</style>
