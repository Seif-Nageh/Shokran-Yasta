<template>
  <div class="container">
    <HeadLine>What Our Students Say</HeadLine>
    <Card></Card>
  </div>
  <div
    class="bg-primary text-white d-flex flex-column align-items-center text-center p-5"
    style="--bs-bg-opacity: 0.5"
  >
    <p class="fs-3 fw-bold">Book a session to determine your level</p>
    <p class="py-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est non
      gravida neque at purus. Auctor egestas nam felis dapibus.
    </p>
    <router-link to="/booking">
      <WebsiteButton :class="'bg-primary text-white'">Book Now</WebsiteButton>
    </router-link>
  </div>
</template>

<script>
import WebsiteButton from "./Components/WebsiteButton.vue";
import Card from "./Components/WebsiteCard.vue";
import HeadLine from "./Components/WebsiteHeadLine.vue";
export default {
  components: {
    WebsiteButton,
    Card,
    HeadLine,
  },
};
</script>
