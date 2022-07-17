<template>
  <div class="row">
    <div class="col-md-5 offset-md-1 offset-lg-1">
      <HeadLine
        :class="'text-left fs-1 fw-bold'"
        :width="'80%'"
        :height="'50px'"
        :bottom="'-3%'"
      >
        We Make Your Learning<br />Through Awesome
      </HeadLine>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero
        tenetur exercitationem dignissimos illo. Molestiae ad temporibus,
        quibusdam ipsum tenetur itaque laboriosam doloribus accusantium dolore
        sunt pariatur, non nostrum ullam.\
      </p>
      <p class="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero
        tenetur exercitationem dignissimos illo. Molestiae ad temporibus,
        quibusdam ipsum tenetur itaque laboriosam doloribus accusantium dolore
        sunt pariatur, non nostrum ullam.\
      </p>
    </div>
    <div class="col-md-5 col-lg-4 offset-md-1">
      <div v-for="badge in badges" :key="badge.icon" class="py-4 my-3">
        <Icon
          :bgColor="badge.bgColor"
          :iconColor="badge.iconColor"
          :icon="badge.icon"
          :bgShape="'5px'"
          :class="'p-3 me-3'"
        />
        {{ badge.text }}
      </div>
    </div>
  </div>
</template>

<script>
import HeadLine from "../../Components/WebsiteHeadLine.vue";
import Icon from "../../Components/WebsiteIcon.vue";
export default {
  components: {
    HeadLine,
    Icon,
  },
  data() {
    return {
      badges: [
        {
          icon: "fa-solid fa-video",
          text: "Over 5K VIdeo Courses",
          bgColor: "#2fc97333",
          iconColor: "#2fc973",
        },
        {
          icon: "fa-solid fa-certificate",
          text: "Best Instructors Courses",
          bgColor: "#f1474733",
          iconColor: "#f14747",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          text: "Over 30K Active Student",
          bgColor: "#ffc97833",
          iconColor: "#ffc978",
        },
      ],
    };
  },
};
</script>

<style></style>
