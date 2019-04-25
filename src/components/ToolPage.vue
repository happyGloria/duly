<template>
  <div class="outbox">
    <div class="left_outbox">
      <div class="left_outbox_topoutbox">智慧水务云工具</div>
      <div class="left_outbox_downoutbox">
        <div class="left_outbox_downinbox">
          <div
            class="tablistbox"
            @click="toggleTabs(index)"
            :class="{activetablist:index===nowIndex}"
            v-for="(item,index) in tablist"
            :key="index"
          >
            <span class="imgstyle">
              <img :src="picArr[index]"/>
            </span>
          {{item}}</div>
        </div>
      </div>
      <!-- 跳转路由 -->
      <div class="left_outbox_add" @click="routeradd">跳转路由</div>
    </div>
    <div class="right_outbox">
       <Partitionmeasurement v-show="nowIndex===0"/>
      <pressurepoints v-show="nowIndex===1"/>
      <waterselect v-show="nowIndex===2"/>
    </div>
  </div>
</template>

<script>
import Partitionmeasurement from '@/components/funpage/Partitionmeasurement'
import pressurepoints from '@/components/funpage/pressurepoints'
import waterselect from '@/components/funpage/waterselect'
export default {
  name: "ToolPage",
  components:{
    Partitionmeasurement,
    pressurepoints,
    waterselect
  },
  data() {
    return {
      nowIndex: 0,
      tablist: ["压力监测点优化布置", "分区计量优化", "水表口径优选"],
       picArr:[
              require("../assets/img/icon_tool_01.png"),
              require("../assets/img/icon_tool_02.png"),
              require("../assets/img/icon_tool_23.png"),
              require("../assets/img/icon_tool_21.png"),
              require("../assets/img/icon_tool_22.png"),      
            ]
    };
  },
  methods: {
    //切换tab项
    toggleTabs(index) {
      this.nowIndex = index;
      this.name = this.tabsParam[index];
    },
    /* 添加路由跳转 */
    routeradd(){
      this.$router.push("/Cloudedevelopment")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activetablist {
  color: #74777c;
  background-color: #eef0f1;
  background-image: url("../assets/img/line.png");
  background-repeat: no-repeat;
  background-position-x:-3px;
/*   background-size: 100px 100px */
  /*   border-bottom: 2px #548ff6 solid; */
}
.outbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden
  /*   background-color: aqua */
}
.left_outbox {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 18.75vw;
  height: 100vh;
  border-right: 1px solid #e9ecf1;
  /* background-color: rgb(140, 0, 255) */
}
/* 添加路由跳转 */
.left_outbox_add{
  width: 18.75vw;
  height: 60px;
  color: #383a3c;
    text-align: center;
  font: normal 18px/40px "微软雅黑";
  cursor:pointer;
  background-color: rgb(255, 145, 0)
}

.left_outbox_topoutbox {
  width: 18.75vw;
  height: 100px;
  color: #383a3c;
  text-indent: 40px;
  font: normal 18px/100px "微软雅黑";
  /* background-color: rgb(255, 145, 0) */
}
.left_outbox_downoutbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  width: 18.75vw;
  height: 340px;
  /*  background-color: rgb(0, 162, 255) */
}
.left_outbox_downinbox {
  width: 17.6vw;
  height: 340px;
  color: #96a5b3;
/*   background-color: rgb(255, 238, 0) */
}
.tablistbox {
  width: 17.6vw;
  height: 50px;
  text-indent: 50px;
  font: normal 14px/50px "微软雅黑";
  position: relative;
  cursor: pointer;
}
.tablistbox:hover{
   color: #74777c;
  background-color: #eef0f1;
  background-image: url("../assets/img/line.png");
  background-repeat: no-repeat;
  background-position-x:-3px;
  background-position-y: -3px
}
.imgstyle{
position: absolute;
top: 1px;
left: -25px;
}
.right_outbox {
  width: 81.25vw;
  height: 100vh;
   overflow-x: hidden
 /*  background-color: rgb(9, 255, 0); */
}
</style>
