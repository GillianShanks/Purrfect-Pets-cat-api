<template lang="html">
  <div id="detail-view">
    <div id="title-section">
      <h2>{{breed.name}}</h2>
      <h3 v-if="breed.alt_names">(alt names: {{breed.alt_names}})</h3>
    </div>
    <div id="info-pic">
    <div id="info-section">
      <p>Temperament: {{breed.temperament}}</p>
      <p>Origin: {{breed.origin}}</p>
      <p>Life-span: {{breed.life_span}} years</p>
      <div v-if="interestingList">
        <p>Interesting points:</p>
        <ul id="interesting">
          <li v-if="breed.rare">Is rare</li>
          <li v-if="breed.suppressed_tail">Has a suppressed tail</li>
          <li v-if="breed.hairless">Is hairless</li>
          <li v-if="breed.rex">Is a 'rex' (has curly hair)</li>
          <li v-if="breed.short_legs"> Has short-legs</li>
          <li v-if="breed.hypoallergenic">Is hypo-allergenic</li>
          <li v-if="breed.lap">Tendency to be a lap cat</li>
        </ul>
      </div>

    </div>
    <div id="breed-pic">
      <img src="" alt="">
    </div>
    </div>
    <p>{{breed.description}}</p>

  </div>
</template>

<script>
export default {
  name: "breed-detail",
  props: ['breed', 'interestingPoints', 'breedWikiImageAPI'],
  data(){
    return{

    }
  },
  computed:{
    interestingList: function(){
      return this.interestingPoints.find((point) => {
        return point>0
      })
    }
  },
  mounted(){
    fetch('https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=American_Bobtail')
    .then(res => console.log(res.json()))
  }

}
</script>

<style lang="css" scoped>
#detail-view {
  margin: 0 auto;
  margin-top: 1em;
  color: white;
  border: 3px solid white;
  border-radius: 8px;
  width: 50%;
  font-size: 1.4em;
  padding:1em;
  word-wrap:break-word;
  background-color: rgba(255,255,255, 0.2)
}

#title-section{
  border-bottom: 1px solid white;
  padding-bottom: 2em;
}


h2{
  font-size: 2.5em;
  padding-top:0em;
  margin-top:0;
  margin-bottom:0;
  text-decoration: underline;
  text-align: center;
  font-variant: small-caps;
}
h3{
  margin:0;
  font-size: 0.8em;
  text-align: center;
  font-weight: lighter;

}

</style>
