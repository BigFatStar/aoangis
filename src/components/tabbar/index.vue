<template>
  <!-- 这是一个导航栏 -->
  <v-app-bar app flat hide-on-scroll>
    <v-container class="d-flex align-center" app fluid>
      <div>
        <v-img
          src="https://i.postimg.cc/Bv2zbY61/673920f2c38ebb983fda4c862478e0.png"
          aspect-ratio="1"
          width="56"
        ></v-img>
      </div>
      <v-toolbar dense flat max-width="500" class="d-none d-md-flex transparent pa-0">
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
        <v-toolbar-title>
          <v-btn to="enjoyus" text>
            {{ $t("lang.home.enjoyus") }}
            <!-- 加入我们-->
          </v-btn>
        </v-toolbar-title>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-menu auto :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">联系我们</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in phoneList" :key="index">
              <v-list-item-title>{{ item.name }}: {{item.phoneNumber}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-title>
      <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="handleChangeDrawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/newyear.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/shuju1.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/2.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/4.png?",
        },
      ],
      phoneList: [
        {
          name: '陈丽龙',
          phoneNumber: 17770086105
        },
        {
          name: '程鹏',
          phoneNumber: 18770060603
        },
        {
          name: '陶鸿霏',
          phoneNumber: 15661597910
        }
      ]
    };
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