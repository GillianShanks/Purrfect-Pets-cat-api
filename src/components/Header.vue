<template lang="html">
  <div id="header">
    <h1>My Purrfect Cat</h1>
    <div id="nav">
      <router-link :to="{ name: 'cat-breeds'}">Breeds</router-link>
      <router-link :to="{ name: 'favourite-cats'}">Favourites</router-link>

    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1{
  margin:0;
  text-align: center;
  font-size: 4em;
  color: white;
  width: 100%;
  white-space: nowrap;
}

#header {
  border-bottom: white 3px solid;

}

#nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a {
  padding: 0.5em;
  font-size: 1.2em;
  color: white;
}
</style>
