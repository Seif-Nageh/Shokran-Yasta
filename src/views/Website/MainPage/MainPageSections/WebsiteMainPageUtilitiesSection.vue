<template>
  <div class="row py-5">
    <TextedIcon
      v-for="(utility, index) in utilities"
      :key="index"
      :icon="utility.icon"
      :name="utility.name"
      :class="'col-12 col-sm-4 justify-content-sm-center align-items-center'"
    />
  </div>
</template>

<script>
import TextedIcon from "../../Components/WebsiteTextedIcon.vue";

export default {
  data() {
    return {
      utilities: [
        {
          name: "Expedite learning",
          icon: "fa-solid fa-book-open",
        },
        {
          name: "Open-source platform",
          icon: "fa-solid fa-mobile-screen-button",
        },
        {
          name: "Maximum efficiency",
          icon: "fa-solid fa-gears",
        },
      ],
    };
  },
  components: {
    TextedIcon,
  },
};
</script>
