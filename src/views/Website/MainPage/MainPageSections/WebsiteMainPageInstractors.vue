<template>
  <HeadLine :width="'175px'">Who We Are</HeadLine>
  <div
    id="carouselInstractor"
    class="carousel slide mb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselInstractor"
        :data-bs-slide-to="carousel.id"
        class="bg-primary"
        :class="carousel.active"
        aria-current="true"
        :aria-label="`Slide${carousel.id}`"
        v-for="carousel in carouselContent"
        :key="carousel.id"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item text-center"
        :class="carousel.active"
        v-for="carousel in carouselContent"
        :key="carousel.id"
      >
        <img
          :src="carousel.src"
          class="d-block w-md-75 m-auto"
          :alt="carousel.name"
        />
        <p class="fw-bold fs-4 pt-4">{{ carousel.name }}</p>
        <p class="text-secondary">{{ carousel.roll }}</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselInstractor"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon bg-primary rounded-circle p-md-4"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselInstractor"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon bg-primary rounded-circle p-md-4"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import HeadLine from "../../Components/WebsiteHeadLine.vue";
export default {
  components: { HeadLine },
  data() {
    return {
      carouselContent: [
        {
          src: "https://picsum.photos/600/250",
          name: "Ahmed Adel",
          roll: "Instractor",
          id: "0",
          active: "active",
        },
        {
          src: "https://picsum.photos/600/250",
          name: "Ahmed Adel",
          roll: "Instractor",
          id: "1",
          active: "",
        },
        {
          src: "https://picsum.photos/600/250",
          name: "Ahmed Adel",
          roll: "Instractor",
          id: "2",
          active: "",
        },
        {
          src: "https://picsum.photos/600/250",
          name: "Ahmed Adel",
          roll: "Instractor",
          id: "3",
          active: "",
        },
      ],
    };
  },
};
</script>

<style>
.carousel-indicators {
  bottom: -10%;
}
</style>
