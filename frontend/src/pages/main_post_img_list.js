import Vue from "vue";
import AppPostImgList from "./AppPostImgList.vue";
import vuetify from "../plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(AppPostImgList),
}).$mount("#app");
