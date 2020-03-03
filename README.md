# handsome-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Osnova

 - Přestavit VueJS
 - Alternativy k VueJS
 - Proč si vybíráme VueJS
 - "Instalace" - vue create xyz
 - Základní vlastnosti
 - Základní implementace
 - Komponenty
 - Life cycles

### Komponenty

 ukázat sample, nějakou vyrobit
 importy komponent
 registrace komponent
 
 
#### data
#### props
#### computed
#### watchers
#### methods
#### lifecycle hooks

### Templates

#### Cykly

na cykly se používá v templatě "v-for", měl by mít klíč (id nebo když neni id tak třeba index)

neměl by se cyklus používat zároveň s s v-if, pokud chceme pokud chceme podmínku v loopu tak:

- měla by zabalit cyklus
- array (object), který loopujeme, bychom měli dát do šablony rovnou osekaný o prvky které v loopu nechceme, např přes computed property

### Podmínky

jako podmínky se používá buď

- v-if, v-else-if, v-else - úplně odstraňuje věci z domu
- v-show - jen mění display block / none

### Standartní atributy

Normální atributy se používají standartně jako v html, ale dají se použít s v-bind (:) direktivou

- `<input value="something"/>`
- `<input :value="variable"/>`

Dobrý to je třeba u dynamického bindování class.

- Co bych v jQuery dělal jak trouba přes `$('.some-class').toggleClass('different-class')`
- udělám ve vue jednoduše jako `<div class='some-class' :class= { 'different-class': variableControllingDifferentClass'}`
  - Najednou ovládám `different-class` pouze změnou proměnné a nemusím volat metodu (nebo pět)
 


