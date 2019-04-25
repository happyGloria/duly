<template>
  <div class="outbox" v-show="ishow">
    <div :class="className" :style="{height:height,width:width}"/>
  </div>
</template>

<script>
import Bus from "@/bus.js";
import { debounce } from "@/utils";
export default {
  name: "singlepointerflowecharts",
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
    Bus.$on("washdatafunp", e => {
      this.ishow=true
      var arr = e.params2.History_window;
      var d = arr.length - Number(e.params2.Step_n) - 1;
      var e = [];
      for (var i = 0; i < arr.length; i++) {
        e.push(i);
      }
      var x = e[d];
      var y = arr[d];
      var a = {
        arr,
        e,
        x,
        y
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
          text: "单点压力监测数据清洗曲线",
          padding: [20, 0, 4, 20]
        },
        grid:{
          top:90
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: chartData.e
        },

        yAxis: {
          type: "value",
          //splitLine: { show: false },//去除网格线
          axisLabel: {
            formatter: "{value}"
          },
          axisPointer: {
            snap: true
          },
          name: "(Mpa)",
          /* splitNumber: '4', */
          //splitLine: { show: false },//去除网格线
          axisLabel: {
            formatter: "{value}"
          },
          axisPointer: {
            snap: true
          },
          nameGap: "8",
          nameTextStyle: {
            align: "center",
            verticalAlign: "top",
            color: "black",
            padding: [33, 4, 4, 0],
            shadowOffsety: 6,
            fontFamily: "Microsoft YaHei"
            /* fontWeight: 'bold', */
            /* fontStyle: 'italic' */
          }
        },

        series: [
          {
            name: "压力",
            type: "line",
            /* smooth: true, */
            data: chartData.arr,
            symbol: "roundRect",
            symbolSize: 1,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1.5, //折线宽度
                  color: "#548ff6" //折线颜色
                }
              }
            },
            markPoint: {
              data: [
                {
                  name: "最大值",
                  value:chartData.y,
                  xAxis: chartData.x,
                  yAxis: chartData.y
                }
              ]
            
            }
          }
        ]
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

