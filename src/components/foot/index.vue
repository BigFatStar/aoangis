<template>
  <v-footer padless app absolute>
    <v-row justify="center" no-gutters>
      <v-col cols="8" md="6" offset-md="3" offset="2                                                                                                                 ">
        <v-btn
          color="73, 73, 73"
          text
          rounded
          class="mt-4 mx-0"
          v-for="item in links"
          :key="item.link"
          :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-col>
      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} —   <strong>敖岸测绘</strong>
        <v-row justify="center" no-gutters>
         <strong>敖岸测绘官网   赣ICP备2021000303号</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "首页概览", link: "/home" },
      { title: "新闻中心", link: "/news" },
      { title: "解决方案", link: "/solution" },
      { title: "关于我们", link: "/aboutUs" },
    ],
  }),
};
</script>