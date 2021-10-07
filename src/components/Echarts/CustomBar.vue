<template>
  <div class="__bar" ref="__bar">

  </div>
</template>

<script>
  export default {
    name: 'CustomBar',
    props: {
      dataset: {
        type: Object,
        required: true
      },
      unitX: {
        type: String,
        required: true
      },
      unitY: {
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
            data: ['储装量', '高度']
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
              name: '立方米',
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
              name: '米',
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
          series: [
            {
              name: '储装量',
              type: 'bar',
            },
            {
              name: '高度',
              type: 'bar',
              yAxisIndex: 1
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
  .__bar {
    width: 100%;
    height: 100%;
  }
</style>
