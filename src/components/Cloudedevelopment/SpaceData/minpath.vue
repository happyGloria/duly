<template>
  <div class="outbox">
    <vue-scroll>
      <div class="contentoutbox">
        <div class="contentinbox">
          <!-- conten1 -->
          <div class="contentoutbox_contentbox1">最短路径分析</div>
          <!-- conten2 -->
          <div class="contentoutbox_contentbox2">
            <div class="contentoutbox_contentbox2_title">概述</div>
            <div class="contentoutbox_contentbox2_textbox">
              <div
                class="contentoutbox_contentbox2_text"
              >最短路径分析是根据根据管网的节点坐标和拓扑信息，设定起始节点和终止节点，找出从起始节点到终止节点的最短路径。</div>
            </div>
            <div class="contentoutbox_contentbox2_img">
              <img
                src="../../../assets/img/service_zhixin03.png"
                style="width:100%"
                alt
              >
            </div>
          </div>
          <!-- conten3 -->
        <!--   <div class="contentoutbox_contentbox3">
            <div class="contentoutbox_contentbox3_textbox">
              <div class="contentoutbox_contentbox3_text">单个时刻流量监测数据清洗与历史窗口流量监测数据清洗的对比见下表。</div>
            </div>
          </div> -->
          <!-- conten4 -->
     <!--      <div class="contentoutbox_contentbox4">
            <table class="contentoutbox_contentbox4_table">
              <tr>
                <th>单个时刻流量监测数据清洗</th>
                <th>历史窗口流量监测数据清洗</th>
              </tr>
              <tr>
                <td class="lefttd">每次计算清洗一个时间点的数据</td>
                <td>对所有输入的历史数据进行清洗</td>
              </tr>
              <tr class="alt">
                <td class="lefttd">输出数据状态：正常、缺失或异常</td>
                <td>输出数据状态：正常、缺失或异常</td>
              </tr>
              <tr>
                <td class="lefttd">数据缺失时，根据历史数据规律对其进行补充</td>
                <td>对短时间的数据缺失进行补充，如果长时间数据缺失，不对其进行补充</td>
              </tr>
             
            </table>
          </div> -->
          <!-- conten5 -->
          <div class="contentoutbox_contentbox5">
            <div class="contentoutbox_contentbox5_title">端口调用</div>
            <div class="contentoutbox_contentbox5_textbox">
              <div class="contentoutbox_contentbox5_text">
                网址
                <a
                  href=""
                ></a>
              </div>
            </div>
          </div>
           <!-- conten5add -->
        <!--   <div class="contentoutbox_contentbox5add">
            <div class="contentoutbox_contentbox5add_title">【注意事项】</div>
            <div class="contentoutbox_contentbox5add_textbox">
                <div class="contentoutbox_contentbox5add_text">
                 需选取不少于一天的历史数据。
两个监测点的历史数据需在时间上相对应。
在进行处理之前，可以用window_wash_p或window_wash_f对历史窗口进行清洗，有利于提高计算效果。
                </div>
            </div>
          </div> -->
          <!-- conten6 -->
          <div class="contentoutbox_contentbox6">
            <div class="contentoutbox_contentbox6_title">输入参数</div>
            <div class="contentoutbox_contentbox6_textbox">
              <table class="contentoutbox_contentbox6_table">
                <tr>
                  <th>变量名称</th>
                  <th>含义</th>
                  <th>维度</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td>Link_sta</td>
                  <td>所有管网的起始节点索引</td>
                  <td>L*1</td>
                  <td>建议取30天的数据作为历史窗口。须保证历史窗口内的数据在时间上连续，如果某一时刻缺数据，补充为NaN值。</td>
                </tr>
                <tr class="alt">
                  <td>Link_end</td>
                  <td>所有管网的终止节点索引</td>
                  <td>L*1</td>
                  <td>
                   
                  </td>
                </tr>
                <tr>
                  <td>Link_len</td>
                  <td>
                所有管网对应的管道长度	
                  </td>
                  <td>L*1</td>
                  <td>管道起始节点,管道终止节点,管道长度,
