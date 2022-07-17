<template>
  <div
    class="container d-flex justify-content-center align-items-center text-center"
  >
    <div class="card p-0" style="max-width: 20rem">
      <div class="card-header fs-1 text-primary">Shokran Yasta Admin</div>
      <div class="card-body">
        <h5 class="card-title fs-6 mb-5">Sign in to start your session</h5>
        <form @submit.prevent="HandelLogin">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              aria-describedby="basic-addon2"
              v-model="userData.phone"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
              v-model="userData.password"
            />
          </div>
          <button class="btn btn-primary my-5">Log In</button>
        </form>
        <a class="d-block text-start text-decoration-none"> Forget Password </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    async HandelLogin() {
      await fetch(`${this.$store.state.apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.userData),
      })
        .then((response) => response.json())
        .then((data) => {
          let date = new Date();
          date.setHours(date.getHours + 1);
          document.cookie = `token=${data.token};expires=${date}`;
          document.cookie = `permissions=${data.permissions};expires=${date}`;
          if (
            data.success &&
            (data.permissions[1] === "users.index" ||
              data.permissions[-1] === "interviews")
          ) {
            this.$router.replace({ name: "dashboard" });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
}
.card {
  margin: auto;
}
</style>
