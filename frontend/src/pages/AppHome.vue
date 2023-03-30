<template>
  <v-app id="inspire">
    <MainMenu />
    <div class="background">
      <v-main>
        <HelloWorld />
      </v-main>
    </div>
    <v-footer app>
      <span>Copyright &copy; 2022 by shkim</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components: { MainMenu, HelloWorld },

  data: () => ({}),
};
</script>

<style scoped>
/* .background {
  background-image: url("../assets/diary.jpg");
  min-height: 100%;
  background-position: center;
  background-size: cover;
} */
/* #inspire > div > main > div {
  background-image: url("../assets/diary.jpg");
  min-height: 100%;
  background-position: center;
  background-size: cover;
}*/
</style>
