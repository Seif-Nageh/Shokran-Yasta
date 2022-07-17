<template>
  <div class="container pb-5">
    <div class="row py-5">
      <div class="col-md-6">
        <HeadLine :class="'text-left fs-3 fw-bold m-0'">Contact Us</HeadLine>
        <p class="fs-4 text-muted">Feel Free To Contact Us</p>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control bg-light border-0"
            id="floatingInput"
            placeholder="Name"
          />
          <label for="floatingInput">
            <font-awesome-icon icon="fa-solid fa-user-pen" class="me-3" />Name
          </label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control bg-light border-0"
            id="floatingInput"
            placeholder="E-Mail"
          />
          <label for="floatingInput">
            <font-awesome-icon icon="fa-solid fa-envelope" class="me-3" />E-Mail
          </label>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control bg-light border-0"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea" class="text-muted">Your Subject</label>
        </div>
        <WebsiteButton :class="'btn-primary mt-5'">Send</WebsiteButton>
      </div>
      <div class="col-md-6 p-md-5 pt-5 h-100">
        <BackImg class="h-50 w-100 mx-auto d-flex">
          <img src="https://picsum.photos/300" class="w-75 mx-auto" />
        </BackImg>
        <TextedIcon
          v-for="(utility, index) in utilities"
          :key="index"
          :icon="utility.icon"
          :name="utility.name"
          :class="'mx-auto pt-3 ms-md-5 ps-5 align-items-center'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeadLine from "../Components/WebsiteHeadLine.vue";
import BackImg from "../Components/WebsiteBackImg.vue";
import WebsiteButton from "../Components/WebsiteButton.vue";
import TextedIcon from "../Components/WebsiteTextedIcon.vue";
export default {
  components: { HeadLine, BackImg, TextedIcon, WebsiteButton },
  data() {
    return {
      utilities: [
        {
          name: "cario , Egypt",
          icon: "fa-solid fa-book-open",
        },
        {
          name: "+20 123 456 789",
          icon: "fa-solid fa-mobile-screen-button",
        },
        {
          name: "mail@mail.com",
          icon: "fa-solid fa-gears",
        },
      ],
    };
  },
};
</script>

<style scoped>
#floatingTextarea {
  height: 300px;
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .w-100 {
    width: 100%;
  }
}

/* // Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  ...;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  ...;
}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  ...;
} */
</style>
