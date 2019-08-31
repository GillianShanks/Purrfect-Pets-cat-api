<template lang="html">
  <div id="search-fav">
    <div id="search-boxes">
      <input type="text" v-model="searchText" placeholder="Type search here..." v-on:keyup="searchForBreed">
      <select v-model="selectedBreed" @change="handleChange">
        <option selected disabled value="">Select a breed:</option>
        <option v-for="(breed, index) in breeds" :value="breed">{{breed.name}}</option>
      </select>
    </div>
    <div id="fav-button" v-if="selectedBreed">
      <button id="add" v-if="!selectedBreed.isFavourite" @click="toggleFavouriteBreed">Add to Favourites</button>
      <button id="remove" v-if="selectedBreed.isFavourite" @click="toggleFavouriteBreed">Remove from Favourites</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "search-form-breeds",
  props: ['breeds'],
  data(){
    return{
      selectedBreed: "",
      searchText: ""

    }
  },
  methods:{
    handleChange(){
      this.searchText = "";
      eventBus.$emit("selected-breed", this.selectedBreed)
    },
    searchForBreed(){
      this.selectedBreed = this.breeds.find((breed) => {
        return breed.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
      });
      eventBus.$emit("selected-breed", this.selectedBreed);
    },
    toggleFavouriteBreed(){
      this.selectedBreed.isFavourite ? this.selectedBreed.isFavourite = false : this.selectedBreed.isFavourite = true;
    }

  }

}
</script>

<style lang="css" scoped>
#search-fav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  margin-top: 20px;
}
#search-boxes{
  display:flex;
  flex-direction: column;
  padding-right: 2em;
}
input, select{
  /* width: 100%; */
  border-radius: 4px;
  align-self: center;
  font-size: 1.1em;
  border: 1px solid #612191;
  background-color: #f7bcf6;
  outline: none;
}

button{
  /* border: 1px solid green; */
  border-radius: 4px;
  font-size: 1em;
  align-self: center;
  outline: none;
  background-color: #f7bcf6;
  border: 1px solid #612191;
}

button:hover{
 background-color:#cc5eca;
}

button:active{
  background-color:#612191;

}

select:hover{
  background-color:#cc5eca;

}

</style>