三组信息需一一对应</td>
                </tr>
                <tr class="alt">
                <td>Node_i</td>
                <td>节点索引</td>
                <td>N*1（ N 为节点个数）</td>
                <td>节点索引,节点横坐标 ,节点纵坐标,
三组信息需一一对应</td>
                </tr>
                  <tr>
                  <td>Node_x</td>
                  <td>
                节点横坐标
                  </td>
                  <td>N*1（ N 为节点个数）</td>
                  <td>节点索引,节点横坐标 ,节点纵坐标,
三组信息需一一对应</td>
                </tr>
                <tr class="alt">
                <td>Node_y</td>
                <td>节点纵坐标</td>
                <td>N*1（ N 为节点个数）</td>
                <td>节点索引,节点横坐标 ,节点纵坐标,
三组信息需一一对应</td>
                </tr>
                  <tr>
                  <td>Node_sta</td>
                  <td>
                所求最短路径的起始节点
                  </td>
                  <td>1*1</td>
                  <td></td>
                </tr>
                <tr class="alt">
                <td>Node_end</td>
                <td>所求最短路径的终止节点</td>
                <td>1*1</td>
                <td></td>
                </tr>
              </table>
            </div>
          </div>
          <!-- conten7 -->
          <div class="contentoutbox_contentbox7">
            <div class="contentoutbox_contentbox7_title">输入的json格式为：</div>
            <div class="contentoutbox_contentbox7_textbox">
              <textarea name id cols="100" rows="30" readonly>
 {
       "Link_sta":[33,25,.......],
       "Link_end":[35,26,.......],
       "Link_len":[3.3,2.5,.......],
       "Node_i":[1,2,.......],
       "Node_x":[3325,2542,.......],
       "Node_y":[3324,2544,.......],
       "Node_sta":3
       "Node_end":7
}

		

							 
					 
			
		
              </textarea>
            </div>
          </div>
          <!-- conten8-->
          <div class="contentoutbox_contentbox8">
            <div class="contentoutbox_contentbox8_title">输出参数</div>
            <div class="contentoutbox_contentbox8_textbox">
              <table class="contentoutbox_contentbox8_table">
                <tr>
                  <th style="width:20%;text-align:start">变量名称</th>
                  <th style="width:20%;text-align:start">含义</th>
                  <th style="width:20%;text-align:start">维度</th>
                  <th style="width:40%;text-align:start">备注</th>
                </tr>
                <tr>
                  <td>Distance</td>
                  <td>最短路径的长度</td>
                  <td>1*1</td>
                  <td>
            
                  </td>
                </tr>
                <tr class="alt">
                  <td>Path</td>
                  <td>最短路径所经过的节点</td>
                  <td>P*1</td>
                  <td>具体信息见表1</td>
                </tr>
                <!--   <tr>
                  <td>Step_n</td>
                  <td>
                    要清洗的数据时间点距历史窗口
                    最后一个数据的时间步长数
                  </td>
                  <td>1*1</td>
                  <td>控制输出数据的长度</td>
                </tr>-->
                <!-- <tr class="alt">
                <td class="lefttd">Ernst Handel</td>
                <td>Roland Mendel</td>
                </tr>-->
              </table>
            </div>
            <div class="contentoutbox_contentbox8_img">
              <img src="../../../assets/img/pathbiao.png" style="width:100%" alt>
            </div>
          </div>
          <!-- conten9 -->
          <div class="contentoutbox_contentbox9">
            <div class="contentoutbox_contentbox9_title">输出的json格式为</div>
            <div class="contentoutbox_contentbox9_textbox">
              <textarea name id cols="100" rows="30" readonly>
{
      "Path":[3,22,...,7],
      "Distance":28
}
	
		

              </textarea>
            </div>
          </div>
 <!-- conten9add -->
          <div class="contentoutbox_contentbox6">
            <div class="contentoutbox_contentbox6_title">数据信息</div>
            <div class="contentoutbox_contentbox6_textbox">
              <table class="contentoutbox_contentbox6_table">
                <tr>
                  <th>Path维度</th>
                  <th>Path值</th>
                  <th>Distance值</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td>1*1</td>
                  <td>1</td>
                  <td>0</td>
                  <td>起始节点与终止节点</td>
                </tr>
                <tr class="alt">
                  <td>1*1</td>
                  <td>2</td>
                  <td>Inf</td>
                  <td>起始节点不在输入的管网信息内</td>
                </tr>
                <tr>
                  <td>1*1</td>
                  <td>
               3
                  </td>
                  <td>Inf</td>
                  <td>终止节点不在输入的管网信息内</td>
                </tr>
                <tr class="alt">
                <td>1*1</td>
                <td>4</td>
                <td>Inf</td>
                <td>节点信息不包含全部的管道节点</td>
                </tr>
                  <tr>
                  <td>1*1</td>
                  <td>
                5
                  </td>
                  <td>Inf</td>
                  <td>起始节点到终止节点无连通路径</td>
                </tr>
                <tr class="alt">
                <td>K*1（K≥2)</td>
                <td></td>
                <td></td>
                <td>Path(1)为 Nodesta，Path(end)为 Nodeend</td>
                </tr>
                 
              </table>
            </div>
          </div>

          <!-- conten10 -->
          <div class="contentoutbox_contentbox10">
            <div class="contentoutbox_contentbox10_title">在线测试</div>
            <div class="contentoutbox_contentbox10_title2">编辑您的代码：</div>
            <div class="contentoutbox_contentbox10_textbox">
              <textarea name id cols="100" rows="30" v-model="messageminpath" placeholder></textarea>
            </div>
          <!--   <div @click="Sim_per_cal" class="contentoutbox_contentbox10_djyx">点击运行</div> -->
            <div  class="contentoutbox_contentbox10_djyx">点击运行</div>
          </div>
          <!-- conten11 -->
          <div class="contentoutbox_contentbox11">
            <div class="contentoutbox_contentbox11_title2">运行结果:</div>
            <div class="contentoutbox_contentbox11_textbox">
              <textarea name id cols="100" rows="30" v-model="resmsgminpath" readonly></textarea>
            </div>
          </div>
          <!-- conten12 echarts部分 -->
          <div class="contentoutbox_contentbox12">
           <!--  <minpathecharts/> -->
          </div>
          <!-- content结束 -->
        </div>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import defalftdata from "@/assets/js/defalftdata";
