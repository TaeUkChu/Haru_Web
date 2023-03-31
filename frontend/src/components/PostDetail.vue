<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10">
        <h1>{{ post.title }}</h1>
        <p class="subtitle">{{ post.owner }} | {{ post.modify_dt }}</p>
        <div>
          <v-chip
            class="ma-2 my-hover"
            outlined
            v-for="(tag, index) in post.tags"
            :key="index"
            @click="serverPage(tag)"
            >{{ tag }}</v-chip
          >
        </div>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <p class="content" style="white-space: pre-wrap">
            {{ post.content }}
          </p>
          <br />
          <!-- 이미지 들어가는 부분 -->
          <v-col class="image-container">
            <v-img id="image" :src="url"></v-img>
            <div id="pencil-container">
              <v-row>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="purple"
                  @click="serverPageImg()"
                  ><v-icon dark> mdi-pencil </v-icon></v-btn
                >
              </v-row>
              <p>이미지 새로 만들기</p>
            </div>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" lg="3">
        <v-card class="pa-2 mb-5" tile>
          <p>prev post</p>
          <h2
            v-if="post.prev"
            @click="fetchPostDetail(post.prev.id)"
            class="my-hover"
          >
            {{ post.prev.title }}
          </h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <p>next post</p>
          <h2
            v-if="post.next"
            @click="fetchPostDetail(post.next.id)"
            class="my-hover"
          >
            {{ post.next.title }}
          </h2>
        </v-card>
        <v-card class="pa-2" tile>
          <h2>Tag cloud</h2>
          <v-chip
            v-for="(tag, index) in tagCloud"
            :key="index"
            @click="serverPage(tag.name)"
            class="ma-2 my-hover"
            :color="tag.color"
            text-color="white"
          >
            <v-avatar left :class="tag.color + ' darken-4'">{{
              tag.count
            }}</v-avatar
            >{{ tag.name }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Failimg from "@/assets/images/fail.png";

export default {
  data: () => ({
    post: {},
    tagCloud: [],
    items: [],
    values: [],
    tag_str: "",
    url: "",
  }),

  created() {
    console.log("created()...");
    // const postId = location.pathname.split("/")[3] || 2;
    const postId = location.pathname.split("/")[3];
    // const params = new URL(location).searchParams;
    // const postId = params.get('id');
    this.fetchPostDetail(postId);
    this.fetchTagCloud();
  },

  methods: {
    fetchPostDetail(postId) {
      console.log("fetchPostDetail()...", postId);
      axios
        .get(`/api/post/${postId}/`)
        .then((res) => {
          console.log("POST DETAIL GET RES", res);
          this.post = res.data;
          if (this.post.check_img)
            this.url = `http://116.38.220.14/static/imges/${postId}.png`;
          else this.url = Failimg;
        })
        .catch((err) => {
          console.log("POST DETAIL GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    fetchTagCloud() {
      console.log("fetchTagCloud()...");
      axios
        .get("/api/tag/cloud/")
        .then((res) => {
          console.log("TAG CLOUD GET RES", res);
          this.tagCloud = res.data;
          // tag.weight
          this.tagCloud.forEach((element) => {
            if (element.weight === 3) element.color = "green";
            else if (element.weight === 2) element.color = "blue-grey";
            else if (element.weight === 1) element.color = "grey";
          });
        })
        .catch((err) => {
          console.log("TAG CLOUD GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    serverPage(tagname) {
      console.log("serverPage()...", tagname);
      location.href = `/blog/post/img/list/?tagname=${tagname}`;
      // location.href = `/post_list.html?tagname=${tagname}`;
    },
    serverPageImg() {
      const postId = location.pathname.split("/")[3];
      console.log("serverPage()...");
      location.replace(`/blog/post/${postId}/img`);
      // location.href = `/post_detail.html?id=${item.id}`;
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
#pencil-container {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  color: purple;
  margin: 10%;
}
.subtitle {
  color: gray;
}
.image-container {
  display: flex;
  justify-content: center;
  background-size: cover;
  background-image: url("@/assets/images/note.png");
}
#image {
  margin-left: 15%;
  margin-top: 15%;
  justify-content: center;
}
</style>
