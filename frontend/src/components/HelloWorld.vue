<template>
  <v-container class="pa-4 text-center">
    <div class="Text title">
      <v-row class="header-container">
        <div class="logo_img_cat"></div>
        <div class="logo_img_foot"></div>
        <p class="text-center Text" id="HomeText">하루 자국</p>
      </v-row>
    </div>
    <!-- 첫 번째 화면 : 액자 테이블-->
    <v-row class="fill-height" align="center" justify="center">
      <template>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img :src="item.img" height="225px">
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p
                        id="content"
                        class="ma-10 font-weight-bold font-italic text-center"
                      >
                        {{ item.text }}
                      </p>
                      <p
                        id="tag"
                        class="text-caption font-weight-medium font-italic text-bottom"
                      >
                        {{ item.tag }}
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
    <div class="sub-container">
      <div class="logo_img_foot"></div>
    </div>
    <!-- 비디오 플레이어 -->
    <!-- 관련 링크 https://www.npmjs.com/package/vue-responsive-video-background-player -->
    <!-- :src="require(`@/assets/videos/비오는날2.mp4`)" -->

    <!-- 두 번째 화면 : 문구 -->
    <div>
      <div class="sub-container">
        <div id="rain-gif">
          <div class="Text content-gif">
            <br />
            <p>몸도 마음도 지친 하루…</p>
            <br />
            <p>하루 하루 있었던 일을 기록하고 싶지만</p>
            <br />
            <p>펜 하나 까딱할 힘도 없을 때</p>
            <br />
            <p>침대에 누워 오늘 하루 있었던 일들을</p>
            <p>하루자국에이야기해주세요</p>
            <br />
            <p>하루 자국이 한편의 그림일기로 만들어 드릴게요.</p>
          </div>
        </div>
      </div>
      <!-- <video-background
        :src="require(`@/assets/videos/비오는날2.mp4`)"
        :poster="require(`@/assets/images/cat.png`)"
        :sources="[
          { src: '@/assets/videos/비오는날2.mp4', res: 991, autoplay: true },
          {
            src: '@/assets/videos/하루자국_intro.mp4',
            res: 575,
            autoplay: true,
            poster: '@/assets/images/cat.png',
          },
        ]"
        style="max-height: 400px; height: 100vh"
      >
        <h1 style="color: white">Hello welcome!</h1>
      </video-background> -->
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "2023.03.21",
        text: "대학 축제에 나훈아가 와서 공연했어! 대박 존잼!!!!",
        tag: "# 축제 # 나훈아 # 공연.",
        img: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
      },
      {
        title: "2023.03.20",
        text: `티켓이 생겨서 처음으로 밴드 보러 갔어. 일렉기타 완전 좋았어. 행복해`,
        tag: "# 밴드, # 행복 # 일렉기타",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      },
      {
        title: "2023.03.19",
        text: "와 하늘이 너무 예뻐 마치 꿈나라 같아.",
        tag: "# 하늘 # 예뻐 # 꿈나라",
        img: "https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80",
      },

      {
        title: "2023.03.18",
        text: "여자친구랑 고양이 카페에서 고양이랑 뒹굴뒹굴 하루종일 놀았다. 고양이 최고",
        tag: "# 고양이 # 카페 # 여자친구",
        img: "https://th.bing.com/th/id/OIP.emqIME5C3-k5aQZMAV8w2AHaFj?w=228&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        title: "2023.03.17",
        text: "첫 면접에서 떨어졌다. 굉장히 우울하다. 꼭 붙고싶었는데.. 다음 번엔 더 열심히 준비해야겠다.",
        tag: "# 첫 면접 # 우울하다 # 떨어졌다.",
        img: "https://www.thebalancecareers.com/thmb/cKbQZLWHbj_2LmQSt-3KY3JmoH0=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/rejection-letter-sample-1919097-Final-edit-4a8b4a0963184890b7e3884f022aeda5.jpg",
      },

      {
        title: "2023.03.15",
        text: "9년간 함께했던 포피가 무지개다리를 건넜다.. 너무 슬프다... 그곳에선 꼭 행복해줘..",
        tag: "# 포피 # 무지개 다리 # 너무 슬프다",
        img: "https://th.bing.com/th/id/OIP.VNR428DrWm5WY_pCl7ohDgHaEO?w=285&h=180&c=7&r=0&o=5&pid=1.7",
      },
    ],

    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap");
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
#tag {
  background-color: black;
  bottom: 30px;
  position: relative;
}

.Text {
  font-family: "Black And White Picture", sans-serif;
}

#HomeText {
  font-size: 60px;
}
#content {
  font-size: 30px;
}
.logo_img_foot {
  background-color: red;
  width: 1000px;
  height: 100px;
  background-image: url("@/assets/images/사람발바닥.png");
  background-repeat: repeat-x;
  background-size: contain;
}
.logo_img_cat {
  width: 100px;
  height: 100px;
  background-image: url("@/assets/images/고양이 그림자.png");
  background-size: contain;
}
.header-container {
  display: flex;
  justify-content: flex-end;
}
.sub-container {
  display: flex;
  justify-content: center;
}
#rain-gif {
  background-color: red;
  background-image: url("@/assets/images/비오는날2.gif");
  background-size: cover;
  width: 100%;
  height: 500px;
}

.content-gif {
  width: 40%;
  height: 100%;
  justify-content: content-left;
}
.content-gif p {
  font-size: 30px;
  text-align: left;
  text-indent: 1em;
}
</style>
