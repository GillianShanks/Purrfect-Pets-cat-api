<template lang="html">
  <div id="fav-button" v-if="selectedBreed">
    <button id="add" v-if="!selectedBreed.isFavourite" @click="toggleFavouriteBreed">Add to Favourites</button>
    <button id="remove" v-if="selectedBreed.isFavourite" @click="toggleFavouriteBreed">Remove from Favourites</button>
  </div>
</template>

<script>
export default {
  name:'fav-breed-button',
  props:['selectedBreed'],
  methods:{
    toggleFavouriteBreed(){
      this.selectedBreed.isFavourite ? this.selectedBreed.isFavourite = false : this.selectedBreed.isFavourite = true;
    }
  }
}
</script>

<style lang="css" scoped>

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
