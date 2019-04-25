<template>
  <div class="outbox" v-show="ishow">
    <div :class="className" :style="{height:height,width:width}"/>
  </div>
</template>

<script>
import Bus from "@/bus.js";
import { debounce } from "@/utils";
export default {
  name: "allpressureecharts",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "120px"
    },
    autoResize: {
      type: Boolean,
      default: true
    }
    /*  chartData: {
      type: Object,
      required: true
    } */
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      chartData: {},
      ishow:false
    };
  },
 /*  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  }, */
  mounted() {
    Bus.$on("washdatafunallpressure", e => {
      this.ishow=true
      /*  console.log("%cad", "font-size:24px;color:red", e); */
      var arr = e.params2.History_window_in;
     var v=e.resdata.History_window_out
       e = [];
      for (var i = 0; i < arr.length; i++) {
        e.push(i)
      }
     ;
      var a = {
        arr,
        e,
       v
      };
    /*   console.log("%cad", "font-size:24px;color:red", d);
      console.log("%carr.History_window", "font-size:24px;color:red", a); */
      this.chartData = a;
      var that=this
     setTimeout(function(){
        that.initChart()
     },100)
    });
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.__resizeHandler();
      }
    },
    setOptions(chartData) {
      this.chart.setOption({
        title: {
          text: '批量压力监测数据清洗',
          padding: [20, 0, 4, 20]
        },
        grid:{
          top:90
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['历史数据', '清洗后数据'],
          top:30
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: chartData.e
          },
         
        ],

   
        yAxis: {
          type: 'value',
          //splitLine: { show: false },//去除网格线
          axisLabel: {
            formatter: '{value}'
          },
          axisPointer: {
            snap: true
          },
          name: '(MPa)',
          /* splitNumber: '4', */
          //splitLine: { show: false },//去除网格线
          axisLabel: {
            formatter: '{value}'
          },
          axisPointer: {
            snap: true
          },
          nameGap: '8',
          nameTextStyle: {
            align: 'center',
            verticalAlign: 'top',
            color: 'black',
            padding: [33, 6, 4, 0],
            shadowOffsety: 6,
            fontFamily: 'Microsoft YaHei',
            /* fontWeight: 'bold', */
            /* fontStyle: 'italic' */

          },
        },
        series: [{
            name: '清洗后数据',
            type: 'line',
            smooth: true,
            /* areaStyle: {
            normal: {}
            }, */
            symbol: 'triangle',
            symbolSize: 60,
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'green',
                opacity: 0.3
              }
            },
            data: chartData.v,
            symbol: 'roundRect',
            symbolSize: 1,
          },
          {
            name: '历史数据',
            type: 'line',
            smooth: true,
            data: chartData.arr,
            symbol: 'roundRect',
            symbolSize: 0.1,
            /*  areaStyle: {
               normal: {
                 color: 'red',
                 opacity: 0.3
               }
             }, */
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1.5, //折线宽度
                  color: "red", //折线颜色
                  opacity: 0.8
                }
              }
            },
          },

        ]
      }
);
    },
    initChart() {
      this.chart = this.$echarts.init(this.$el, "macarons");
      this.chart.clear();
      this.setOptions(this.chartData);
    }
  }
};
</script>
<style scoped>
.outbox {
  width: 100%;
  height: 480px;
  background-color: rgb(240, 240, 240);
}
</style>

