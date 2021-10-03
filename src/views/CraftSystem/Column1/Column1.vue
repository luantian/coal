<template>
  <div class="column1">
    <div class="output">
      <div class="row1">
        <sub-title>产量统计</sub-title>
        <div class="radio-group">
          <el-radio-group v-model="outputValue" @change="onOutputChange">
            <el-radio-button v-for="item in outputRadios" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
          </el-radio-group>
        </div>
        <div class="__line-wrap">
          <custom-line :dataset="lineDataset"></custom-line>
        </div>
      </div>


      <div class="row2">
        <sub-title>轮斗利用率</sub-title>
        <div class="__pies-wrap">
          <custom-pies :dataset="piesDataset"></custom-pies>
        </div>
      </div>

      <div class="row3">
        <sub-title>储量数据</sub-title>
        <div class="__bar-wrap">
          <custom-bar :dataset="barDataset"></custom-bar>
        </div>
      </div>

      <div class="row4">
        <sub-title>储量温度数据</sub-title>
        <div class="radio-group">
          <el-radio-group v-model="temperatureValue" @change="onTemperatureChange">
            <el-radio-button v-for="item in temperatures" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
          </el-radio-group>
        </div>
        <div class="__row4_line-wrap">
          <custom-line :dataset="temperatureDataset" :x-unit="' '" :y-unit="' '"></custom-line>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import SubTitle from "../SubTitle";
  import OutputInfoModel from "@/models/OutputInfo";
  import CustomLine from '@/components/Echarts/CustomLine'
  import CustomPies from "@/components/Echarts/CustomPies";
  import CustomBar from "@/components/Echarts/CustomBar";

  const outputRadios = [
    { name: '当天', value: 3 },
    { name: '本月', value: 2 },
    { name: '年度', value: 1 }
  ]
  const temperatures = [
    { name: '1号装车仓', value: 1 },
    { name: '2号装车仓', value: 2 },
    { name: '3号装车仓', value: 3 }
  ]

  export default {
    name: 'Column1',
    components: { SubTitle, CustomLine, CustomPies, CustomBar },
    data() {
      return {
        outputRadios,
        outputValue: 3,
        temperatures,
        temperatureValue: 1,
        lineDataset: { source: [] },
        piesDataset: { source: [] },
        barDataset: { source: [] },
        temperatureData: {},
        temperatureDataset: { source: [] }
      }
    },
    mounted() {
      this.queryTotal(this.outputValue)
      this.queryBucketreality()
      this.queryReserves()
      this.queryTemperature(this.temperatureValue)
    },
    methods: {
      onOutputChange(v) {
        this.queryTotal(v)
      },
      onTemperatureChange(v) {
        // this.queryTemperature(v)

        this.temperatureDataset = {
          source: this.temperatureData[`loadingbin#gautem_${v}`].statisticsData
        }

        console.log('v', this.temperatureDataset)
      },
      async queryTotal(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryHistogramStatistics(params)
        this.lineDataset = { source: data }

      },
      async queryBucketreality() {
        const { data } = await OutputInfoModel.queryBucketreality()
        this.piesDataset = {
          source: [
            ['故障率', data.faultPercent],
            ['出动率', data.outPercent],
            ['实动率', data.realityWorkPercent]
          ]
        }
      },
      async queryReserves() {
        const { data } = await OutputInfoModel.queryReserves()
        console.log('装车仓储量数据', data)

        const source = data.statisticsVolumeData

        data.statisticsHighData.forEach((item, index) => {
          source[index].push(item[1])
        })

        this.barDataset = { source }
      },
      async queryTemperature(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryTemperature(params)
        console.log('装车仓温度', data)

        this.temperatureData = data

        this.temperatureDataset = {
          source: data['loadingbin#gautem_1'].statisticsData
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .column1 {
    width: 450px;
    padding-left: 40px;
    box-sizing: border-box;
  }

  .row1, .row2, .row3, .row4 {
    position: relative;
  }

  .row1 {
    height: 240px;
  }

  .row2 {
    height: 180px;
  }

  .row3 {
    height: 230px;
  }

  .row4 {
    height: 230px;
  }

  .radio-group {
    text-align: center;
    position: relative;
    top: -20px;
    z-index: 2;
  }

  .__line-wrap, .__pies-wrap, .__bar-wrap, .__row4_line-wrap {
    position: absolute;
    left: 0;
    right: 0;
  }

  .__line-wrap {
    top: 30px;
    bottom: -20px;
  }
  .__pies-wrap {
    top: 40px;
    bottom: -20px;
  }

  .__bar-wrap {
    top: 40px;
    left: 10px;
    right: 10px;
    bottom: -20px;
  }

  .__row4_line-wrap {
    top: 30px;
    bottom: -20px;
  }



</style>
