<template lang="html">
  <div id="toggle-btns">
    <button v-if="!breed.showMiniBreed" @click='toggleBreedDetails'>show details</button>
    <button v-if="breed.showMiniBreed" @click='toggleBreedDetails'>hide details</button>
  </div>
</template>

<script>
export default {
  name: 'show-mini-breed',
  props:['breed'],
  methods:{
    toggleBreedDetails(){
      this.breed.showMiniBreed ? this.breed.showMiniBreed = null : this.breed.showMiniBreed = true;
    }
  },
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
