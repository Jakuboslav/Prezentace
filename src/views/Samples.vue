<template>
  <div class="home">
    <Notice v-if="notice" v-model="notice" />
    <img alt="Vue logo" src="../assets/logo.png" />

    <h2>Nejlepší hráči: (loops)</h2>
    <template v-for="(player, index) in players">
      <TopPlayer
        :key="index"
        :player="player"
        :index="index"
        @player-removed="notify($event + ' - odebrán', 'orange')"
      />
    </template>
    <button @click="addPlayer">Další hráči</button>
    <button @click="removePlayer">Odebrat hráče</button>

    <h2>Náhodný číslo: (conditions)</h2>
    <button @click="generateRand(1, 5)">Náhodný číslo</button>
    <!-- TODO: Ukazát rozdíl show vs if -->
    <div v-if="rand === 0">
      Je to nula!
    </div>
    <div v-else-if="rand === 1">
      Je to jedna!
    </div>
    <div v-else-if="rand === 2">
      Je to dva!
    </div>
    <div v-else-if="rand === 3">
      Je to tři!
    </div>
    <div v-else>
      Je to něco jinýho!
    </div>

    <h2>Input handling</h2>

    <div>Tady bude ten text ještě jednou: {{ sampleText }}</div>
    <input
      type="text"
      v-model="sampleText"
      :class="{ invalid: errors.length > 0 }"
    />

    <input type="checkbox" v-model="licence" />

    <input type="button" :disabled="!licence" value="odeslat" />

    <div class="errors" v-if="errors.length > 0">
      <div v-for="(error, index) in errors" :key="index">{{ error }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopPlayer from "@/components/TopPlayer.vue";

export default {
  name: "Samples",
  components: {
    TopPlayer
  },
  props: {
    handsomeParam: String
  },
  data() {
    return {
      players: ["Handsome 😍", "Laczo 🤬", "Iggy 😢"],
      rand: 0,
      sampleText: "",
      errors: [],
      loop: true,
      licence: false
    };
  },
  computed: {
    filteredPlayers() {
      return this.players.filter(player => {
        return player.includes("Handsome");
      });
    }
  },
  watch: {
    sampleText: {
      handler(newVal, oldVal) {
        this.errors = [];

        if (!newVal) return;
        if (!oldVal) return;

        if (!this.valid(newVal)) this.errors.push("Oprav to!");

        if (!this.valid(oldVal) && !this.valid(newVal)) {
          this.errors.push("Už to sakra oprav!");
          this.notice = {
            content: "OPRAV TO!",
            type: "red"
          };
        }
        if (!this.valid(oldVal) && this.valid(newVal))
          this.errors.push("Měl si to blbě!");
      },
      immediate: true
    }
  },
  mounted() {
    if (this.handsomeParam)
      this.notice = {
        content: "Máme nastavený param: " + this.handsomeParam,
        type: "cornflowerblue"
      };
  },
  methods: {
    getRandNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateRand(min, max) {
      this.rand = this.getRandNum(min, max);
    },
    addPlayer() {
      this.players.push("Player " + this.getRandNum(1, 100));
    },
    removePlayer() {
      this.players.pop();
    }
  }
};
</script>

<style lang="less" scoped>
.errors {
  color: red;
}
input[type="text"] {
  padding: 5px;
  &:focus {
    outline: none;
  }
}
.invalid {
  border: 3px red solid;
}

.home {
  margin-bottom: 1000px;
}
</style>
