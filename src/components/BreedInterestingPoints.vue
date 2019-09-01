<template lang="html">
  <div>
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
</template>

<script>
export default {
  name:'breed-interesting-points',
  props:['breed']
}
</script>

<style lang="css" scoped>
</style>
