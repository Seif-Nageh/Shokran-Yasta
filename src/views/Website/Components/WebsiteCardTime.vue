<template>
  <div
    class="btn btn-outline-dark px-5 position-relative"
    :class="{ 'btn-change': isChecked }"
    @click="designClickHandeler"
  >
    <span
      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary dis"
      :class="{ 'd-inline-block': isChecked }"
    >
      <font-awesome-icon icon="fa-solid fa-check" />
    </span>
    {{ time }}
  </div>
</template>

<script>
export default {
  props: ["time"],
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

<style scoped>
.btn-change {
  border: 1px solid #245dc74d;
  background-color: #245fc733;
}
.dis {
  display: none;
}
</style>
