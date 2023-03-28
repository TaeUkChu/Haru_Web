<template>
  <v-app id="inspire">
    <!-- https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/docs/src/examples/v-navigation-drawer/prop-expand-on-hover.vue -->
    <MainMenu></MainMenu>

    <v-main>
      <PostInput />
    </v-main>
    <v-footer>
      <span>&copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import PostInput from "../components/PostInput.vue";

export default {
  components: { MainMenu, PostInput },

  data: () => ({ drawer: null }),
};
</script>
