<template>
  <div class="player" :class="'rank-' + rank">
    <h3>{{ playerWithRank }}</h3>
    <button @click="increment">Sem klikač</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
  name: "TopPlayer",
  props: {
    player: String,
    index: Number
  },
  data: () => {
    return {
      counter: 0
    };
  },
  computed: {
    rank() {
      return this.index + 1; // this.counter + 1  // Pro ukázání reaktivity
    },
    playerWithRank() {
      return this.rank + ". " + this.player;
    }
  },
  created() {
    console.info(this.player + "| komponenta vytvořena");
  },
  mounted() {
    console.info(this.player + "| komponenta namountová do DOMu");
  },
  destroyed() {
    console.info(this.player + "| komponenta zničena");
    this.$emit("player-removed", this.player);
  },
  updated() {
    console.info(this.player + "| něco se stalo v komponentě");
  },
  methods: {
    increment() {
      this.counter += 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.player {
  margin-bottom: 15px;
  .rank {
    &-1 {
      color: gold;
    }
    &-2 {
      color: silver;
    }
    &-3 {
      color: saddlebrown;
    }
  }
}
</style>
