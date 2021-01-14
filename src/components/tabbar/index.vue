<template>
  <!-- 这是一个导航栏 -->
  <v-app-bar app flat hide-on-scroll>
    <v-container class="d-flex align-center" app fluid >
      <!-- <div>{{$store.state.login}}</div> -->
      <div>
        <v-img
          src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/logo.png?Expires=1610618010&OSSAccessKeyId=TMP.3KhjyNezPEPQvqBw86eX6FLsnVU934q2bwQMvKstH3Ga6BhRkKxJRBXS21ffDyxxNL8C6VNULXYka96xSstY4QkMXCyFH9&Signature=zRBRqSberj%2FGq7%2Fl7uapZUnLcKY%3D&versionId=CAEQCxiBgMDq7bKAuBciIGM3MjI2Yzk2MWFhYzRkNDg4M2JmMzllNzRmYTg1ODkx&response-content-type=application%2Foctet-stream"
          aspect-ratio="1"
          width="56"
        ></v-img>
      </div>
      <v-toolbar
        dense
        flat
        max-width="500"
        class="d-none d-md-flex transparent"
      >
        <v-toolbar-title>
          <v-btn to="home" text>
            {{ $t("lang.home.homeOverview") }}
            <!-- 首页概括 -->
          </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-btn to="news" text>
            {{ $t("lang.home.newCenter") }}
            <!-- 新闻中心 -->
          </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-btn to="solution" text>
            {{ $t("lang.home.totalSolution") }}
            <!-- 解决方案 -->
          </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-btn to="aboutUs" text>
            {{ $t("lang.home.aboutUs") }}
            <!-- 关于我们-->
          </v-btn>
        </v-toolbar-title>
      </v-toolbar>
      <v-spacer></v-spacer>
      <!-- 搜索框 -->
      <!-- <v-text-field
        class="white"
        flat
        dense
        hide-details="auto"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field> -->
      <!-- 切换语言 -->
      <!-- <v-btn v-on:click="changeLangEvent" text class="d-none d-sm-flex">
        {{ $t("lang.home.cutLanguage") }}
        
      </v-btn> -->
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click.stop="handleChangeDrawer"
      ></v-app-bar-nav-icon>
      <!-- <div class="d-none d-md-flex"><v-btn text to="login">登陆</v-btn><v-btn text to="auth">注册</v-btn></div> -->
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  
  methods: {
    changeLangEvent() {
      if (this.$i18n.locale === "zh-CN") {
        this.$i18n.locale = "en-US"; //关键语句
        console.log("en-US");
      } else {
        this.$i18n.locale = "zh-CN"; //关键语句
        console.log("zh-CN");
      }
    },
    //改变navigation-drawer显示和隐藏的函数
    handleChangeDrawer() {
      this.$store.commit("changeDrawer");
    },
  },
};
</script>