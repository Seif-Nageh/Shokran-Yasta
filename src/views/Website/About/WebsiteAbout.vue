<template>
  <div class="container py-5">
    <HeadLine
      :class="'text-left fs-3 fw-bold'"
      :width="'120px'"
      :height="'30px'"
    >
      About Us
    </HeadLine>
    <p class="text-secondary pb-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis
      doloremque porro suscipit, voluptatum beatae cumque consequatur dolor ad
      repellendus repudiandae pariatur quaerat est hic corporis corrupti,
      possimus architecto repellat? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Recusandae voluptatem nisi atque labore dolor minus,
      reprehenderit repudiandae quod tempora cumque aspernatur excepturi?
      Doloremque omnis, ea eligendi provident nihil aspernatur necessitatibus.
    </p>
    <img src="https://picsum.photos/1000/400" class="w-100" />
    <div class="row py-5">
      <div class="col-md-6 d-flex flex-column justify-content-center p-5">
        <p class="text-secondary fs-4 fw-bold">When we start career</p>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt
          obcaecati labore blanditiis eligendi a accusamus nulla cum doloribus
          sit. Possimus neque ut magnam ad voluptatibus odit, placeat iure id.
        </p>
      </div>
      <div class="col-md-4 offset-md-2">
        <BackImg :backColor="'transparent'" :borderZIndex="'10'">
          <img
            src="https://picsum.photos/400"
            class="w-100 rounded px-3 pb-3"
          />
        </BackImg>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-md-4">
        <BackImg :backColor="'transparent'" :borderZIndex="'10'">
          <img
            src="https://picsum.photos/400"
            class="w-100 rounded px-3 pb-3"
          />
        </BackImg>
      </div>
      <div
        class="col-md-6 offset-md-2 d-flex flex-column justify-content-center p-5"
      >
        <p class="text-secondary fs-4 fw-bold">When we start career</p>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt
          obcaecati labore blanditiis eligendi a accusamus nulla cum doloribus
          sit. Possimus neque ut magnam ad voluptatibus odit, placeat iure id.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadLine from "../Components/WebsiteHeadLine.vue";
import BackImg from "../Components/WebsiteBackImg.vue";
export default {
  components: {
    HeadLine,
    BackImg,
  },
};
</script>

<style></style>
