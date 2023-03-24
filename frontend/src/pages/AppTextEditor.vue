<template>
  <v-app id="inspire">
    <MainMenu />

    <v-main>
      <SampleEditor />
    </v-main>

    <v-footer app>
      <span>Copyright &copy; 2022 by shkim</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import SampleEditor from "../components/SampleEditor.vue";

export default {
  components: { MainMenu, SampleEditor },

  data: () => ({}),
};
</script>
