<template>
  <v-app id="inspire">
    <MainMenu />

    <v-main>
      <PostDetailImg />
    </v-main>

    <v-footer app>
      <span>Copyright &copy; 2022 by shkim</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import PostDetailImg from "../components/PostDetailImg.vue";

export default {
  components: { MainMenu, PostDetailImg },

  data: () => ({}),
};
</script>
