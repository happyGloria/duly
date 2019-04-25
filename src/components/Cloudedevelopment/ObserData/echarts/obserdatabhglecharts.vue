<template>
  <div class="outbox" v-show="ishow">
    <div :class="className" :style="{height:height,width:width}"/>
  </div>
</template>

<script>
import Bus from "@/bus.js";
import { debounce } from "@/utils";
export default {
  name: "obserdatabhglecharts",
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
    Bus.$on("obserdatabhglfun", e => {
          console.log("%ce", "font-size:24px;color:red",e); 
      this.ishow=true
    var arr = e.params2.Data_1;
      var arr2 = e.params2.Data_2
      var v = e.resdata.Sim_per
      var  cc = arr.concat(v)
      var e = [];
      for (var i = 0; i < cc.length; i++) {
        e.push(i)
      }
     

      var a = {
          arr,
          arr2,
          e,
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
          text: '监测数据变化规律相似性分析曲线',
          padding: [20, 0, 4, 20],
        },
          grid:{
          top:90
        },
        legend: {
          data: ['数据1', '数据2'],
          top:40
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: chartData.e
        },

        yAxis: {
          type: 'value',
          //splitLine: { show: false },//去除网格线
          axisLabel: {
            formatter: '{value}'
          },
          axisPointer: {
            snap: true
          }
        },

        series: [{
            name:'数据1',
            type: 'line',
            smooth: true,
            data: chartData.arr,
            symbol: 'roundRect',
            symbolSize: 0.1,
            /* areaStyle: {
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
          {
            name: '数据2',
            type: 'line',
            smooth: true,
            /* areaStyle: {
            normal: {}
            }, */
            symbol: 'triangle',
            symbolSize: 60,
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: 'yellow',
                color: 'green',
                opacity: 0.3
              },
              emphasis: {
                borderType: 'dotted',
                itemStyle: {
                  borderColor: 'blue',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 10,
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                      offset: 0,
                      color: 'red' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                },

              }
            },
            data: chartData.arr2,
            symbol: 'roundRect',
            symbolSize: 1,
          },
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

