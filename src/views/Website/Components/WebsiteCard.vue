<template>
  <div class="my-3">
    <div class="row mx-auto my-auto justify-content-center">
      <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div
            class="carousel-item"
            v-for="(item, index) in items"
            :key="index"
            :class="item.active"
          >
            <div class="col-md-4 px-3">
              <div class="card p-5">
                <p>
                  {{ item.description }}
                </p>
                <div class="d-flex align-items-center">
                  <img
                    :src="item.img"
                    class="w-25 rounded-circle img-thumbnail"
                    alt="user"
                  />
                  <p class="w-100 m-0 p-3 fw-bold">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev bg-primary"
          href="#recipeCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next bg-primary"
          href="#recipeCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "https://picsum.photos/200",
          name: "Aya Mohammed",
          description:
            "“The course is easy to understanr and mentor is cool making my learning experience very enjoyable ”",
          active: "active",
        },
        {
          img: "https://picsum.photos/200",
          name: "Aya Mohammed",
          description:
            "“The course is easy to understanr and mentor is cool making my learning experience very enjoyable ”",
          active: "",
        },
        {
          img: "https://picsum.photos/200",
          name: "Aya Mohammed",
          description:
            "“The course is easy to understanr and mentor is cool making my learning experience very enjoyable ”",
          active: "",
        },
        {
          img: "https://picsum.photos/200",
          name: "Aya Mohammed",
          description:
            "“The course is easy to understanr and mentor is cool making my learning experience very enjoyable ”",
          active: "",
        },
      ],
    };
  },
  mounted() {
    let items = document.querySelectorAll("#recipeCarousel .carousel-item");
    items.forEach((el) => {
      const minPerSlide = 3;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(40%);
  }

  .carousel-inner .carousel-item-start.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-40%);
  }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
  transform: translateX(0);
}
.carousel-control-prev {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  top: 45%;
}
.carousel-control-next {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  top: 45%;
}
</style>
