<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-5 mb-md-0">
          <p class="fs-3 fw-bold">Shokran Yasta</p>
          <p class="text-secondary pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit,
            a ipsam aut provident voluptas est assumenda, maxime commodi
            consectetur quos praesentium laboriosam libero tenetur adipisci
            nihil dolores officia iusto.
          </p>
          <a
            v-for="socialIcon in socialIcons"
            :key="socialIcon.id"
            :href="socialIcon.to"
          >
            <WebsiteIcon
              :bgColor="socialIcon.bgColor"
              :icon="socialIcon.icon"
              :class="'p-2 me-3'"
            />
          </a>
        </div>
        <div class="col-md-2 offset-md-2 col-6">
          <p class="fw-bold">Quick inks</p>
          <router-link
            class="d-block text-dark text-decoration-none pb-2"
            to="/"
          >
            Home
          </router-link>
          <router-link
            class="d-block text-dark text-decoration-none pb-2"
            :to="{ name: 'about' }"
          >
            About
          </router-link>
          <router-link
            class="d-block text-dark text-decoration-none pb-2"
            :to="{ name: 'faq' }"
          >
            FAQ
          </router-link>
          <router-link
            class="d-block text-dark text-decoration-none pb-2"
            :to="{ name: 'contact' }"
          >
            Contact Us
          </router-link>
        </div>
        <div class="col-md-2 offset-md-2 col-6">
          <p class="fw-bold">News Letter</p>
          <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-primary">
    <p class="text-white text-center py-1">
      2022 Copyright
      <span class="ms-auto">Seif Nageh</span>
    </p>
  </div>
</template>
<script>
import WebsiteIcon from "./Components/WebsiteIcon.vue";
export default {
  components: { WebsiteIcon },
  data() {
    return {
      socialIcons: [
        {
          bgColor: "#C13584",
          icon: "fa-brands fa-instagram",
          to: "",
          id: "1",
        },
        {
          bgColor: "#1DA1F2",
          icon: "fa-brands fa-twitter",
          to: "",
          id: "2",
        },
        {
          bgColor: "#0077B5",
          icon: "fa-brands fa-linkedin-in",
          to: "",
          id: "3",
        },
        {
          bgColor: "#3B5998",
          icon: "fa-brands fa-facebook-f",
          to: "",
          id: "4",
        },
      ],
    };
  },
};
</script>
