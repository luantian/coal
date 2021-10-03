<template>
  <div class="__bar_line" ref="__bar_line">

  </div>
</template>

<script>
export default {
  name: 'CustomBarLine',
  props: {
    dataset: {
      type: Object,
      required: true
    },
    xUnit: {
      type: String,
    },
    yUnit: {
      type: String,
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.myChart = this.$echarts.init(this.$refs.__bar_line)
      const color = '#fff'
      const nameTextStyle = {
        color
      }
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          textStyle: {
            color: '#97DEFF'
          },
          data: ['功率', '能耗']
        },
        xAxis: {
          type: 'category',
          nameTextStyle,
          axisLabel: {
            textStyle: {
              color  //更改坐标轴文字颜色
            }
          },
          boundaryGap: ['20%', '20%']
        }
        ,
        yAxis: [
          {
            show: true,
            type: 'value',
            name: '千瓦',
            nameTextStyle,
            interval: 200,
            min: 0,
            max: 600,
            axisLabel: {
              textStyle: {
                color  //更改坐标轴文字颜色
              },
            },
            splitLine: {
              show: false
            }
          },
          {
            show: true,
            type: 'value',
            name: '千瓦/时',
            nameTextStyle,
            interval: 2.5,
            min: 0,
            max: 10.0,
            axisLabel: {
              textStyle: {
                color  //更改坐标轴文字颜色
              },
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '储装量',
            type: 'bar',
          },
          {
            name: '高度',
            type: 'bar',
          },
        ]
      };
    },
    render() {
      this.option.dataset = this.dataset
      this.option && this.myChart.setOption(this.option);
    }
  },
  watch: {
    dataset() {
      this.render()
    }
  }
}
</script>

<style lang="scss" scoped>
  .__bar_line {
    width: 100%;
    height: 100%;
  }
</style>
