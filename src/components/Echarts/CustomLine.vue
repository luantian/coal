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
        this.myChart = this.$echarts.init(this.$refs.__line)
        const color = '#fff'
        const nameTextStyle = {
          color
        }
        this.option = {
          xAxis: {
            type: 'category',
            name: '时',
            nameTextStyle,
            axisLabel: {
              textStyle: {
                color  //更改坐标轴文字颜色
              }
            }
          },
          yAxis: {
            type: 'category',
            name: '万吨',
            nameTextStyle,
            axisLabel: {
              textStyle: {
                color,  //更改坐标轴文字颜色
              }
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
  .__line {
    width: 100%;
    height: 100%;
  }
</style>
