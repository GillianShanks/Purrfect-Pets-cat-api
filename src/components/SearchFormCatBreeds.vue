<template lang="html">
  <div id="search-fav">
    <div id="search-boxes">
      <input type="text" v-model="searchText" placeholder="Type search here..." v-on:keyup="searchForBreed">
      <select v-model="selectedBreed" @change="handleChange">
        <option selected disabled value="">Select a breed:</option>
        <option v-for="(breed, index) in breeds" :value="breed">{{breed.name}}</option>
      </select>
    </div>
    <FavBreedButton :selectedBreed="selectedBreed"/>
  </div>
</template>

<script>
import FavBreedButton from '@/components/FavBreedButton.vue'
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


  },
  components:{
    FavBreedButton
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
  background-color: rgba(255,255,255,0.3);
  outline: none;
  color: white;

}
::placeholder{
  color:white;
  opacity: 0.5;
}
select:hover{
  background-color:#cc5eca;

}
select:active{
  background-color: #612191;
}

</style>
