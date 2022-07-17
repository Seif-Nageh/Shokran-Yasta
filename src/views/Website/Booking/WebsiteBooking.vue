<template>
  <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5 col-md-6 py-5">
          <HeadLine :class="'text-left fs-2 fw-bold'"
            >Choose day and time</HeadLine
          >
          <p class="text-secondary">
            Choose the day and time of the interview to determine your level,
            knowing that it will be online via the Zoom application
          </p>
        </div>
        <div class="col-lg-5 col-md-6 p-5 offset-lg-2 d-none d-md-block">
          <BackImg></BackImg>
        </div>
        <div class="col-12">
          <HeadLine :class="'text-left fs-6'" :width="'80px'" :height="'35px'">
            Choose day
          </HeadLine>
          <div class="row">
            <div
              class="col-md-2 col-sm-4 col-12 text-center"
              v-for="day in days"
              :key="day.id"
            >
              <CardDay :date="day.date" :name="day.name" />
            </div>
          </div>
        </div>
        <div class="col-12 pt-5">
          <HeadLine :class="'text-left fs-6'" :width="'80px'" :height="'35px'">
            Choose time
          </HeadLine>
          <div class="row">
            <div
              class="col-md-2 col-sm-2 col-6 text-center"
              v-for="day in days"
              :key="day.id"
            >
              <CardTime :time="day.time" />
            </div>
          </div>
        </div>
        <div class="col-12 pt-5">
          <button class="btn btn-primary px-5">Confirm</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackImg from "../Components/WebsiteBackImg.vue";
import HeadLine from "../Components/WebsiteHeadLine.vue";
import CardDay from "../Components/WebsiteCardDay.vue";
import CardTime from "../Components/WebsiteCardTime.vue";
export default {
  components: {
    BackImg,
    HeadLine,
    CardDay,
    CardTime,
  },
  data() {
    return {
      isChecked: false,
      days: [
        {
          name: "sunday",
          date: "7",
          time: "09:00 AM",
          id: "1",
        },
        {
          name: "sunday",
          date: "7",
          time: "10:00 AM",
          id: "1",
        },
        {
          name: "sunday",
          date: "7",
          time: "11:00 AM",
          id: "1",
        },
        {
          name: "sunday",
          date: "7",
          time: "11:00 AM",
          id: "1",
        },
      ],
    };
  },
};
</script>
