<template>
  <v-container>
    <!-- 모든 일기장 리스트 -->
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="id"
      sort-desc="true"
      class="elevation-1"
      :items-per-page="10"
      @click:row="serverPage"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title> 일기장 전체 목록 </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click.stop="dialogOpen('create', {})"
            >일기 작성하기</v-btn
          >
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <!-- <template v-slot:item.actions="{ item }"> -->
        <v-icon small class="mr-2" @click.stop="dialogOpen('update', item)"
          >mdi-pencil</v-icon
        >
        <v-icon small @click.stop="deletePost(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList">Reset</v-btn>
      </template>
    </v-data-table>
    <!-- 일기 세부 작성 다이얼로그 -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
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
      { text: "이미지 여부", values: "check_img" },
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

    title_rules: [
      (value) => !!value || "필수 입력 사항입니다.",
      // value => (value && value.length >= 3) || 'Min 3 characters',
    ],
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
      postData.set("check_img", false);
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
        alert("로그인 해주세요!");
        return;
      }

      if (!confirm("삭제하시겠습니까?")) return;
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
</style>
