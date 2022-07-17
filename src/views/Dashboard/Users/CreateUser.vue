<template>
  <div class="row">
    <div class="col-md-9 m-auto">
      <form>
        <div class="mb-3 row" v-for="input in inputs" :key="input">
          <label
            for="rollName"
            class="col col-form-label fw-bold fs-4 text-capitalize"
          >
            {{ input }}
          </label>
          <div class="col mx-auto">
            <input
              type="text"
              class="form-control"
              id="rollName"
              :placeholder="input"
              v-model="userBody[input]"
            />
          </div>
        </div>
        <div class="border border-2 rounded">
          <p class="fs-4 fw-bold">Days</p>
          <template v-if="this.$store.state.days">
            <div
              class="form-check-inline form-switch m-3"
              v-for="day in this.$store.state.days"
              :key="day.id"
            >
              <input
                class="form-check-input me-2"
                type="checkbox"
                role="switch"
                :value="day.day"
                v-model="userBody.day_id"
                :id="'check' + day.day"
              />
              <label class="form-check-label" :for="'check' + day.day">{{
                day.day
              }}</label>
            </div>
          </template>
        </div>
        <div class="border border-2 rounded">
          <p class="fs-4 fw-bold">Days</p>
          <template v-if="this.$store.state.days">
            <div
              class="form-check-inline form-switch m-3"
              v-for="day in this.$store.state.days"
              :key="day.id"
            >
              <input
                class="form-check-input me-2"
                type="checkbox"
                role="switch"
                :value="day.day"
                v-model="userBody.day_id"
                :id="'check' + day.day"
              />
              <label class="form-check-label" :for="'check' + day.day">{{
                day.day
              }}</label>
            </div>
          </template>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: ["name", "email", "phone"],
      userBody: {
        name: "",
        phone: "",
        email: "",
        role: "",
        day_id: [],
        start: [],
        end: [],
      },
    };
  },
  beforeMount() {
    if (!this.$store.state.token) {
      let cookieVal = document.cookie;
      const startToken = cookieVal.indexOf("token");
      const endToken = cookieVal.indexOf(";", startToken);
      if (endToken === -1) {
        return (this.$store.state.token = cookieVal
          .substring(startToken, cookieVal.length)
          .split("=")[1]);
      } else {
        return (this.$store.state.token = cookieVal
          .substring(startToken, endToken)
          .split("=")[1]);
      }
    }
  },
  async mounted() {
    await fetch(`${this.$store.state.apiUrl}/days`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: "Bearer " + this.$store.state.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.$store.state.days = data.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    if (!this.$store.state.roles) {
      await fetch(`${this.$store.state.apiUrl}/roles`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: "Bearer " + this.$store.state.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.$store.state.roles = data.data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  },
};
</script>
