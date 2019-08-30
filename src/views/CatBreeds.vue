<template lang="html">
  <div id="breeds-view">
    <SearchFormCatBreeds :breeds='breeds' />
  </div>
</template>

<script>
import SearchFormCatBreeds from '@/components/SearchFormCatBreeds';

export default {
  name: "cat-breeds",
  data(){
    return{
      breeds: []
    }
  },
  mounted(){
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => this.breeds=data)
  },
  components:{
    SearchFormCatBreeds
  }
}
</script>

<style lang="css" scoped>
  #breeds-view{
    text-align: center;
  }

</style>
