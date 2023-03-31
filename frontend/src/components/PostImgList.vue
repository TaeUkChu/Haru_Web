<template>
  <v-container>
    <!-- 사진 일기장 리스트 -->
    <div>
      <v-row class="fill-height" align="center" justify="center">
        <template>
          <span v-if="tagname" class="body-1 font-italic ml-3"
            >({{ tagname }}로 태그된 일기)</span
          >
          <v-col
            v-for="item in posts.slice().reverse()"
            :key="item.id"
            cols="6"
          >
            <h2>No.{{ item.id }} | {{ item.owner }}</h2>
            <h1>{{ item.create_dt }}</h1>
            <v-hover v-slot="{ hover }">
              <v-card
                id="image_card"
                @click="serverPage(item)"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <!-- :src="
                    require(`http://116.38.220.14/static/imges/${postId}.png`)
                  " -->
                <v-img
                  v-if="item.check_img"
                  :src="`http://116.38.220.14/static/imges/${item.id}.png`"
                  alt="이미지가 아직 생성되지 않았습니다."
                  height="225px"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.create_dt }}
                      </p>

                      <div>
                        <p
                          id="content"
                          class="ma-10 font-weight-bold font-italic text-center"
                        >
                          {{ item.title }}
                        </p>
                        <p
                          id="tag"
                          class="text-caption font-weight-medium font-italic text-bottom"
                        >
                          {{ item.tags }}
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <v-img v-else :src="default_url" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.create_dt }}
                      </p>

                      <div>
                        <p
                          id="content"
                          class="ma-10 font-weight-bold font-italic text-center"
                        >
                          {{ item.title }}
                        </p>
                        <p
                          id="tag"
                          class="text-caption font-weight-medium font-italic text-bottom"
                        >
                          {{ item.tags }}
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </div>
    <div id="pencil">
      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="cyan"
        @click.stop="dialogOpen('create', {})"
        ><v-icon dark> mdi-pencil </v-icon></v-btn
      >
      <p>일기 쓰기</p>
    </div>
    <!-- 일기 세부 작성 다이얼로그 -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card class="dialog">
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-form id="post-form" ref="postForm">
            <!-- <v-text-field
              label="ID"
              name="id"
              v-model="editedItem.id"
              readonly
            ></v-text-field> -->
            <v-text-field
              label="일기 제목"
              name="title"
              v-model="editedItem.title"
              :rules="title_rules"
              hide-details="auto"
            ></v-text-field>
            <!-- <v-text-field
              label="DESCRIPTION"
              name="description"
              v-model="editedItem.description"
            ></v-text-field> -->
            <v-select
              v-model="editedItem.weather"
              :items="weather_states"
              name="weather"
              menu-props="auto"
              label="오늘의 날씨"
              hide-details
              :prepend-icon="icon"
              filled
            ></v-select>
            <!-- <v-text-field
              label="오늘의 기분"
              name="emotion"
              v-model="editedItem.emotion"
            ></v-text-field> -->
            <v-select
              v-model="editedItem.emotion"
              :items="emotion_states"
              name="emotion"
              menu-props="auto"
              label="오늘의 기분"
              hide-details
              :prepend-icon="icon"
              filled
            ></v-select>
            <v-textarea
              outlined
              label="일기 내용"
              name="content"
              v-model="editedItem.content"
            ></v-textarea>
            <!-- <v-text-field
              label="OWNER"
              name="owner"
              v-model="editedItem.owner"
              readonly
            ></v-text-field> -->
            <v-text-field
              label="태 그"
              name="tags"
              v-model="editedItem.tags"
              hint="콤마(,) 후 띄어쓰기를 하면 태그가 여러개 만들어져요"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import EventBus from "./event_bus";
import Failimg from "@/assets/images/fail.png";

