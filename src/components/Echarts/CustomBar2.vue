<template>
  <div class="__bar" ref="__bar">

  </div>
</template>

<script>
export default {
  name: 'CustomBar2',
  props: {
    dataset: {
      type: Object,
      required: true
    },
    xUnit: {
      type: String,
      required: true
    },
    yUnit: {
      type: String,
      required: true
    },
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
      this.myChart = this.$echarts.init(this.$refs.__bar)
      this.option = {
        toolTip: {
          show: true
        },
        xAxis: {
          type: 'category',
          name: this.xUnit,
          textStyle: {
            color: '#fff',
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: this.yUnit,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 30,
            showBackground: true,
            itemStyle: {
              color: '#7CF4FF'
            },
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
    },
    render() {
      this.option.dataset = this.dataset
      this.option && this.myChart.setOption(this.option);
    }
  },
  watch: {

    dataset: {
      deep: true,
      handler() {
        this.render()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.__bar {
  width: 100%;
  height: 100%;
}
</style>
