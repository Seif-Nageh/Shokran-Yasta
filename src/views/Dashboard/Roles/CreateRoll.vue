<template>
  <div class="row">
    <div class="col-md-8 m-auto">
      <form @submit.prevent="handelCreateRoll">
        <div class="mb-3 row">
          <label for="rollName" class="col col-form-label fw-bold fs-4"
            >Roll Name</label
          >
          <div class="col ms-auto">
            <input
              type="text"
              class="form-control"
              id="rollName"
              placeholder="Instractor"
              v-model="rollBody.name"
            />
          </div>
        </div>
        <div class="border border-2 rounded">
          <p class="fs-4 fw-bold">Roll Permisions</p>
          <template v-if="this.$store.state.allPermissions">
            <div
              class="form-check-inline form-switch m-3"
              v-for="permision in this.$store.state.allPermissions"
              :key="permision.id"
            >
              <input
                class="form-check-input me-2"
                type="checkbox"
                role="switch"
                :value="permision.name"
                v-model="rollBody.permission"
                :id="'check' + permision.id"
              />
              <label class="form-check-label" :for="'check' + permision.id">{{
                permision.name
              }}</label>
            </div>
          </template>
        </div>
        <button class="btn btn-primary px-3 mt-4">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tokenCookie: "",
      rollBody: {
        name: "",
        permission: [],
      },
    };
  },
  beforeMount() {
    let cookieVal = document.cookie;
    const startToken = cookieVal.indexOf("token");
    const endToken = cookieVal.indexOf(";", startToken);
    if (endToken === -1) {
      return (this.tokenCookie = cookieVal
        .substring(startToken, cookieVal.length)
        .split("=")[1]);
    } else {
      return (this.tokenCookie = cookieVal
        .substring(startToken, endToken)
        .split("=")[1]);
    }
  },
  async mounted() {
    await fetch(`${this.$store.state.apiUrl}/permissions`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: "Bearer " + this.tokenCookie,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.$store.state.allPermissions = data.permissions;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  methods: {
    async handelCreateRoll() {
      await fetch(`${this.$store.state.apiUrl}/roles/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: "Bearer " + this.tokenCookie,
        },
        body: JSON.stringify(this.rollBody),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
