<template>
  <div class="notice" :style="'background-color:' + value.type">
    {{ value.content }}
  </div>
</template>

<script>
export default {
  name: "Notice",
  props: {
    value: {
      required: true,
      validator: prop => typeof prop === "object" || prop === null
    }
  },
  mounted() {
    setTimeout(() => {
      this.$emit("input", null);
    }, 4000);
  }
};
</script>

<style scoped lang="less">
.notice {
  position: fixed;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>