import Urlclass from "@/http/Urlclass";
import Bus from "@/bus.js";
/* import minpathecharts from "@/components/Cloudedevelopment/ObserData/echarts/minpathecharts" */
export default {
  name: "minpath",
 /*  components:{
    minpathecharts
  }, */
  data() {
    return { 
      messageminpath: JSON.stringify(defalftdata.minpathdata),
      resmsgminpath: JSON.stringify(defalftdata.minpathresdata),
       messageminpath2: {...defalftdata.minpathdata},
    };
  },
  mounted() {},
  methods: {
    Sim_per_cal() {
      var params = this.messageminpath;
      this.$axios
        .post(Urlclass.UrlclassData_wash_f + "/Simpercal/Sim_per_cal", params)
        .then(res => {
          var that = this;
          that.resmsgminpath =JSON.stringify(res.data);
          var resdata=res.data
          var params2=that.messageminpath2
          var washdata={params2,resdata}
          Bus.$emit("minpathfun", washdata);
        })
        .catch(err => {
          console.log("连接数据库失败！");
        });
    }
  }
};
</script>
<style scoped>
.outbox {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
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
  /*  height: 220px; */
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
.contentoutbox_contentbox2_img {
  border: 1px solid #d6d9dd;
  margin-top: 40px;
  margin-bottom: 30px;
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

/* content3 */
.contentoutbox_contentbox3 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}

.contentoutbox_contentbox3_textbox {
  width: 100%;
  height: 40px;

  /*   background-color: rgb(0, 255, 115); */
}

.contentoutbox_contentbox3_text {
  width: 100%;
  height: 45px;
  line-height: 24px;
  letter-spacing: 1;
  color: #74777c;
  background: none;
  font-size: 14px;
  /*   background-color: rgb(76, 0, 255); */
}
/* content4 */
.contentoutbox_contentbox4 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;
  /*    height: 220px;
  background-color: aqua; */
}

