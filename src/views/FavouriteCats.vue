<template lang="html">
  <div id="favourites">
    <div id="nav">
      <h2>Favourite:</h2>
      <h3 v-if="!faveBreedsSelected" class="not-selected" @click="toggleBreedsClick">Breeds</h3>
      <h3 v-if="faveBreedsSelected" class="selected" @click="toggleBreedsClick">Breeds</h3>
    </div>
    <div id="details" >
      <h2 v-if="!favouriteBreeds.length && faveBreedsSelected">You have not selected any favourite breeds! Add some <router-link :to="{ name: 'cat-breeds'}">here</router-link>!</h2>
      <FavouriteBreeds v-if="favouriteBreeds.length && faveBreedsSelected" :favouriteBreeds="favouriteBreeds" :favouriteBreedsData="favouriteBreedsData" />
    </div>
  </div>
</template>

<script>
import FavouriteBreeds from '@/components/FavouriteBreeds.vue'

export default {
  name:'favourites',
  props:['favouriteBreeds', 'favouriteBreedsData'],
  data(){
    return{
      faveBreedsSelected:true,

    }
  },
  methods:{
    toggleBreedsClick(){
      this.faveBreedsSelected ? this.faveBreedsSelected=null : this.faveBreedsSelected=true;
    }
  },
  mounted(){

  },
  components: {
    FavouriteBreeds
  }
}
</script>

<style lang="css" scoped>
#favourites{
  display:flex;
  flex-direction: row;
  color: white;
  padding-bottom: 1em;
  flex:1;
  height: 80vh;
  overflow-y: scroll;
  /* border: 1px blue solid; */
}
#nav{
  border-right: 2px solid white;
  width: 10em;
  display:flex;
  flex-direction: column;
  padding: 1em;
  /* margin-right: 1em; */
}
#details{
  padding-left: 2em;
  padding-right: 3em;
  flex:1;
  /* border:solid 1px red; */
}
h3 {
  margin-right: 1em;
  padding:0.5em;
}
h3:hover{
  background-color: #cc5eca;
  border: 1px solid #612191;

}
h3:active{
  background-color: #612191;

}
.selected{
  background-color: #612191;
}

a{
  text-decoration: none;
  color: white;
  padding:0.2em;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.2);
  border: 1px solid #612191;
}

a:hover{
  background-color: #cc5eca;
}


</style>
