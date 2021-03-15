import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//import { makeServer } from "./server";
import { Server, Response } from "miragejs";
Vue.config.productionTip = false;

//makeServer();
let server = new Server();

server.get("api/v1/desserts", () => {
  return {
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      }
    ]
  };
});
server.get("api/v1/dessert/:id", (schema, request) => {
  if (request.params.id == 3) {
    return new Response(
      403,
      { some: "header" },
      { errorMsg: "You are not allowed to access this resource" }
    );
  }
  return {
    dessert: {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0
    }
  };
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
