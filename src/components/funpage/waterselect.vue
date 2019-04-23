<template>
  <div class="outbox">
    <div class="startuseoutbox"><a href="http://112.64.170.158:9095/qiantai/PipeNetWorkProject.html?name=" target="_blank">开始使用</a></div>
    <div class="contentoutbox">
      <div class="contentinbox">
        <!-- conten1 -->
        <div class="contentoutbox_contentbox1">水表口径优选工具</div>
        <!-- conten2 -->
        <div class="contentoutbox_contentbox2">
          <div class="contentoutbox_contentbox2_title">概述</div>
          <div class="contentoutbox_contentbox2_textbox">
            <div
              class="contentoutbox_contentbox2_text"
            >水表是供水行业普遍采用的计量流经自来水管道内水流总量的仪器。它直接安装在标准管道上，是自来水公司计收水费的依据。若选用的水表口径不合适，即水表口径大而流经的流量过小，达不到水表的始动流量；或者水表口径小而流经的流量长期超过水表的额定流量，都会造成水表计量不准确或损坏。度量云平台提供一套水标口径优选工具，可以用于评估现有水表口径是否合适，为新装水表选择最优的口径。</div>
          </div>
          <div class="contentoutbox_contentbox2_img">
            <img src="../../assets/img/tools_04.png" alt>
          </div>
        </div>

        <!-- content结束 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "waterselect"
};
</script>
<style scoped>
.outbox {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
}
.startuseoutbox {
  width: 120px;
  height: 40px;
  background: #349df0;
  line-height: 40px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  position: absolute;
  right: 40px;
  top: 40px;
  cursor: pointer;
}
.startuseoutbox:hover a {
  color: #0073eb;
}
a{
  text-decoration: none;
  color: #ffffff;
}
.contentoutbox {
  /*  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end; */
  width: 100%;
  /*   background-color: rgb(9, 255, 0); */
}
.contentinbox {
  width: 58%;
  margin-left: 60px;
}
/* content1 */
.contentoutbox_contentbox1 {
  width: 100%;
  height: 124px;
  font-size: 36px;
  font-weight: 100;
  color: #383a3c;
  line-height: 124px;
  /*   background-color: aqua; */
}
/* content2 */
.contentoutbox_contentbox2 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  height: 220px;
  /* background-color: aqua; */
}
.contentoutbox_contentbox2_title {
  width: 100%;
  height: 40px;
  font-size: 24px;
  color: #383a3c;
  line-height: 40px;
  font-weight: 100;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox2_textbox {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  /*   background-color: rgb(0, 255, 115); */
}
.contentoutbox_contentbox2_text {
  width: 100%;
  height: 45px;
  line-height: 24px;
  letter-spacing: 1;
  color: #74777c;
  background: none;
  font-size: 14px;
  /*   background-color: rgb(76, 0, 255); */
}
.contentoutbox_contentbox2_img {
  margin-top: 70px;
}
</style>


