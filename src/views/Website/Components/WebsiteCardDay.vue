<template>
  <div
    class="btn shadow px-5 px-md-4 px-lg-5 fw-bold"
    :class="{ 'btn-primary': isChecked }"
    @click="designClickHandeler"
  >
    <p class="m-0">{{ date }}</p>
    <p class="m-0">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["date", "name"],
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    designClickHandeler() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
