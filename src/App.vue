<template lang="html">
  <div id="view">
    <div class="">
      <Header />
    </div>

    <div id="content">
      <router-view :breeds="breeds" :favouriteBreeds="favouriteBreeds"/>
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
    }
  },
  mounted(){
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => {
      let breedsData=data;
      breedsData.forEach((breed) => {
        breed.isFavourite=false;
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
