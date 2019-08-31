<template lang="html">
  <div id="search-boxes">
    <input type="text" v-model="searchText" placeholder="Type search here..." v-on:keyup="searchForBreed">
    <select v-model="selectedBreed" @change="handleChange">
      <option selected disabled value="">Select a breed:</option>
      <option v-for="(breed, index) in breeds" :value="breed">{{breed.name}}</option>
    </select>
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
    }

  }

}
</script>

<style lang="css" scoped>
#search-boxes{
  /* border: 1px solid red; */
  margin-top: 20px;
  /* width: 20%; */
  display:flex;
  flex-direction: column;
}
input, select{
  width: 20%;
  align-self: center;
  font-size: 1.1em;


}
</style>
