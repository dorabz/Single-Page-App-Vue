<template>
  <div>
    <h3>Store</h3>
    <div>points: {{ points }}</div>
    <button @click="updatePoints(5)">add 5 points</button>
    <button @click="updatePoints(-5)">remove 5 points</button>
  </div>
</template>

<script>

export default {
  methods: { 
    updatePoints(points) { 
      this.$store.commit('updatePoints', points)
    } 
  },
  computed: { 
    points() { 
      return this.$store.state.points
        } 
    }
}

</script>