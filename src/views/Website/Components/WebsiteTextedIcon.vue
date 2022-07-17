<template>
  <div class="d-flex pb-3" :class="this.class">
    <div
      class="icon me-3 rounded-circle d-flex justify-content-center align-items-center"
    >
      <Icon
        :class="'p-0'"
        :iconHeight="'50px'"
        :iconWidth="'50px'"
        :iconColor="'#245fc7'"
        :icon="this.icon"
      />
    </div>
    <p class="align-bottom m-0 text-primary">{{ this.name }}</p>
  </div>
</template>

<script>
import Icon from "./WebsiteIcon.vue";
export default {
  props: ["icon", "name", "class"],
  components: {
    Icon,
  },
};
</script>

<style scoped>
.icon {
  width: 85px;
  height: 85px;
  border: 1px dashed #245fc7;
  background-color: #245fc71a;
}
</style>
