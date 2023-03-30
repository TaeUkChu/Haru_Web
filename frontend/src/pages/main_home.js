import Vue from "vue";
import AppHome from "./AppHome.vue";
import vuetify from "../plugins/vuetify";

// export const Plugin = {
//   install(app) {
//     app.component("VideoBackground", AppHome);
//   },
// };

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(AppHome),
  install(app) {
    app.component("VideoBackground", AppHome);
  },
}).$mount("#app");
