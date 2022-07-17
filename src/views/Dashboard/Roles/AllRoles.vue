<template>
  <h2>Rolles</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="roll in this.$store.state.roles" :key="roll.id">
          <td>{{ roll.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (!this.$store.state.token) {
      let cookieVal = document.cookie;
      const startToken = cookieVal.indexOf("token");
      const endToken = cookieVal.indexOf(";", startToken);
      console.log(startToken);
      console.log(endToken);
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
    await fetch(`${this.$store.state.apiUrl}/roles`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: "Bearer " + this.$store.state.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.$store.state.roles = data.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>
