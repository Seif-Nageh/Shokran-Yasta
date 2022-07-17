<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-6">
        <HeadLine>Frequently Asked Questions</HeadLine>
        <div class="accordion" id="accordionExample">
          <div
            class="accordion-item my-5 border-0 accordion-change"
            v-for="(question, index) in questions"
            :key="index"
          >
            <h2 :id="`Heading${index + 1}`">
              <button
                class="accordion-button accordion-change text-black"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#\collapse${index + 1}`"
                aria-expanded="true"
                :aria-controls="`collapse${index + 1}`"
              >
                <span class="text-primary pe-2 fw-bold">{{ index + 1 }}.</span>
                {{ question.ask }}
              </button>
            </h2>
            <div
              :id="`collapse${index + 1}`"
              class="accordion-collapse collapse"
              :class="{ show: index === 0 }"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-muted">
                {{ question.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="https://picsum.photos/250"
          alt="Shokran Yasta"
          class="w-100"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeadLine from "../Components/WebsiteHeadLine.vue";
export default {
  components: { HeadLine },
  data() {
    return {
      questions: [
        {
          ask: "How can I create a new account",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit accusamus, dolor voluptate tempore perspiciatis consequuntur temporibus quis. Recusandae harum neque id sint quam sunt architecto natus illo in esse?",
        },
        {
          ask: "How can I create a new account",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit accusamus, dolor voluptate tempore perspiciatis consequuntur temporibus quis. Recusandae harum neque id sint quam sunt architecto natus illo in esse?",
        },
        {
          ask: "How can I create a new account",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit accusamus, dolor voluptate tempore perspiciatis consequuntur temporibus quis. Recusandae harum neque id sint quam sunt architecto natus illo in esse?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.accordion-change {
  background-color: #ececec80;
  border-radius: 10px;
}
</style>
