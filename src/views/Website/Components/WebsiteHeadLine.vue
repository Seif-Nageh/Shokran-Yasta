<template>
  <p class="pb-5" :class="this.class" :style="cssStyle">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: "text-center fs-2 fw-bold",
    },
    width: {
      type: String,
      default: "250px",
    },
    height: {
      type: String,
      default: "45px",
    },
    bottom: {
      type: String,
      default: "5%",
    },
  },
  computed: {
    cssStyle() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--bottom": this.bottom,
      };
    },
  },
};
</script>

<style scoped>
p {
  position: relative;
}
p::before {
  content: "";
  position: absolute;
  bottom: var(--bottom);
  /* left: 35%; */
  width: var(--width);
  height: var(--height);
  border-top: 5px solid #fcb443;
  /* border-right: 3px solid red; */
  border-top-right-radius: 80%;
}
</style>
