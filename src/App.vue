<template>
  <v-app>
    <tabbar v-if="$store.state.isShow"></tabbar>
    <slidebar></slidebar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <foot v-if="$store.state.isShow"></foot>
  </v-app>
</template>

<script>
import tabbar from "@/components/tabbar";
import slidebar from "@/components/slidebar";
import foot from "@/components/foot";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  created: function () {
  },
  //监听路由变化，每次跳转路由都让页面回到最顶上
  watch: {
    $route: function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  methods: {
    ...mapMutations(["changePopUp"]),
  },
  components: {
    tabbar,
    slidebar,
    foot,
  },
};
</script>

<style lang="scss"></style>