export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "작성일", value: "create_dt" },
      { text: "제 목", value: "title" },
      // { text: "요 약", value: "description" },
      { text: "날 씨", value: "weather" },
      { text: "기 분", value: "emotion" },
      { text: "수정일", value: "modify_dt" },
      { text: "작성자", value: "owner" },
      { text: "이미지 체크", value: "check_img" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    posts: [],
    tagname: "",
    editedIndex: -1,
    editedItem: {},
    actionKind: "",
    weather_states: ["맑음", "비", "안개", "눈", "흐린"],
    emotion_states: ["최고", "기쁨", "보통", "슬픔", "최악"],
    me: { username: "Anonymous" },
    default_url: Failimg,

    title_rules: [
      (value) => !!value || "필수 입력 사항입니다.",
      // value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),

  computed: {
    formTitle() {
      // return this.editedIndex === -1 ? "Create Item" : "Update Item";
      if (this.actionKind === "create") return "일기 작성";
      else return "Update Item";
    },
  },

  created() {
    const params = new URL(location).searchParams;
    // const paramTag = params.get('tagname');
    this.tagname = params.get("tagname");
    this.fetchPostList();

    EventBus.$on("me_change", (val) => {
      this.me = val;
    });
  },

  methods: {
    fetchPostList() {
      console.log("fetchPostList()...", this.tagname);

      let getUrl = "";
      if (this.tagname) getUrl = `/api/post/list/?tagname=${this.tagname}`;
      else getUrl = "/api/post/list/";

      axios
        .get(getUrl)
        .then((res) => {
          console.log("POST LIST GET RES", res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("POST LIST GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    serverPage(item) {
      console.log("serverPage()...", item);
      location.href = `/blog/post/${item.id}/`;
      // location.href = `/post_detail.html?id=${item.id}`;
    },

    dialogOpen(actionKind, item) {
      console.log("dialogOpen()...", actionKind, item);
      if (this.me.username === "Anonymous") {
        alert("Please login first !");
        return;
      }

      this.actionKind = actionKind;
      if (actionKind === "create") {
        this.editedIndex = -1;
        this.editedItem = {};
      } else {
        this.editedIndex = this.posts.indexOf(item);
        this.editedItem = Object.assign({}, item);
      }
      this.dialog = true;
    },

    cancel() {
      console.log("cancel()...");
      this.dialog = false;
    },

    save() {
      console.log("save()...");
      if (this.actionKind === "create") this.createPost();
      else this.updatePost();
      this.dialog = false;
    },

    createPost() {
      console.log("createPost()...");
      const postData = new FormData(document.getElementById("post-form"));
      axios
        .post("/api/post/create/", postData)
        .then((res) => {
          console.log("CREATE POST POST RES", res);
          this.posts.push(res.data);
        })
        .catch((err) => {
          console.log("CREATE POST POST ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    updatePost() {
      console.log("updatePost()...");
      const postData = new FormData(document.getElementById("post-form"));
      postData.set("owner", this.me.id);
      axios
        .post(`/api/post/${this.editedItem.id}/update/`, postData)
        .then((res) => {
          console.log("UPDATE POST POST RES", res);
          this.posts.splice(this.editedIndex, 1, res.data);
        })
        .catch((err) => {
          console.log("UPDATE POST POST ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    deletePost(item) {
      console.log("deletePost()...", item);
      if (this.me.username === "Anonymous") {
        alert("Please login first !");
        return;
      }

      if (!confirm("Are you sure to delete ?")) return;
      axios
        .delete(`/api/post/${item.id}/delete/`)
        .then((res) => {
          console.log("DELETE POST DELETE RES", res);
          const index = this.posts.indexOf(item);
          this.posts.splice(index, 1);
        })
        .catch((err) => {
          console.log("DELETE POST DELETE ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
  },
};
</script>

<style scoped>
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
#v-image_card {
  transition: opacity 0.4s ease-in-out;
}

#v-image_card:not(.on-hover) {
  opacity: 0.6;
}
#content {
  font-size: 30px;
}

#tag {
  background-color: black;
  bottom: 30px;
  position: relative;
  text-align: center;
}
#pencil {
  position: fixed;
  text-align: center;
  bottom: 100px;
  right: 100px;
  color: "cyan";
}

.dialog {
  transition: opacity 0.4s ease-in-out;
}
</style>
