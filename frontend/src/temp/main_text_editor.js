import Vue from "vue";
import AppTextEditor from "./AppTextEditor.vue";
import vuetify from "../plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(AppTextEditor),
}).$mount("#app");
