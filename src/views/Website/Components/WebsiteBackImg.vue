<template>
  <div class="back-color ms-auto d-block" :style="backStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backColor: {
      type: String,
      default: "#fbc443",
    },
    borderZIndex: {
      type: String,
      default: "-1",
    },
  },
  computed: {
    backStyle() {
      return {
        "--back-color": this.backColor,
        "--border-z-index": this.borderZIndex,
      };
    },
  },
};
</script>

<style>
.back-color {
  width: 100%;
  height: 100%;
  background-color: var(--back-color);
  border-radius: 20%;
  position: relative;
}

.back-color::before {
  content: "";
  z-index: var(--border-z-index);
  position: absolute;
  top: -10px;
  left: -3px;
  width: 100%;
  height: 100%;
  border-radius: 20%;
  border: 3px solid #000000;
  transform: rotate(0.99turn);
  overflow: hidden;
}
</style>
