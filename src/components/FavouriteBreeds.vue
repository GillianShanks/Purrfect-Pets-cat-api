<template lang="html">
  <div id="list-breeds">
    <h1>My Favourite Breeds:</h1>

    <button v-if="showFavouritesGraph" @click="handleComparisonClick">Hide Characteristics Comparison</button>
    <button v-if="!showFavouritesGraph" @click="handleComparisonClick">Show Characteristics Comparison</button>
    <CompareBreedsGraph v-if="showFavouritesGraph" :favouriteBreedsData="favouriteBreedsData" />

    <ul>

      <li v-for="(breed, index) in favouriteBreeds">
        <div id="name-btns">
          <div id="btns">
            <div id="breed-name">{{breed.name}}</div>
            <MiniDetailsToggle :breed="breed"/>
          </div>

          <FavBreedButton :selectedBreed='breed'/>

        </div>
        <MiniBreedDetails v-if="breed.showMiniBreed" :breed='breed' />
      </li>

    </ul>
  </div>
</template>

<script>
import FavBreedButton from '@/components/FavBreedButton.vue';
import MiniBreedDetails from '@/components/MiniBreedDetails.vue';
import MiniDetailsToggle from '@/components/MiniDetailsToggle.vue';
import CompareBreedsGraph from '@/components/CompareBreedsGraph';

export default {
  name: 'favourite-breeds',
  props:['favouriteBreeds', 'favouriteBreedsData'],
  data(){
    return {
      showFavouritesGraph: false
    }
  },
  methods:{
    handleComparisonClick(){
      this.showFavouritesGraph ? this.showFavouritesGraph=false : this.showFavouritesGraph=true;
    }
  },
  components: {
    FavBreedButton,
    MiniBreedDetails,
    MiniDetailsToggle,
    CompareBreedsGraph
  }

}
</script>

<style lang="css" scoped>
li{
  display: flex;
  flex-direction: column;
  font-size: 1em;
  list-style: none;
  border:1px white solid;
  padding:0.5em;
  width:auto;
  background-color: rgba(255, 255, 255, 0.2);
}
#name-btns{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
}
#btns{
  display:flex;
  flex-direction: column;
}
#breed-name{
  font-size: 1.8em;
  padding-right: 2em;
}
button{
  /* border: 1px solid green; */
  color: white;
  border-radius: 4px;
  font-size: 1em;
  align-self: center;
  outline: none;
  background-color: rgba(255,255,255,0.3);
  border: 1px solid #612191;
}

button:hover{
 background-color:#cc5eca;
}

button:active{
  background-color:#612191;

}
</style>
