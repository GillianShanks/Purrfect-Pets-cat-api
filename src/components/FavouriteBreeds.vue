<template lang="html">
  <div id="list-breeds">
    <h1>My Favourite Breeds:</h1>
    <ul>
      <li v-for="(breed, index) in favouriteBreeds">{{breed.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'favourite-breeds',
  props:['favouriteBreeds']

}
</script>

<style lang="css" scoped>
li{
  font-size: 1.8em;
  list-style: none;
  border:1px white solid;
  padding:0.5em;
  width:auto;
  background-color: rgba(255, 255, 255, 0.2)
}
</style>
