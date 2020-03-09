<template>
  <div class="advanced">
    <Notice v-if="notice" v-model="notice" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Advanced features</h1>
    <h2>router</h2>
    <p>
      K čemu jinému by sloužil než k routování.
    </p>
    <ul>
      <li>
        <h3>router-link</h3>
        <p>
          slouží defakto jako odkaz, s tim že má spoustu nastavení a variací.
        </p>
        <ul>
          <li>
            <strong>to:</strong>
            <p>
              tohle vlastně funguje podobně jako href, můžeme mu dát prostě
              jenom cestu např /samples, nebo můžene použít jméno routy a můžeme
              mu předat v tom případě parametry {name: 'Sample', params:
              {handsomeParam: someParam}}
            </p>
            <p>
              Aby view přijímal propsy musí se nastavit v routách např path:
              "/samples:handsomeParam?" ( ? dělá z propu to že je conditional) +
              se musí zapnout props v routách
            </p>
            <p>
              <router-link
                tag="button"
                :to="{
                  name: 'Samples',
                  params: { handsomeParam: 'anotherProp' }
                }"
                >Link někam</router-link
              >
              <br />
              <button @click="redirectToSamples">
                Tohle nás taky redirectne
              </button>
            </p>
          </li>
          <li>
            <strong> active-class </strong>
            <p>
              Nastavuje jakou aktivní classu bude mít link, má i svojí defaultní
            </p>
          </li>
          <li>
            <strong> tag </strong>
            <p>
              Mění tag router-link, defaultně to je Ačko, může to bejt button
              nebo cokoliv jinýho
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h3>Programatické navigování</h3>
        <p>
          Jako alternativa k router-link se dá navigovat pomocí
          <strong>this.$router.push({})</strong>, kde push() přejímá stejný
          objekt jako :to v router-linku. push() je dobrrej třeba v případě, kde
          máme nějakou metodu, a na konci cheme udělat redirekt, typicky
          odeslání formuláře.
        </p>
      </li>
      <li>
        <h3>router-view</h3>
        <p>
          do týhle komponenty se mountujou child views/komponenty daného view
        </p>
        <p>
          mimo jiné se může nastavit několik nastavení, zmíním hlavně
          <strong>linkActiveClass</strong>, kterým se globálně nastaví active
          classa
        </p>
      </li>
    </ul>
    <h2>eventbus</h2>
    <p>Slouží k odpalování a odchytávání eventů napříč aplikací</p>
    <ul>
      <li>
        this.eventBus.$emit("someEvent");
      </li>
      <li>
        this.eventBus.$on("someEvent", someMethod);
      </li>
      <li>
        <button @click="eventBus.$emit('someEvent')">
          @click="eventBus.$emit('someEvent')
        </button>
      </li>
    </ul>
    <h2>mixins</h2>
    <p>
      Obsahují sdílené různé části komponent abychom nemuseli opakovat deklerace
    </p>
    <p>
      Může obsahovat všechny části komponenty včetně livecycle hooků
    </p>
    <button @click="loggingDebug">Metoda zapsaná v mixinu</button>
    <h2>slots</h2>
    <p>Sloty se používají pokud do komponenty chceme dávat custom template</p>
    <p>
      Pak se používají tak že mezi otevírací a zavírací tag komponenty vložíme
      daný template
    </p>
    <SampleSlot
      ><h3>Tady je nějaký template, který bude v SampleSlotu</h3></SampleSlot
    >
    <h2>animace</h2>
    <button @click="animationRunning = !animationRunning">
      Ukázat animaci
    </button>
    <transition name="bounce">
      <p v-if="animationRunning">Tohle přihopsá</p>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

import sampleMixin from "@/mixins/sampleMixin.js";
import SampleSlot from "@/components/SampleSlot.vue";

export default {
  name: "Advanced",
  components: {
    SampleSlot
  },
  mixins: [sampleMixin],
  data() {
    return {
      animationRunning: false
    };
  },
  created() {
    this.eventBus.$on("someEvent", this.someMethod);
  },
  destroyed() {
    this.eventBus.$off("someEvent");
  },
  methods: {
    someMethod() {
      console.info("Some Method Called");
    },
    redirectToSamples() {
      console.info("jakoby nějaká logika");
      this.$router.push({
        name: "Samples",
        params: { handsomeParam: "redirectAfterSomeLogic" }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.advanced {
  width: 600px;
  margin: auto;
  padding-bottom: 1000px;
  text-align: left;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
