<template>
  <div class="__bar_line" ref="__bar_line">

  </div>
</template>

<script>
export default {
  name: 'CustomBarLine',
  props: {
    dataset: {
      type: Array,
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
          show: true,
          // orient: 'vertical',
          itemWidth: 5,
          textStyle: {
            color: '#fff'
          },
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
        },
        // dataZoom: [
        //   {
        //     startValue: '00'
        //   },
        //   {
        //     type: 'inside'
        //   }
        // ],
        yAxis: [
          {
            show: true,
            type: 'value',
            name: '千瓦',
            nameTextStyle,
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
        series: this.createSeries()
      };
    },
    createSeries() {
      const AACM = [
        { name: '111皮带' },
        { name: '112皮带' },
        { name: '113皮带' },
        { name: '121皮带' },
        { name: '122皮带' },

        { name: '111皮带' },
        { name: '112皮带' },
        { name: '113皮带' },
        { name: '121皮带' },
        { name: '122皮带' },
      ]
      const result = AACM.map((item, index) => {
        const r = index >= (AACM.length / 2)

        // 折线图 功率
        // 柱形图 能耗

        return {
          name: item.name,
          type: r ? 'line' : 'bar',
          yAxisIndex: r ? 1 : 0,
          datasetIndex: r ? 1 : 0,

        }

      })

      console.log('result', result)

      return result
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
