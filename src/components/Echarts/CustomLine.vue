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
          // toolbox: {
          //   show: true,
          //   feature: {
          //     myFull: {
          //       show: true,
          //       icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          //       onclick: (e) => {
          //         var opts = e.getOption()
          //         opts.toolbox[0].feature.myFull.show = false
          //         console.log('opts', opts)
          //
          //         const container = document.querySelector('.full-screen')
          //         const main = container.querySelector('.full-screen-main')
          //         console.log('container', container)
          //         container.style.display = 'flex'
          //         const myChart = this.$echarts.init(main)
          //         myChart.setOption(opts)
          //
          //       }
          //     }
          //   }
          // },
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
