import Vue from "vue";
import AppPostInput from "./AppPostInput.vue";
import vuetify from "../plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(AppPostInput),
}).$mount("#app");
