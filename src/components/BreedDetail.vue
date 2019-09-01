<template lang="html">
  <div id="detail-view">
    <div id="title-section">
      <h2>{{breed.name}}</h2>
      <!-- another attempt to remove alt_names with spaces only -->
      <h3 v-if="breed.alt_names && breed.alt_names !== ' '">(alt names: {{breed.alt_names}})</h3>
    </div>
    <p>Temperament: {{breed.temperament}}</p>
    <div id="info-pic">
      <div id="info-section">
        <BreedDetailGraph :chartData="chartData" :chartOptions="chartOptions" />
      </div>

      <div id="breed-pic">
        <h3 v-if="loading">loading image...</h3>
        <img v-if='!loading' :src="breedImageLink" :alt="breed.name" />
        <p>Origin: {{breed.origin}}</p>
        <p>Life-span: {{breed.life_span}} years</p>
        <BreedInterestingPoints v-if='interestingList' :breed="breed"/>

      </div>
    </div>
    <p>{{breed.description}}</p>

  </div>
</template>

<script>
import BreedDetailGraph from '@/components/BreedDetailGraph';
import BreedInterestingPoints from '@/components/BreedInterestingPoints'

export default {
  name: "breed-detail",
  props: ['breed', 'interestingPoints', 'breedImageLink', 'chartData', 'chartOptions', 'loading'],
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

  },
  components:{
    BreedDetailGraph,
    BreedInterestingPoints
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
  width: 60%;
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
#info-pic{
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

#breed-pic{
  width: 50%;
}

#info-section{
  /* border: 1px solid red; */
  width: 50%;
  padding-right: 1em;
}


img{
  align-content: center;
  width:100%;
}

@media screen and (max-width: 1000px){
  #info-pic {
    flex-direction:column-reverse;
    align-items: center;
  }
}

</style>