/* table */
.contentoutbox_contentbox4_table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 160px;
  border-collapse: collapse;
}
.lefttd {
  width: 40%;
}
.contentoutbox_contentbox4_table td,
.contentoutbox_contentbox4_table th {
  font-size: 12px;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox4_table td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  border: 1px solid #e9ecf1;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox4_table th {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #e4edfc;
  color: #383a3c;
  font-weight: bold;
  font-size: 12px;
  text-indent: 5px;
}
.contentoutbox_contentbox4_table tr.alt td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  background-color: #f2f6fa;
}
/* content5 */
.contentoutbox_contentbox5 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  margin-top:40px;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox5_title {
  width: 100%;
  height: 40px;
  font-size: 24px;
  color: #383a3c;
  line-height: 40px;
  font-weight: 100;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox5_textbox {
  width: 100%;
  height: 60px;
  margin-top: 20px;

  /*   background-color: rgb(0, 255, 115); */
}

.contentoutbox_contentbox5_text {
  width: 100%;
  height: 45px;
  line-height: 24px;
  letter-spacing: 1;
  color: #74777c;
  background: none;
  font-size: 14px;
  /*   background-color: rgb(76, 0, 255); */
}
.contentoutbox_contentbox5_text a {
  color: #349df0;
  font-style: italic;
  font-weight: bold;
}
/* content5add */
.contentoutbox_contentbox5add {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox5add_title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox5add_textbox {
  width: 100%;
  /*   height: 60px; */
  margin-top: 20px;

  /*   background-color: rgb(0, 255, 115); */
}

.contentoutbox_contentbox5add_text {
  width: 100%;
  height: 120px;
  line-height: 24px;
  letter-spacing: 1;
  color: #74777c;
  background: none;
  font-size: 14px;
  /*   background-color: rgb(76, 0, 255); */
}
/* content6 */
.contentoutbox_contentbox6 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox6_title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox6_textbox {
  width: 100%;
  /*   height: 60px; */
  margin-top: 20px;

  /*   background-color: rgb(0, 255, 115); */
}
/* table */
.contentoutbox_contentbox6_table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 160px;
  border-collapse: collapse;
  margin-bottom: 60px;
}

.contentoutbox_contentbox6_table td,
.contentoutbox_contentbox6_table th {
  font-size: 12px;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox6_table td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  border: 1px solid #e9ecf1;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox6_table th {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #e4edfc;
  color: #383a3c;
  font-weight: bold;
  font-size: 12px;
  text-indent: 5px;
}
.contentoutbox_contentbox6_table tr.alt td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  background-color: #f2f6fa;
}
/* content7 */
.contentoutbox_contentbox7 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox7_title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox7_textbox {
  width: 100%;
  /*   height: 60px; */
  margin-top: 20px;
  margin-bottom: 60px;
  /*   background-color: rgb(0, 255, 115); */
}
.contentoutbox_contentbox7_textbox textarea {
  width: 100%;
  height: 262px;
  background: rgb(48, 54, 62);
  padding: 10px;
  color: rgb(150, 186, 214);
  margin: 0px;
  line-height: 24px;
  letter-spacing: 1;
  /* color: #74777c; */
  font-size: 16px;
  outline: none;
  font-weight: bold;
}

