<template>
  <div class="echarts-map-3D" ref="__echartsMap3D">

  </div>
</template>

<script>

// import buildingsGeoJSON from '@/utils/buildingsGeoJSON'
import chinaData from '@/utils/china'
import geoCoordMap from '@/utils/geoCoordMap'
import 'echarts-gl';

export default {
  name: 'EchartsMap3D',
  data() {
    return {

    }
  },
  mounted() {

    this.myChart = this.$echarts.init(this.$refs.__echartsMap3D)
    this.$echarts.registerMap('china', chinaData);

    let alirl = [
        [
            [121.15, 31.89],
            [109.781327, 39.608266]
        ],
        [
            [120.38, 37.35],
            [122.207216, 29.985295]
        ],
        [
            [123.97, 47.33],
            [120.13, 33.38]
        ],
        [
            [118.87, 42.28],
            [120.33, 36.07]
        ],
        [
            [121.52, 36.89],
            [117.93, 40.97]
        ],
        [
            [102.188043, 38.520089],
            [122.1, 37.5]
        ],
        [
            [118.58, 24.93],
            [101.718637, 26.582347]
        ],
        [
            [120.53, 36.86],
            [121.48, 31.22]
        ],
        [
            [119.46, 35.42],
            [122.05, 37.2]
        ],
        [
            [119.97, 35.88],
            [116.1, 24.55]
        ],
        [
            [121.05, 32.08],
            [112.02, 22.93]
        ],
        [
            [91.11, 29.97],
            [118.1, 24.46]
        ]
    ]
    let convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        // console.log(res)
        return res;
    };
    console.log('convertData', convertData([]))
    let option = {
      title: {
        text: '全国行政区划3D地图',
        x: 'center',
        top: "20",
        textStyle: {
          color: '#000',
          fontSize: 24
        }
      },
      tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
      },

      geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
          areaColor: 'rgb(5,101,123)',
          opacity: 1,
          borderWidth: 0.8,
          borderColor: 'rgb(62,215,213)'
        },
        label: {
          show: true,
          color: '#fff', //地图初始化区域字体颜色
          fontSize: 16,
          opacity: 1,
          backgroundColor: 'rgba(0,0,0,0)'
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
          label: {
            show: true,
            color: '#fff',
            fontSize: 16,
            backgroundColor: 'rgba(0,23,11,0)'
          }
        },
        shading: 'lambert',
        light: { //光照阴影
          main: {
            color: '#fff', //光照颜色
            intensity: 1.2, //光照强度
            //shadowQuality: 'high', //阴影亮度
            shadow: false, //是否显示阴影
            alpha: 55,
            beta: 10
          },
          ambient: {
            intensity: 0.3
          }
        },
        viewControl: {
          // autoRotate: true
          minDistance: 100,
          maxDistance: 100,
          alpha: 60
        },
        realisticMaterial:{
          detailTexture: document.querySelector('#aaa')
        }
      },
      series: [
        {
          type: 'lines3D',
          coordinateSystem: 'geo3D',
          effect: {
            show: true,
            trailWidth: 4,
            trailOpacity: 0.5,
            trailLength: 0.3,
            constantSpeed: 5
          },
          blendMode: 'lighter',
          lineStyle: {
            width: 0.2,
            opacity: 0.05
          },
          zoom: 1.3,
          data: alirl
        },

      ]
    };
    this.myChart.setOption(option)
  }
}

</script>

<style lang="less" scoped>
  .echarts-map-3D {
    width: 100%;
    height: 100%;
  }
</style>
