<template>
  <v-container fluid class="pa-0">
    <div style="height:65vh">
      <v-carousel
        cycle
        dark
        hide-delimiter-background
        :show-arrows="false"
        delimiter-icon="mdi-minus"
        :aspect-ratio="15 / 7"
        height="100%"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" :aspect-ratio="15 / 7"></v-carousel-item>
      </v-carousel>
    </div>
    <!-- 新闻中心组件 -->
    <news />
    <!-- 解决方案组件 -->
    <solutions />
    <v-card max-width="374" class="popUp" v-if="$store.state.showCard">
      <v-card-actions class="float-right" @click="handleCardHide">
        <v-icon>mdi-close-thick</v-icon>
      </v-card-actions>
      <v-card-title >敖岸欢迎您</v-card-title>
      <v-card-text>您可以通过右下方邮件联系我们，或通过网页右上方的联系电话联系我们</v-card-text>
      <v-card-actions>
      </v-card-actions>
    </v-card>
    <div id="contact_us" class="float-right">
      <v-menu v-model="menu" :close-on-content-click="false" :offset-y="true" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="indigo"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-message</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text class="grey lighten-2">联系我们</v-card-text>
              <v-textarea class="mb-n6" v-model="name" no-resize rows="1" required :rules="nameRules" label="姓名"></v-textarea>
              <v-textarea class=" mb-n6" v-model="tel" no-resize rows="1" required :rules="telRules" label="电话"></v-textarea>
              <v-textarea label="内容" no-resize rows="5" v-model="content" required :rules="contentRules"></v-textarea>
            <v-card-actions>
              <v-btn @click="submit" :disabled="isDisabled">
                提交
              </v-btn>
              <v-btn @click="reset">
                取消
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-menu>
    </div>
  </v-container>
</template>
<script>
import news from "./news-com";
import solutions from "./solutions-com";
import { mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
  },
  name: "homepage",
  components: { news, solutions},
  data() {
    return {
      dialog: false,
      name: "",
      tel: "",
      valid: "",
      //   text:'',
      content: "",
      selectedItem: 0,
      disabled: false,
      overlay: true,
      // 轮播图
      items: [
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/newyear.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/1111.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/bt.png?",
        },
        {
          src:
            "https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/4.png?",
        },
      ],
      showCard: this.showCard,
      nameRules: [(v) => !!v || "此选项必填"],
      contentRules: [(v) => !!v || "此选项必填"],
      telRules: [(v) => !!v || "此选项必填"],
      menu: false
    };
  },
  computed: {
    isDisabled() {
      let flag = true;
      if (!this.name || !this.tel || !this.content) {
        flag = true;
      } else {
        flag = false;
      }
      return flag;
    },
  },
  methods: {
    ...mapMutations(["changePopUp"]),
    handleCardHide() {
      this.changePopUp();
    },
    submit() {
      this.$refs.form.validate();
      axios({
        method: "post",
        url: "https://www.aoangis.com/api/mail/sendmail",
        // responseType:'stream',
        data: {
          name: this.name,
          phone: this.tel,
          content: this.content,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          alert("提交成功");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style lang="scss" scoped>
.popUp {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#contact_us{
  position:sticky;
  top:100px;
}
</style>