/* content8 */
.contentoutbox_contentbox8 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox8_title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox8_textbox {
  width: 100%;
  /*   height: 60px; */
  margin-top: 20px;

  /*   background-color: rgb(0, 255, 115); */
}
/* table */
.contentoutbox_contentbox8_table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 160px;
  border-collapse: collapse;
  margin-bottom: 0px;
}

.contentoutbox_contentbox8_table td,
.contentoutbox_contentbox8_table th {
  font-size: 12px;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox8_table td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  border: 1px solid #e9ecf1;
  padding: 3px 7px 2px 7px;
}
.contentoutbox_contentbox8_table th {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #e4edfc;
  color: #383a3c;
  font-weight: bold;
  font-size: 12px;
  text-indent: 5px;
}
.contentoutbox_contentbox8_table tr.alt td {
  color: #383a3c;
  font-size: 12px;
  text-indent: 5px;
  background-color: #f2f6fa;
}
.contentoutbox_contentbox8_img {
  /* border: 1px solid #d6d9dd; */
  margin-top: 40px;
  margin-bottom: 30px;
}
/* content9 */
.contentoutbox_contentbox9 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  margin-top:40px;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox9_title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox9_textbox {
  width: 100%;
  /*   height: 60px; */
  margin-top: 20px;
  margin-bottom: 60px;
  /*   background-color: rgb(0, 255, 115); */
}
.contentoutbox_contentbox9_textbox textarea {
  width: 100%;
  height: 262px;
  background: rgb(48, 54, 62);
  padding: 10px;
  color: rgb(150, 186, 214);
  margin: 0px;
  line-height: 24px;
  letter-spacing: 1;
  /* color: #74777c; */
  font-size: 16px;
  outline: none;
  font-weight: bold;
}
/* content10 */
.contentoutbox_contentbox10 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}
.contentoutbox_contentbox10_title {
  width: 100%;
  height: 40px;
  font-size: 24px;
  color: #383a3c;
  line-height: 40px;
  font-weight: 100;
  margin-bottom: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox10_title2 {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox10_textbox {
  width: 100%;
  /*  height: 60px; */
  margin-top: 0px;
  margin-bottom: 20px;
  /*   background-color: rgb(0, 255, 115); */
}

.contentoutbox_contentbox10_textbox textarea {
  width: 100%;
  height: 262px;
  background: rgb(48, 54, 62);
  padding: 10px;
  color: rgb(150, 186, 214);
  margin: 0px;
  line-height: 24px;
  letter-spacing: 1;
  /* color: #74777c; */
  font-size: 16px;
  outline: none;
  font-weight: bold;
}
.contentoutbox_contentbox10_djyx {
  width: 120px;
  height: 38px;
  font: normal 16px/38px "微软雅黑";
  color: #fff;
  text-align: center;
  cursor: pointer;
  background: #349df0;
  margin-bottom: 90px;
}
/* content11 */
.contentoutbox_contentbox11 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  /*  height: 220px; */
  /* background-color: aqua; */
}

.contentoutbox_contentbox11_title2 {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #383a3c;
  line-height: 40px;
  /*  background-color: rgb(123, 255, 0); */
}
.contentoutbox_contentbox11_textbox {
  width: 100%;
  /*  height: 60px; */
  margin-top: 0px;
  margin-bottom: 20px;
  /*   background-color: rgb(0, 255, 115); */
}

.contentoutbox_contentbox11_textbox textarea {
  width: 100%;
  height: 262px;
  background: rgb(48, 54, 62);
  padding: 10px;
  color: rgb(150, 186, 214);
  margin: 0px;
  line-height: 24px;
  letter-spacing: 1;
  /* color: #74777c; */
  font-size: 16px;
  outline: none;
  font-weight: bold;
}
/* content12 */
.contentoutbox_contentbox12 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  height: 480px;
 /*  background-color: aqua; */
  margin-bottom: 600px;
  margin-top: 60px;
}
</style>


