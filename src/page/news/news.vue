<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-img
        src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/news/smart.jpg?"
        :aspect-ratio="3"
        class="grey lighten-2 d-flex align-center"
      >
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
              <v-text-field
                class="white"
                flat
                dense
                hide-details="auto"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                solo-inverted
              ></v-text-field>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="d-flex">
          <v-icon>mdi-mailbox-outline</v-icon>
          <v-breadcrumbs :items="items" light>
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" md="6">
          <v-toolbar dense flat class="d-flex justify-sm-space-between justify-md-end">
            <v-toolbar-title class="mr-md-5">
              <v-btn>
                <v-icon>mdi-email-newsletter</v-icon>集团新闻
              </v-btn>
            </v-toolbar-title>
            <v-toolbar-title>
              <v-btn>
                <v-icon>mdi-microphone-variant</v-icon>媒体报道
              </v-btn>
            </v-toolbar-title>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <!-- 新闻列表组件 -->
    <newlist></newlist>

    <div class="d-flex justify-center align-center">
      <v-pagination
      v-model="page"
      :length="2"
    ></v-pagination>

    </div>
  </v-container>
</template>

<script>
import newlist from "./neslist-com";
export default {
  components: { newlist },
  data: () => ({
    items: [
      {
        text: "首页",
        disabled: false,
        href: "home",
      },
      {
        text: "新闻中心",
        disabled: false,
        href: "news",
      },
    ],
     page: 1,
    // toggleExclusive: undefined,
  })
};
</script>