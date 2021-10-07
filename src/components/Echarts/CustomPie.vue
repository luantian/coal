<template>
  <div class="__pie" ref="__pie">

  </div>
</template>

<script>
export default {
  name: 'CustomPie',
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
      this.myChart = this.$echarts.init(this.$refs.__pie)
      this.option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
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
.__pie {
  width: 100%;
  height: 100%;
}
</style>
