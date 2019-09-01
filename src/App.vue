<template lang="html">
  <div id="view">
    <div class="">
      <Header />
    </div>

    <div id="content">
      <router-view :breeds="breeds" :favouriteBreeds="favouriteBreeds" :favouriteBreedsData="favouriteBreedsData"/>
    </div>
  </div>

</template>

<script>
import Header from '@/components/Header';
import CatBreeds from '@/views/CatBreeds';

export default {
  name: 'app',
  data(){
    return{
      breeds: [],

    }
  },
  computed:{
    favouriteBreeds:function(){
      return this.breeds.filter((breed) => {
        return breed.isFavourite
      })
    },
    favouriteBreedsData: function(){
      let headingArray = ['Characteristic'];
      let data1Array = ['Affection']
      let data2Array = ['Child-Friendly']
      let data3Array = ['Dog-Friendly']
      let data4Array = ['Stranger-Friendly']
      let data5Array = ['Energy']
      let data6Array = ['Intelligence']
      let data7Array = ['Health Issues']
      let data8Array = ['Shedding']
      let data9Array = ['Social Needs']
      let data10Array = ['Vocalisation']

      this.favouriteBreeds.forEach((breed) => {
        headingArray.push(breed.name);
        data1Array.push(breed.affection_level)
        data2Array.push(breed.child_friendly)
        data3Array.push(breed.dog_friendly)
        data4Array.push(breed.stranger_friendly)
        data5Array.push(breed.energy_level)
        data6Array.push(breed.intelligence)
        data7Array.push(breed.health_issues)
        data8Array.push(breed.shedding_level)
        data9Array.push(breed.social_needs)
        data10Array.push(breed.vocalisation)
      })
      let completeDataArray = [headingArray, data1Array, data2Array, data3Array, data4Array, data5Array, data6Array,data7Array,data8Array,data9Array,data10Array];
      return completeDataArray;
    }
  },
  mounted(){
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => {
      let breedsData=data;
      breedsData.forEach((breed) => {
        //remove alt_names with just a space - doesn't work
        if (breed.alt_names == " "){
          return breed.alt_names = breed.alt_names.trim();
        }

        breed.isFavourite=false;
        breed.showMiniBreed=false;

      });
      this.breeds = breedsData;
    })
  },
  components: {
    Header,
    CatBreeds
  }
}
</script>
<style>
  body{
    margin:0;
  }
</style>

<style lang="css" scoped>

#view {
  background-image: url('assets/galaxycat.jpg');
  height:100vh;
  background-size: cover;
  background-position:right;
  background-attachment: fixed;
  display:fixed;
}


</style>
