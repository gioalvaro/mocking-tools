import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { makeServer } from "./server";
Vue.config.productionTip = false;

makeServer();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
