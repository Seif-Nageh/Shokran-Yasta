import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      apiUrl: "https://shukranyasta.egyptianitalianco.com/api",
      token: "",
      allPermissions: [],
      userPermissions: [],
      roles: {},
      days: [],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
