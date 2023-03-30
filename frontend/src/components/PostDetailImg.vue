<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10">
        <h1>이미지 생성 페이지입니다.</h1>
        <h1>{{ post.title }}</h1>
        <p>{{ post.modify_dt }}, written by {{ post.owner }}</p>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <v-img img :src="url"></v-img>
          <br />
          <div>
            <tag_strong>HASHTAGS:</tag_strong>
            <v-col>
              <!-- keybert -->
              <!-- <v-row>
                <v-autocomplete
                  v-model="values"
                  v-if="post.hashtags"
                  :items="post.hashtags"
                  outlined
                  dense
                  chips
                  small-chips
                  label="해시태그를 골라주세요 (1~3)"
                  multiple
                ></v-autocomplete>
              </v-row> -->
            </v-col>
          </div>
          <!-- <img src="/static/imges/4.png"> -->
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" lg="3">
        <v-card class="pa-2" tile>
          <div>
            <h2>이미지 재생성</h2>

            <h2>뒤로가기</h2>
            <v-btn color="orange darken-2" dark @click="back">
              <v-icon dark left>arrow_back</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    post: {},
    items: [],
    values: [],
    tag_str: "",
    url: "",
  }),

  created() {
    console.log("created()...");
    const postId = location.pathname.split("/")[3];
    this.fetchPostDetail(postId);
  },

  methods: {
    fetchPostDetail(postId) {
      console.log("fetchPostDetailImg()...", postId);
      axios
        .get(`/api/post/${postId}/img/`)
        .then((res) => {
          console.log("POST DETAIL Img GET RES", res);
          this.post = res.data;
          this.url = `http://116.38.220.14/static/imges/${postId}.png`;
          // http://116.38.220.14/imgview/4.png
          // http://116.38.220.14/static/imges/4.png
        })
        .catch((err) => {
          console.log("POST DETAIL Img GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    back() {
      const postId = location.pathname.split("/")[3];
      location.href = `/blog/post/${postId}`;
    },

    serverPage(tagname) {
      console.log("serverPage()...", tagname);
      location.href = `/blog/post/list/?tagname=${tagname}`;
      // location.href = `/post_list.html?tagname=${tagname}`;
    },
  },
};
</script>

<style scoped>
.my-hover:hover {
  cursor: pointer;
  font-style: bold;
}
.text-center {
  color: DarkCyan;
}
</style>
