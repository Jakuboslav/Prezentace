<template>
  <div class="big-picture">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Big picture</h1>

    <div class="content">
      <h2>Proč Vue?</h2>

      <h3>Hlavní plusy (za mě)</h3>

      <ul>
        <li>Lépe se udržuje než jQuery</li>
        <li>Lépe se testuje</li>
        <li>Kód je organizovaný</li>
        <li>Lepší správa a reusability komponent</li>
        <li>Event handling má jasný řád</li>
      </ul>

      <h3>Rozdíly s jQuery</h3>

      <ul>
        <li>Vue nemanipulujes domem, ale využívá vlastní shadow dom</li>
        <li>
          Ve vue je kód uspořádaný a mnohem lépe se píše funkčně, nesvádí
          člověka k procedurálnímu psaní
        </li>
        <li>
          Ve vue člověk nemusí řešit tolik věcí ohledně domu, např dom ready atd
        </li>
      </ul>

      <h4>jQuery v kostce</h4>
      <img alt="jQuery" src="../assets/jQuery.png" width="800" />

      <h2>Komponenty</h2>

      <h3>
        Live Cycle
      </h3>

      <p>Zajímají nás hlavně následující hooky</p>
      <ul>
        <li>Created</li>
        <li>Mounted</li>
        <li>Updated</li>
        <li>Destroyed</li>
      </ul>

      <img
        alt="Live cycle"
        src="https://vuejs.org/images/lifecycle.png"
        width="800"
      />

      <h3>Použití</h3>

      <p>
        V templatách se musí komponenta naincludovat (přes import),
        zaregistrovat (do objektu components) a pak se používá jako normální
        html tag
      </p>
      <p>
        props se nastavují jako atributy obvykle s prefixem dvojtečky, eventy se
        pak přihlašují pomocí prefixu @
      </p>

      <h4>Příklady</h4>
      <ul>
        <li>
          <input
            type="text"
            value='<SomeComponent :prop1="data1" :prop2="data2 + 1" prop3="string-only" prop4/>'
          />

          <p>
            prop4 - pokud se použije takhle raw - tak se nastaví prop4 na true
          </p>
        </li>
        <li>
          <input
            type="text"
            value='<SomeComponent @magic-happened="handleMagic" @magic-happened="handleMagic(someParam, $event)"/>'
          />
          <p>
            pokud se event odesílá s nějakou hodnotou tam se defaultně použije
            jako parametr funkce a v handleMagic(value) se automaticky nastaví
            jako "value"
          </p>
          <p>
            pokud chceme další parametry, hodnotu se kterou se odesílá event
            najdeme jako $event
          </p>
        </li>
        <li>
          <input
            type="text"
            value='<SomeComponent v-model="myValue"/> === <SomeComponent :value="myValue" @input="myValue = $event"/>'
          />
          <p>
            používá se na handling inputů
          </p>
        </li>
      </ul>

      <h4>Výroba</h4>
      <p>Na výrobu se podíváme v praktickém příkladu</p>

      <h4>Komunikace mezi komponentami</h4>

      <img
        alt="Component comunication"
        src="../assets/comunication.png"
        width="800"
      />
    </div>
  </div>
</template>

<style scoped>
.big-picture .content {
  margin: 0 auto 100vh;
  width: 800px;
  text-align: left;
}
h1,
h2,
h3 {
  margin: 50px 0;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
}
</style>
