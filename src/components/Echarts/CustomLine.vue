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
        this.option = {
          xAxis: {
            type: 'category',
          },
          yAxis: {
            type: 'category',
            textStyle: {
              color: '#fff',  //更改坐标轴文字颜色
              fontSize : 14      //更改坐标轴文字大小
            }
          },
          series: [
            {
              type: 'line',
            }
          ]
        }
        this.render()
      },
      render() {
        this.option.dataset = this.dataset
        this.option && this.myChart.setOption(this.option);
      }
    },
    watch: {
      dataset(newval) {
        console.log('newval', newval)
        this.render()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .__line {
    height: 300px;
  }
</style>
