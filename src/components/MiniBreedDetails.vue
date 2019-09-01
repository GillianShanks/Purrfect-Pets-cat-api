<template lang="html">
  <div id="mini-details">
    <div id="details">
      <h3>{{breed.temperament}}</h3>
    </div>
    <img :src="breedImageLink" :alt="breed.name">
  </div>

</template>

<script>
export default {
  name:'mini-details',
  props:['breed'],
  data(){
    return{
      breedImageAPI:"",
      breedImageLink:""
    }
  },
  mounted(){
    this.breedImageAPI = 'https://api.thecatapi.com/v1/images/search?breed_ids='+this.breed.id;

    fetch(this.breedImageAPI)
    .then(res => res.json())
    .then(data => this.breedImageLink = data[0].url)
  }
}
</script>

<style lang="css" scoped>
#mini-details{
  margin-left:5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#details{
  align-self: center;
}
img{
  margin-right: 5em;
  width: 20%;
}
</style>
