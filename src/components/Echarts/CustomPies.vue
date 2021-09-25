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

        const data = [
          ['装备制造', 44],
          ['现代材料', 55],
          ['新能源', 66]
        ]
        let titleArr= [], seriesArr = []
        const colors = [['#389af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'],['#a181fc', '#e3d9fe']]

        data.forEach((item, index) => {
          titleArr.push(
            {
              text: item[0],
              left: index * 20 + 10 +'%',
              top: '20%',
              textAlign: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: colors[index][0],
                textAlign: 'center',
              },
            }
          );
          seriesArr.push(
            {
              name: item[0],
              type: 'pie',
              clockwise: false,
              radius: [30, 40],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              textStyle:  {
                color: colors[index][0],
              },
              center: [index * 20 + 10 +'%', '50%'],
              data: [
                {
                  value: item[1],
                  label: {
                    formatter: function(params){
                      return params.value+'%';
                    },
                    position: 'center',
                    show: true,
                    axisLabel: {
                      fontSize: '20',
                      fontWeight: 'bold',
                      color: colors[index][0]
                    }
                  },
                },
                {
                  value: 100-item[1],
                  name: 'invisible',
                  axisLabel: {
                    color: colors[index][1]
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
  .__pie {
    width: 100%;
    height: 100%;
  }
</style>
