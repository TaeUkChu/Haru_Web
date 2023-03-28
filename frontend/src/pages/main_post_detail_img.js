import Vue from "vue";
import AppPostDetailImg from "./AppPostDetailImg.vue";
import vuetify from "../plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(AppPostDetailImg),
}).$mount("#app");
