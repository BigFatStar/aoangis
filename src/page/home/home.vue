/**
  *官网首页
 */
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-carousel hide-delimiters cycle height="100%">
          <v-carousel-item
            :aspect-ratio="16 / 7"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
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
      // 轮播图
      items: [
        {
           src:"https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/1.png?Expires=1610620754&OSSAccessKeyId=TMP.3KhjyNezPEPQvqBw86eX6FLsnVU934q2bwQMvKstH3Ga6BhRkKxJRBXS21ffDyxxNL8C6VNULXYka96xSstY4QkMXCyFH9&Signature=Ic9lapSeSJB1BqPyB08KQVE2JUs%3D&versionId=CAEQCxiBgICAofeAuBciIDliOGJiYjEyNTRhYTRkOWQ4NjU4YzU3MmJiNWY2ZmI1&response-content-type=application%2Foctet-stream",
        },
        {
          src:"https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/2.png?Expires=1610620766&OSSAccessKeyId=TMP.3KhjyNezPEPQvqBw86eX6FLsnVU934q2bwQMvKstH3Ga6BhRkKxJRBXS21ffDyxxNL8C6VNULXYka96xSstY4QkMXCyFH9&Signature=hDaFBuqFM9eUci5HZl77f9Emmu8%3D&versionId=CAEQCxiBgMDAn_eAuBciIDM4YzUxYmE2OWFkYTQyYjU4OTExNmRjN2IzMzgwMGZk&response-content-type=application%2Foctet-stream",
        },
        {
          src:"https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/3.png?Expires=1610620775&OSSAccessKeyId=TMP.3KhjyNezPEPQvqBw86eX6FLsnVU934q2bwQMvKstH3Ga6BhRkKxJRBXS21ffDyxxNL8C6VNULXYka96xSstY4QkMXCyFH9&Signature=A61M1seoDVPlrRTnjFgwOU1eNHg%3D&versionId=CAEQCxiBgIDpn_eAuBciIDdmZWE3ZTQ4MTRhZTRmODc5YmNhYTlhMzA0NDFmNzc3&response-content-type=application%2Foctet-stream",
        },
        {
           src:"https://aoanwebvue.oss-cn-beijing.aliyuncs.com/assets/home/banner/4.png?Expires=1610620785&OSSAccessKeyId=TMP.3KhjyNezPEPQvqBw86eX6FLsnVU934q2bwQMvKstH3Ga6BhRkKxJRBXS21ffDyxxNL8C6VNULXYka96xSstY4QkMXCyFH9&Signature=s1lpgUMObVbBWM%2BTArXsICT2TOA%3D&versionId=CAEQCxiBgIDrn_eAuBciIDk3NWMzNTM3ODA2MzQ2OWFhMThhZWI2MDVmYjU4NGJl&response-content-type=application%2Foctet-stream",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>