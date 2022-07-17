<template>
  <HeadLine :class="'text-left fs-1 fw-bold'">
    Learn more and <br />
    make success the result
  </HeadLine>
  <div class="row py-4">
    <div class="col-12 col-md-8">
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"
        controls
        class="w-100 h-100"
      ></video>
    </div>
    <div class="col-md-4 d-flex flex-column justify-content-center px-5">
      <div class="pb-4" v-for="label in labelData" :key="label.count">
        <p class="m-0 text-primary fw-bolder fs-3">+{{ label.count }}K</p>
        <p class="m-0" v-html="label.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadLine from "../../Components/WebsiteHeadLine.vue";
export default {
  components: { HeadLine },
  data() {
    return {
      labelData: [
        {
          count: 5,
          text: "New student in<br />last 30 days",
        },
        {
          count: 50,
          text: "New student in<br />last 30 days",
        },
        {
          count: 150,
          text: "New student in<br />last 30 days",
        },
      ],
    };
  },
};
</script>

<style>
video {
  border-radius: 50px;
}
</style>
