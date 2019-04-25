<template>
    <div>allpressure</div>
</template>
<script>
export default {
    name:'allpressure'
}
</script>

<template>
  <div class="outbox">
    <vue-scroll>
      <div class="contentoutbox">
        <div class="contentinbox">
          <!-- conten1 -->
          <div class="contentoutbox_contentbox1">批量压力监测数据清洗</div>
          <!-- conten2 -->
          <div class="contentoutbox_contentbox2">
            <div class="contentoutbox_contentbox2_title">概述</div>
            <div class="contentoutbox_contentbox2_textbox">
              <div
                class="contentoutbox_contentbox2_text"
              >批量压力监测数据清洗是对一段时间的压力监测数据进行清洗，删除明显超出正常范围的数据，对短时间的缺失数据进行补充，如果长时间数据缺失，不对其进行补充。
历史窗口压力监测数据清洗主要用于监测数据趋势分析、监测数据相似性分析等功能的前期数据处理。。</div>
            </div>
            <div class="contentoutbox_contentbox2_img">
              <img
                src="../../../assets/img/service_piliangyaliqingxi.png"
                style="width:100%"
                alt
              >
            </div>
          </div>
          <!-- conten3 -->
          <div class="contentoutbox_contentbox3">
            <div class="contentoutbox_contentbox3_textbox">
              <div class="contentoutbox_contentbox3_text">单个时刻压力监测数据清洗与历史窗口压力监测数据清洗的对比见下表:</div>
            </div>
          </div>
          <!-- conten4 -->
          <div class="contentoutbox_contentbox4">
            <table class="contentoutbox_contentbox4_table">
              <tr>
                <th>单个时刻压力监测数据清洗</th>
                <th>历史窗口压力监测数据清洗</th>
              </tr>
              <tr>
                <td class="lefttd">每次计算清洗一个时间点的数据</td>
                <td>对所有输入的历史数据进行清洗</td>
              </tr>
              <tr class="alt">
                <td class="lefttd">输出数据状态：正常、缺失或异常</td>
                <td>不输出数据状态</td>
              </tr>
              <tr>
                <td class="lefttd">数据缺失时，根据历史数据规律对其进行补充</td>
                <td>对短时间的数据缺失进行补充，如果长时间数据缺失，不对其进行补充</td>
              </tr>
              <!-- <tr class="alt">
                <td class="lefttd">Ernst Handel</td>
                <td>Roland Mendel</td>
              </tr>-->
            </table>
          </div>
          <!-- conten5 -->
          <div class="contentoutbox_contentbox5">
            <div class="contentoutbox_contentbox5_title">端口调用</div>
            <div class="contentoutbox_contentbox5_textbox">
              <div class="contentoutbox_contentbox5_text">
                网址
                <a
                  href=" http://112.64.170.158:9100/api/Windowwashp/Window_wash_p"
                > http://112.64.170.158:9100/api/Windowwashp/Window_wash_p</a>
              </div>
            </div>
          </div>
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
                  <td>History_window_in</td>
                  <td>输入历史窗口</td>
                  <td>N*1</td>
                  <td>可以取任意长一段时间的历史数据</td>
                </tr>
                <tr class="alt">
                  <td>Day_count</td>
                  <td>历史窗口数据天数</td>
                  <td>1*1</td>
                  <td>
                   
                  </td>
                </tr>
                <tr>
                  <td>Tolerance</td>
                  <td>
                  	容差
                  </td>
                  <td>1*1</td>
                  <td>	建议取值[0.01,0.03]</td>
                </tr>
                <!-- <tr class="alt">
                <td class="lefttd">Ernst Handel</td>
                <td>Roland Mendel</td>
                </tr>-->
              </table>
            </div>
          </div>
          <!-- conten7 -->
          <div class="contentoutbox_contentbox7">
            <div class="contentoutbox_contentbox7_title">输入的json格式为：</div>
            <div class="contentoutbox_contentbox7_textbox">
              <textarea name id cols="100" rows="30" readonly>
    {
        "Day_count" : 3 , 
        "History_window" :[  157 , 141 ...... ] ,
        "tolerance":0.03
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
                  <th>变量名称</th>
                  <th>含义</th>
                  <th>维度</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td>History_window_out</td>
                  <td>输出历史窗口</td>
                  <td>	N*1</td>
                  <td>
                    
                  </td>
                </tr>
              <!--   <tr class="alt">
                  <td>Err_code</td>
                  <td>异常编码</td>
                  <td>1*1</td>
                  <td>具体含义见下图</td>
                </tr> -->
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
           <!--  <div class="contentoutbox_contentbox8_img">
              <img src="../../../assets/img/backup02.jpg" style="width:100%" alt>
            </div> -->
          </div>
          <!-- conten9 -->
          <div class="contentoutbox_contentbox9">
            <div class="contentoutbox_contentbox9_title">输出的json格式为</div>
            <div class="contentoutbox_contentbox9_textbox">
              <textarea name id cols="100" rows="30" readonly>
  {
      "History_window_out":[157,141,.......]
}
	
              </textarea>
            </div>
          </div>
          <!-- conten10 -->
          <div class="contentoutbox_contentbox10">
            <div class="contentoutbox_contentbox10_title">在线测试</div>
            <div class="contentoutbox_contentbox10_title2">编辑您的代码：</div>
            <div class="contentoutbox_contentbox10_textbox">
              <textarea name id cols="100" rows="30" v-model="messageallpressure" placeholder></textarea>
            </div>
            <div @click="Window_wash_p" class="contentoutbox_contentbox10_djyx">点击运行</div>
          </div>
          <!-- conten11 -->
          <div class="contentoutbox_contentbox11">
            <div class="contentoutbox_contentbox11_title2">运行结果:</div>
            <div class="contentoutbox_contentbox11_textbox">
              <textarea name id cols="100" rows="30" v-model="resmsgallpressure" readonly></textarea>
            </div>
          </div>
          <!-- conten12 echarts部分 -->
          <div class="contentoutbox_contentbox12">
            <allpressureecharts/>
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
import allpressureecharts from "@/components/Cloudedevelopment/DataWash/echarts/allpressureecharts"
export default {
  name: "allpressure",
  components:{
   allpressureecharts
  },
  data() {
    return {
      messageallpressure: JSON.stringify(defalftdata.allpressuredata),
      resmsgallpressure: JSON.stringify(defalftdata.allpressureresdata),
       messageallpressure2: {...defalftdata.allpressuredata},
    };
  },
  mounted() {},
  methods: {
    Window_wash_p() {
      var params = this.messageallpressure;
      this.$axios
        .post(Urlclass.UrlclassData_wash_f + "/Windowwashp/Window_wash_p", params)
        .then(res => {
          var that = this;
          that.resmsgallpressure =JSON.stringify(res.data);
          var resdata=res.data
          var params2=that.messageallpressure2
          var washdata={params2,resdata}
          Bus.$emit("washdatafunallpressure", washdata);
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
  height: 80px;
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
  border: 1px solid #d6d9dd;
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
  margin-top: 40px;
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


