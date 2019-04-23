<template>
  <div class="outbox">
    <div class="left_outbox">
      <div class="left_outbox_topoutbox">智慧水务云开发</div>
      <div class="left_outbox_downoutbox">
        <vue-scroll>
          <div class="left_outbox_downinbox">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
            >
              <el-submenu index="0">
                <template slot="title">
                  <i>
                    <img src="../assets/img/dlyicon_04.png" style="margin-right:10px">
                  </i>
                  <span class="nav_title">监测数据清洗</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="'0'+'-'+i"
                    v-for="(item,i) in tablist1"
                    :key="i"
                    class="tablistbox"
                    @select="selectfun(sindex)"
                  >{{item}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i>
                    <img src="../assets/img/dlyicon_01.png" style="margin-right:10px">
                  </i>
                  <span slot="title" class="nav_title">监测数据预测</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="'1'+'-'+i"
                    v-for="(item,i) in tablist2"
                    :key="i"
                    class="tablistbox"
                  >{{item}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i>
                    <img src="../assets/img/dlyicon_03.png" style="margin-right:10px">
                  </i>
                  <span slot="title" class="nav_title">监测数据规律分析</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="'2'+'-'+i"
                    v-for="(item,i) in tablist3"
                    :key="i"
                    class="tablistbox"
                  >{{item}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title" class="nav_title">
                  <i>
                    <img src="../assets/img/dlyicon_tool_03.png" style="margin-right:10px">
                  </i>
                  <span slot="title" class="nav_title">空间数据分析</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="'3'+'-'+i"
                    v-for="(item,i) in tablist4"
                    :key="i"
                    class="tablistbox"
                  >{{item}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </vue-scroll>
      </div>
    </div>
    <div class="right_outbox">
      <!-- /* 清洗部分 */ -->
      <singlepointerflow v-show="nowIndex==='0-0'"/>
      <singlepressure v-show="nowIndex==='0-1'"/>
      <singlebiguser v-show="nowIndex==='0-2'"/>
      <allpointerflow v-show="nowIndex==='0-3'"/>
      <allpressure v-show="nowIndex==='0-4'"/>
      <allbiguser v-show="nowIndex==='0-5'"/>
      <!-- 預測部分 -->
      <waterforcast v-show="nowIndex==='1-0'"/>
      <pressuerforcast v-show="nowIndex==='1-1'"/>
      <!-- 監測部分 -->
      <obserdataqs v-show="nowIndex==='2-0'"/>
      <obserdatazs v-show="nowIndex==='2-1'"/>
      <obserdatabhgl v-show="nowIndex==='2-2'"/>
      <obserdataflowzxfw v-show="nowIndex==='2-3'"/>
      <obserdatapressurezxfw v-show="nowIndex==='2-4'"/>
      <!--  空間數據 -->
      <minpath v-show="nowIndex==='3-0'"/>
      <searchpointed v-show="nowIndex==='3-1'"/>
      <gwzrfq v-show="nowIndex==='3-2'"/>
      <gwtpjl v-show="nowIndex==='3-3'"/>
      <gwjljl v-show="nowIndex==='3-4'"/>
    </div>
  </div>
</template>

<script>
/* 清洗部分 */
import singlepointerflow from "@/components/Cloudedevelopment/DataWash/singlepointerflow";
import singlepressure from "@/components/Cloudedevelopment/DataWash/singlepressure";
import singlebiguser from "@/components/Cloudedevelopment/DataWash/singlebiguser";
import allpointerflow from "@/components/Cloudedevelopment/DataWash/allpointerflow";
import allpressure from "@/components/Cloudedevelopment/DataWash/allpressure";
import allbiguser from "@/components/Cloudedevelopment/DataWash/allbiguser";
/* 預測部分 */
import waterforcast from "@/components/Cloudedevelopment/DataForcast/waterforcast";
import pressuerforcast from "@/components/Cloudedevelopment/DataForcast/pressuerforcast";
/* 監測部分 */
import obserdataqs from "@/components/Cloudedevelopment/ObserData/obserdataqs";
import obserdatazs from "@/components/Cloudedevelopment/ObserData/obserdatazs";
import obserdatabhgl from "@/components/Cloudedevelopment/ObserData/obserdatabhgl";
import obserdataflowzxfw from "@/components/Cloudedevelopment/ObserData/obserdataflowzxfw";
import obserdatapressurezxfw from "@/components/Cloudedevelopment/ObserData/obserdatapressurezxfw";
/* 空間數據 */
import minpath from "@/components/Cloudedevelopment/SpaceData/minpath";
import searchpointed from "@/components/Cloudedevelopment/SpaceData/searchpointed";
import gwzrfq from "@/components/Cloudedevelopment/SpaceData/gwzrfq";
import gwtpjl from "@/components/Cloudedevelopment/SpaceData/gwtpjl";
import gwjljl from "@/components/Cloudedevelopment/SpaceData/gwjljl";
export default {
  name: "Cloudedevelopment",
  components: {
    /* 清洗部分 */
    singlepointerflow,
    singlepressure,
    singlebiguser,
    allpointerflow,
    allpressure,
    allbiguser,
    /* 預測部分 */
    waterforcast,
    pressuerforcast,
    /* 監測部分 */
    obserdataqs,
    obserdatazs,
    obserdatabhgl,
    obserdataflowzxfw,
    obserdatapressurezxfw,
    /* 空間數據 */
    gwjljl,
    gwtpjl,
    gwzrfq,
    minpath,
    searchpointed
  },
  data() {
    return {
      nowIndex: "0-0",
      tablist1: [
        "单点流量监测数据清洗",
        "单点压力监测数据清洗",
        "单点大用户监测数据清洗",
        "批量流量监测数据清洗",
        "批量压力监测数据清洗",
        "批量大用户监测数据清洗"
      ],
      tablist2: ["水量短期预测", "压力短期预测"],
      tablist3: [
        "监测数据趋势性分析",
        "监测数据噪声分析",
        "监测数据变化规律相似性分析",
        "流量监测数据置信范围分析",
        "压力监测数据置信范围分析"
      ],
      tablist4: [
        "最短路径分析",
        "查找接近的节点",
        "管网自然分区计算",
        "管网拓扑聚类",
        "管网距离聚类"
      ],
      picArr: [
        require("../assets/img/icon_tool_01.png"),
        require("../assets/img/icon_tool_02.png"),
        require("../assets/img/icon_tool_23.png"),
        require("../assets/img/icon_tool_21.png"),
        require("../assets/img/icon_tool_22.png")
      ]
    };
  },
  methods: {
    //切换tab项
    /*  toggleTabs(index) {
      this.nowIndex = index;
      this.name = this.tabsParam[index];
    }, */
    handleOpen(key, keyPath) {
      /*  console.log(key, keyPath); */
    },
    handleClose(key, keyPath) {
      /*   console.log(key, keyPath); */
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.nowIndex = key;
    }
  }
};
</script>
<style>
.el-menu {
  border: none;
}
.el-menu-item-group__title {
    padding-top: 0!important;
}
/* 修改子菜单的背景色： */
.el-menu-item {
    background-color: #eef0f1!important;
}
/* 字体颜色： */
.el-aside {
    color: #74777c;
}
/* 鼠标悬浮时，主菜单的样式： */
.el-submenu__title:focus,
.el-submenu__title:hover {
  outline: 0 !important;
 color: #74777c!important;
  background:  none!important;
}
/* .鼠标悬浮时，子菜单的样式： */
.el-menu-item:hover {
  outline: 0 !important;
  color: #74777c!important;
    background: #e9ecef!important;
}
.el-menu-item.is-active {
   color: #74777c!important;
    background: #e9ecef!important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activetablist {
  color: #74777c;
  background-color: #eef0f1;
  /*  background-image: url("../assets/img/line.png"); */
  background-repeat: no-repeat;
  background-position-x: -3px;
  /*   background-size: 100px 100px */
  /*   border-bottom: 2px #548ff6 solid; */
}
.outbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
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
.left_outbox_topoutbox {
  width: 18.75vw;
  height: 80px;
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
  height: calc(100vh - 80px);
  overflow-y: auto;
  /* height: 340px; */
  /*  background-color: rgb(0, 162, 255) */
}
.left_outbox_downinbox {
  width: 17.6vw;
  /* height: 340px; */
  color: #96a5b3;
  margin-left: 20px;

  /*  background-color: rgb(255, 238, 0); */
}
.tablistbox {
  width: 17.6vw;
  height: 50px;
  text-indent: 10px;
  color: #74777c;
  font: normal 14px/50px "微软雅黑";
  position: relative;
  cursor: pointer;
}
/* .tablistbox:hover {
  color: #74777c;
  background-color: #eef0f1;
    background-image: url("../assets/img/line.png");
  background-repeat: no-repeat;
  background-position-x: -3px;
  background-position-y: -3px;
} */
.imgstyle {
  position: absolute;
  top: 1px;
  left: -25px;
}
.nav_title {
  color: #74777c;
  height: 50px;
  text-indent: 10px;
  font: normal 14px/50px "微软雅黑";
}
.right_outbox {
  width: 81.25vw;
  height: 100vh;
  overflow-x: hidden;
  /*  background-color: rgb(9, 255, 0); */
}
</style>
