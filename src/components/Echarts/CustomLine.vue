<template>
  <div class="__line" ref="__line">

  </div>
</template>

<script>
  export default {
    name: 'CustomLine',
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
        if (!this.myChart) {
          this.myChart = this.$echarts.init(this.$refs.__line)
        }
        const color = '#fff'
        const nameTextStyle = {
          color
        }
        this.option = {
          tooltip: {
            show: true,
            trigger: 'axis'
          },
          grid: {
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name: this.xUnit,
            nameTextStyle,
            axisLabel: {
              textStyle: {
                color  //更改坐标轴文字颜色
              }
            },
            boundaryGap: ['20%', '20%']
          },
          yAxis: {
            type: 'value',
            name: this.yUnit,
            nameTextStyle,
            axisLabel: {
              textStyle: {
                color,  //更改坐标轴文字颜色
              }
            },
            splitLine: {
              show: false
            }
          },
          series: [
            {
              type: 'line',
              smooth: true
            }
          ]
        }
      },
      render() {
        this.myChart.clear()
        this.option.dataset = this.dataset
        this.option && this.myChart.setOption(this.option);
      }
    },
    watch: {
      dataset() {
        this.init()
        this.render()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .__line {
    width: 100%;
    height: 100%;
  }
</style>
