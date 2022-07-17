<template>
  <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5 py-5 col-6">
          <span class="like-button py-2 px-1 text-primary rounded fs-6">
            English test level
          </span>
          <p class="fs-3 fw-bold py-4">
            Book an interview to determine the level, it will change your
            perception of <span class="text-warning fw-normal">English</span>
          </p>
          <router-link to="/booking">
            <WebsiteButton :class="'btn-primary p-1'">
              Get Started
            </WebsiteButton>
          </router-link>
        </div>
        <div class="col-lg-5 p-2 offset-lg-2 col-6 d-md-block">
          <BackImg class="pt-5">
            <img
              src="https://picsum.photos/200"
              class="w-75 h-75 m-auto d-flex"
          /></BackImg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WebsiteButton from "../../Components/WebsiteButton.vue";
import BackImg from "../../Components/WebsiteBackImg.vue";
export default {
  components: {
    WebsiteButton,
    BackImg,
  },
};
</script>

<style scoped>
section {
  background-color: #245fc71a;
}
.like-button {
  background-color: #245fc733;
}
</style>
