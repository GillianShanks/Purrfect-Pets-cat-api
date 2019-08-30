<template lang="html">
  <div id="view">
    <Header />
    <CatBreeds :breeds="breeds" />
  </div>

</template>

<script>
import Header from '@/components/Header';
import CatBreeds from '@/views/CatBreeds'

export default {
  name: 'app',
  data(){
    return{
      breeds:[]
    }
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
  background-position: right;
}

CatBreeds{
  margin: 0 auto;
}

</style>
