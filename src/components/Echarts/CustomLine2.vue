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
        console.log('this.$refs.__line', this.$refs.__line)
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
        legend: {
          show: true,
          // orient: 'vertical',
          itemWidth: 5,
          textStyle: {
            color: '#fff'
          },
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
        series: this.createSeries()
      }
    },
    createSeries() {
      const AACM = [
        { name: '111皮带' },
        { name: '112皮带' },
        { name: '113皮带' },
        { name: '121皮带' },
        { name: '122皮带' },
      ]
      const result = AACM.map((item) => {

        // 折线图 功率
        // 柱形图 能耗

        return {
          name: item.name,
          type: 'line',
        }

      })

      console.log('result', result)

      return result
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
