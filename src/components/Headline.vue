<template>
  <div class="hello">
    <h1 v-if="type === 'h1'">{{ parsedPlayers }}</h1>
    <h2 v-else-if="type !== 'h1'">{{ parsedPlayers }}</h2>
    <h3 v-else-if="type === 'h3'">{{ parsedPlayers }}</h3>
    <h4 v-else-if="type === 'h4'">{{ parsedPlayers }}</h4>
    <h5 v-else-if="type === 'h5'">{{ parsedPlayers }}</h5>
    <h6 v-else-if="type === 'h6'">{{ parsedPlayers }}</h6>
    <strong v-else>{{ msg }}</strong>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: {
    msg: Array,
    type: String
  },
  computed: {
    parsedPlayers() {
      return this.players.join(", ");
    }
  }
};
</script>
