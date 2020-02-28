<template>
  <div class="hello">
    <h1>{{ msg }} app</h1>
  </div>
</template>

<script>
export default {
  name: "VeryBasicComponent",
  props: {
    msg: String
  }
};
</script>
