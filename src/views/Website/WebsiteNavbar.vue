<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand text-primary" to="/">
        Shokran Yasta
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item pe-5">
            <router-link
              class="nav-link"
              exact-active-class="border-bottom border-primary text-primary"
              to="/"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link
              class="nav-link"
              exact-active-class="border-bottom border-primary text-primary"
              :to="{ name: 'about' }"
            >
              About Us
            </router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link
              class="nav-link"
              exact-active-class="border-bottom border-primary text-primary"
              :to="{ name: 'contact' }"
            >
              Contact Us
            </router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link
              class="nav-link"
              exact-active-class="border-bottom border-primary text-primary"
              :to="{ name: 'faq' }"
            >
              Help Center
            </router-link>
          </li>
          <li class="nav-item pe-5 mb-3 mb-lg-0">
            <WebsiteButton
              :class="'btn-outline-primary'"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </WebsiteButton>
            <Modal :id="'loginModal'"></Modal>
          </li>
          <li class="nav-item pe-5">
            <WebsiteButton :class="'btn-primary'">Sign Up</WebsiteButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import WebsiteButton from "./Components/WebsiteButton.vue";
import Modal from "./Components/WebsiteModal.vue";
export default {
  components: { WebsiteButton, Modal },
};
</script>

<style scoped>
nav {
  text-align: start;
}
.nav-link {
  display: inline-block;
}
</style>
