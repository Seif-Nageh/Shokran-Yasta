<template>
  <MainSection />
  <div class="container">
    <UtilitiesSection />
    <CourseSection />
    <LearningThrough />
    <Instractors />
  </div>
</template>

<script>
import MainSection from "./MainPageSections/WebsiteMainPageMainSection.vue";
import UtilitiesSection from "./MainPageSections/WebsiteMainPageUtilitiesSection.vue";
import CourseSection from "./MainPageSections/WebsiteMainPageCourseSection.vue";
import LearningThrough from "./MainPageSections/WebsiteMainPageLearningThrough.vue";
import Instractors from "./MainPageSections/WebsiteMainPageInstractors.vue";
export default {
  components: {
    MainSection,
    UtilitiesSection,
    CourseSection,
    LearningThrough,
    Instractors,
  },
};
</script>
