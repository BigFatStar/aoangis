/**
  *官网首页
 */
<template>
  <v-container fluid class="pa-0">
    <v-carousel
      cycle
      dark
      hide-delimiter-background
      :show-arrows="false"
      delimiter-icon="mdi-minus"
      height="100%"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" :aspect-ratio="15/7">
      </v-carousel-item>
    </v-carousel>

    <!-- 新闻中心组件 -->
    <news />
    <!-- 解决方案组件 -->
    <solutions />
  </v-container>
</template>
<script>
import news from "./news-com";
import solutions from "./solutions-com";
export default {
  name: "homepage",
  components: { news, solutions },
  data() {
    return {
      overlay: true,
      // 轮播图
      items: [
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/newyear.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/tiao.png?",
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
    };
  },
};
</script>
<style lang="scss" scoped>
</style>