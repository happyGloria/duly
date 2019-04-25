<template>
  <div class="outbox" v-show="ishow">
    <div :class="className" :style="{height:height,width:width}"/>
  </div>
</template>

<script>
import Bus from "@/bus.js";
import { debounce } from "@/utils";
export default {
  name: "pressuerforcastecharts",
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
    Bus.$on("pressuerforcastfun", e => {
          console.log("%ce", "font-size:24px;color:red",e); 
      this.ishow=true
      var arr = e.params2.History_window;
      var  xdata = arr.length / e.params2.Point_count_1_day + e.params2.Forecast_day
      var v = e.resdata.Data_out
      var cc = arr.concat(v)
      var e = [];
      for (var i = 0; i <= cc.length - 1; i++) {
        e.push(i)
      }
      var d = arr.length
      var e2 = [];
      for (var i = 0; i <= xdata; i++) {
        e2.push(i)
      }
      var a = {
        cc,
        e,
        e2,
       d
      };
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
          text: '压力短期预测曲线',
           padding: [20, 0, 4, 20],
          subtextStyle: {
            color: "green",
            fontStyle: 'italic',

          }
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
        toolbox: {
          show: true,
          right: 0,
          itemSize: 20,
          top: 2,
          /* feature: {
            saveAsImage: {}
          } */
        },
        xAxis: [{
            show: false,
            type: 'category',
            boundaryGap: false,
            data: chartData.e
          },
          {
            name: '(天)',
            type: 'category',
            boundaryGap: false,
            data: chartData.e2,
            position: 'bottom',
            nameLocation: 'end',
            nameGap: '8',
            nameTextStyle: {
              align: 'center',
              verticalAlign: 'top',
              color: 'black',
              padding: [33, 4, 4, 4],
              shadowOffsetX: 1,
              fontFamily: 'Microsoft YaHei',
              /*  fontWeight: 'bold', */
              /* fontStyle: 'italic' */
            }
          },
        ],

        yAxis: {
          type: 'value',
          name: '(m3/h)',
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
            padding: [33, 4, 4, 0],
            shadowOffsety: 6,
            fontFamily: 'Microsoft YaHei',
            /* fontWeight: 'bold', */
            /* fontStyle: 'italic' */
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          itemSymbol: 'diamond',
          pieces: [{
            gt: 0,
            lte: chartData.d,
            color: 'green',

          }, {
            gt: chartData.d,
            color: 'red',

          }]
        },
        series: [{
          name: '流量',
          type: 'line',
          /* smooth: true, */
          data: chartData.cc,
          symbol: 'roundRect',
          symbolSize: 1,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1.5, //折线宽度
                /*  color: "#548ff6" */ //折线颜色
              }
            }
          },
      
          markLine: {
            silent: true,
            data: [{
              xAxis: chartData.d,
            }, ]
          },
        
        }]
      });
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

