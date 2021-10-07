<template>
  <div class="__pie" ref="__pie">

  </div>
</template>

<script>
  export default {
    name: 'CustomPies',
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

    },
    methods: {
      init() {
        this.myChart = this.$echarts.init(this.$refs.__pie)

        // const data = [
        //   ['故障率', 44],
        //   ['出动率', 55],
        //   ['实动率', 66]
        // ]


        const data = this.dataset.source

        console.warn(data.length === 0)

        if (data.length === 0) return

        let titleArr= [], seriesArr = []
        const colors = [['#1F3E8E', '#FFB14C'],['#1F3E8E', '#7CF4FF'],['#1F3E8E', '#2DB2FF']]

        const margin = 30

        data.forEach((item, index) => {
          titleArr.push(
            {
              text: item[0],
              left: index * margin + 19 +'%',
              top: '60%',
              textAlign: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: 12,
                textAlign: 'center',
              },
            }
          );
          seriesArr.push(
            {
              name: item[0],
              type: 'pie',
              clockwise: false,
              radius: [40, 46],
              label: {
                show: false,
                align: 'center'
              },
              labelLine: {
                show: false
              },
              textStyle:  {
                color: colors[index][0],
              },
              itemStyle: {
                color: colors[index][1]
              },
              center: [index * margin + 20 +'%', '30%'],
              data: [
                {
                  value: item[1],
                  label: {
                    formatter: (params) => `${params.value}%`,
                    position: 'center',
                    top: 20,
                    show: true,
                    color: '#fff',
                    fontSize: 18
                  },
                  zIndex: 3
                },
                {
                  value: 100 - item[1],
                  name: 'invisible',
                  itemStyle: {
                    color: colors[index][0]
                  },
                  emphasis: {
                    scale: true,
                    axisLabel: {
                      color: colors[index][1]
                    },
                  }
                }
              ]
            }
          )
        });

        this.option = {
          title:titleArr,
          series: seriesArr
        }

      },
      render() {
        // this.option.dataset = this.dataset
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
  .__pie {
    width: 100%;
    height: 100%;
  }
</style>
