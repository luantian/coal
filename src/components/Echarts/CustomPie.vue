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
    },
    unit: {
      type: Object
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
          trigger: 'item',
          formatter: (p) => {
            let result = ''
            if (this.unit) {
              result = p.value[1] + this.unit
            } else {
              result = p.value[1]
            }
            return result
          }
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
            // name: 'Access From',
            type: 'pie',
            radius: ['30%', '50%'],
            label: {
              show: true,
              position: 'outside',
              distanceToLabelLine: 5
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
