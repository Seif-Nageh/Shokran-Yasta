<template>
  <span :style="cssProps" class="text-center" :class="this.class">
    <font-awesome-icon class="align-bottom" :icon="icon" />
  </span>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "tranparent",
    },
    icon: {
      type: String,
      default: "fa-solid fa-book-open",
    },
    bgShape: {
      type: String,
      default: "50%",
    },
    iconColor: {
      type: String,
      default: "#ffffff",
    },
    class: {
      type: String,
      default: "",
    },
    iconWidth: {
      type: String,
      default: "25px",
    },
    iconHeight: {
      type: String,
      default: "25px",
    },
  },
  computed: {
    cssProps() {
      return {
        "--bg-color": this.bgColor,
        "--bg-shape": this.bgShape,
        "--icon-color": this.iconColor,
        "--icon-width": this.iconWidth,
        "--icon-height": this.iconHeight,
      };
    },
  },
};
</script>

<style scoped>
span {
  background-color: var(--bg-color);
  border-radius: var(--bg-shape);
  color: var(--icon-color);
}
svg {
  width: var(--icon-width);
  height: var(--icon-height);
}
</style>
