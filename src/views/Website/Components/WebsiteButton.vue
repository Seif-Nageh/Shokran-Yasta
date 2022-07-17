<template>
  <button class="btn" :class="this.class">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["class"],
};
</script>
<style scoped>
button {
  width: 100px;
}
</style>
