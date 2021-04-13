<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-h5 text-sm-h4 text-md-h3 transition-swing" style="text-align: center">
          新闻中心 <span>NEWS</span>
        </h2>
      </v-col>
    </v-row>
      <!-- 侧边栏 -->
    <div id="slider">
    <v-row>
    <v-card >
    <v-form  ref="form" v-model="valid" lazy-validation>
        
        <v-card-text   class="grey lighten-2 "
            >发送邮件
            </v-card-text>

     <v-container fluid>
        <v-textarea class=" mb-n6"
      v-model="name"
      no-resize
      rows="1"
      required
      :rules="nameRules"
      label="姓名"
    ></v-textarea>
      </v-container>

       <v-container fluid>
        <v-textarea class=" mb-n6"
      v-model="tel"
      no-resize
      rows="1"
      required
      :rules="telRules"
      label="电话"
    ></v-textarea>
      </v-container>

      <v-container fluid>
    <v-textarea
      label="内容"
       no-resize
      rows="5"
      v-model="content"
      required
      :rules="contentRules"
    ></v-textarea>
  </v-container>

    <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn
      class="mr-4"
      @click="submit"
 :disabled="isDisabled"
    >
      提交
    </v-btn>
    <v-btn @click="reset">
      取消
    </v-btn>
        </v-card-actions>
  </v-form >
      </v-card> 
  </v-row>
<v-row >
    <div id="btn">
         <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          联系我们
        </v-btn>
      </template>
      <span>电话：18970937294<br>邮箱：</span>
    </v-tooltip>
    </div>
 <div class="text-center d-flex align-center justify-space-around">
    <v-tooltip left>
      <span>389142261@qq.com</span>
    </v-tooltip>
  </div>
</v-row>

</div>

    <v-row>
      <!-- 主图片 -->
      <v-col cols="12" sm="6" md="6" lg="4" >
        <v-img
          :aspect-ratio="16 / 9"
          src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/news/1.png?"
        ></v-img>
        <h3 class="mx-5 title my-16 text-h5 text-sm-h4">地球科学研究院召开工作研讨会</h3>
        <div class="text-h6 text-sm-h5 mb-5 mx-5" @click="handleClick(10)" id="xq">
          查看详情 ->
        </div>

      </v-col>
      <!-- 新闻列表 -->
      <v-col cols="12" sm="6" md="6" lg="5">
        <v-list class="mx-5" flat two-line>
          <!-- <v-subheader>新闻</v-subheader> -->
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in newsList" :key="i" @click="handleClick(item.id)">
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 text-sm-h6">{{item.text}}</v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-2 text-sm-subtitle-1">{{item.time}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <!-- 卡片 -->
      <v-col cols="12" lg="3">
        <v-row  style="height: 100%" align-content="space-between">
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
              <v-img
                  src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/news/2.png?"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
              <v-img
                src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/news/3.png?"
                 style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
              <v-img
                src="https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/news/4.png?"
                style="height: 100%"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";


export default {
    mixins: [validationMixin],
    validations: {
    email: { required, email },
    },
  data() {
    return {
      loader: null,
      loading: false,
      dialog: false,
      name:'',
      tel:'',
      valid:'',
    //   text:'',
      content:'',
      selectedItem: 0,
      disabled: false,
      newsList: [
        { text: "45年來3次測量 珠峰長高了",time:"2020/12/10",id:0 },
        { text: "上海2021年元旦将启用“上海2000坐标系",time:"2020-12-7",id:1 },
        { text: "国家质检中心主编3部国家标准正式发布实施",time:"2020-12-11",id:2 },
        { text: "我国成功发射遥感三十三号卫星 主要用于科学试验、国土资源普查、农产品估产及防灾减灾等领域",time:"2020-12-28",id:3 },
        { text: "青海地质测绘院拓展省外市场",time:"2020-12-23",id:4 },
        { text: "黑龙江省开展测绘统计网络培训",time:"2020-12-24",id:5 },
      ],
       nameRules: [
        v => !!v || '此选项必填',
      ],
       contentRules: [
        v => !!v || '此选项必填',
      ],
        telRules: [
        v => !!v || '此选项必填',
      ],
   
    };
  },
    computed: {  
        isDisabled() {  
            let flag = true;  
            if (!this.name|| !this.tel||!this.content) {  
                flag = true  
            } else {  
                flag = false  
            }  
            return flag  
        },  
  },  
  methods: {
    // test() {
    //   this.subject='从的萨芬的萨芬';
    // //   this.text='法大师傅十分大师傅士大夫但是';
    //   this.content='我们要接你的单子'
    // },
     handleClick(id){
       this.$router.push({path:'/newsDetail', query:{id}});
     },
     send(){
      this.$router.push({path:'/mail'});
     },

      submit () {
        this.$refs.form.validate()
        axios({
        method:'post',
        url:'https://www.aoangis.com/api/mail/sendmail',
        // responseType:'stream',
        data: {
         "name":this.name,
         "phone":this.tel,
         "content":this.content,
        },
         headers: {
        "Content-Type": "application/json",
      },
      })
      .then(function(response) {
        console.log(response)
        alert("提交成功")
      })
      .catch(function(error){
          console.log(error)
      });
    
   
      },
// 
      reset () {
        this.$refs.form.reset()
      },
  }
};
</script>

<style lang="scss" scoped>
  #xq{
    cursor:pointer;
    &:hover{
      color:red;
    } 
  }
  #slider{
      position: fixed;
      z-index: 999;
      right:14px;
      bottom: 15px;
  }
 #btn{
      position: fixed;
      z-index: 999;
      left:14px;
      bottom: 15px;
  }
</style>