<template>
  <div class="column3">
    <div class="row1">
      <sub-title>工作时间统计</sub-title>
      <div class="radio-group">
        <el-radio-group v-model="workTimeValue" @change="onWorkTimeChange">
          <el-radio-button v-for="item in workTimes" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
        </el-radio-group>
      </div>
      <div class="__line-wrap">
        <custom-line :dataset="workTimeDataset" :x-unit="outputUnit" y-unit="小时"></custom-line>
      </div>
    </div>

    <div class="row2">
      <sub-title>项目部领导值班表</sub-title>
      <div class="__content">
        <div class="__header">
          <div>值班领导</div>
          <div>当班工长</div>
          <div>值班调度</div>
        </div>
        <div class="__body">
          <div>
            <div class="__btn __leader">{{ duty.leaderName }}</div>
          </div>
          <div>
            <div class="__btn">{{ duty.foremanName }}</div>
          </div>
          <div>
            <div class="__btn">{{ duty.dispatchName }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row3">
      <sub-title>AACM电能消耗</sub-title>
<!--      <div class="radio-group">-->
<!--        <el-checkbox-group v-model="checkboxList">-->
<!--          <el-checkbox-button v-for="item in motorTemperatures" :label="item.name" :key="item.name">{{ item.name }}</el-checkbox-button>-->
<!--        </el-checkbox-group>-->
<!--      </div>-->
      <div class="__bar_line-wrap">
        <custom-bar-line :dataset="barLineDataset" x-unit="千瓦" y-unit="时"></custom-bar-line>
      </div>
    </div>

    <div class="row4">
      <sub-title>皮带电机温度</sub-title>
      <div class="radio-group">
        <el-radio-group v-model="motorTemperatureValue" @change="onMotorTemperaturesChange">
          <el-radio-button v-for="item in motorTemperatures" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
        </el-radio-group>
      </div>
      <div class="row4_line-wrap">
        <custom-line :dataset="lineDataset" x-unit="时" y-unit="℃"></custom-line>
      </div>
    </div>
  </div>
</template>

<script>

  import SubTitle from "../SubTitle";

  import CustomLine from '@/components/Echarts/CustomLine'
  import CustomBarLine from '@/components/Echarts/CustomBarLine'

  import OutputInfoModel from "@/models/OutputInfo";
  import LeaderOnDuty from "@/models/LeaderOnDuty"

  const workTimes = [
    { name: '当日', value: 3 },
    { name: '本月', value: 2 },
    { name: '年度', value: 1 }
  ]

  const unit = {
    1: '月',
    2: '日',
    3: '时'
  }

  // const keysss = ['belt_111', 'belt_112', 'belt_113', 'belt_121', 'belt_122']


  const motorTemperatures = [
    { name: '111皮带', value: 0, key: 'belt_111#motortem_1a' },
    { name: '112皮带', value: 1, key: 'belt_112#motortem_1a' },
    { name: '113皮带', value: 2, key: 'belt_113#motortem_a' },
    { name: '121皮带', value: 3, key: 'belt_121#motortem_a' },
    { name: '122皮带', value: 4, key: 'belt_122#motortem_a' }
  ]

  export default {
    name: 'Column3',
    components: { SubTitle, CustomLine, CustomBarLine },
    data() {
      return {
        unit,
        outputUnit: '时',
        workTimes,
        workTimeValue: 3,
        motorTemperatures,
        motorTemperatureValue: 0,
        workTimeDataset: { source: [] },
        duty: {},
        checkboxList: [],
        lineDataset: {},
        barLineDataset: []
      }
    },
    mounted() {
      this.barLineDataset =
        [
          {
            source: [
              //     设备1功率，设备2功率...  设备7功率
              ['00', 10, 100, 101, 102, 103, 104, 105, 111],
              ['01', 20, 200, 201, 202, 203, 204, 205, 222],
              ['02', 30, 300, 301, 302, 303, 304, 305, 333],
              ['03', 40, 400, 401, 402, 403, 404, 405, 444]
            ]
          },
          {
            source: [
              //     设备1能耗，设备2能耗...  设备7能耗
              ['00', 70, 700, 701, 702, 703, 704, 705, 711],
              ['01', 80, 800, 801, 802, 803, 804, 805, 822],
              ['02', 90, 900, 901, 902, 999, 904, 905, 933],
              ['03', 50, 500, 501, 502, 503, 504, 505, 544]
            ]
          }
        ]

      this.queryWorkTime(this.workTimeValue)
      this.queryScreen()
      this.queryAACM(3)
      this.queryMotorTemperature(3)
    },
    methods: {
      onWorkTimeChange(v) {
        this.outputUnit = this.unit[v]
        this.queryWorkTime(v)
      },
      onMotorTemperaturesChange(v) {
        const key = motorTemperatures[v].key
        this.lineDataset = {
          source: this.barLineData[key].statisticsData
        }
        console.log('this.lineDataset', this.lineDataset)
      },
      async queryWorkTime(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryRealityHistogramStatistics(params)
        this.workTimeDataset = { source: data }
        console.log('查询工作时间 data', data)
      },

      // 值班领导查询
      async queryScreen() {
        const { data } = await LeaderOnDuty.queryScreen()
        this.duty = data
      },

      async queryAACM(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryAACM(params)
        console.log('查询AACM data', data)

        // //
        // this.barLineDataset = keysss.map((key) => {
        //
        //   // power_sourceData.push()
        //
        //   // return {
        //   //   source: data[key]
        //   // }
        // })
        // // console.log('this.barLineDataset', this.barLineDataset)
      },

      async queryMotorTemperature(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryMotorTemperature(params)
        // console.log('_____________queryMotorTemperature_____________', data)
        this.barLineData = data
        this.onMotorTemperaturesChange(this.motorTemperatureValue)

      },

    }
  }
</script>


<style lang="scss" scoped>
  .column3 {
    width: 450px;
    padding-right: 40px;
    box-sizing: border-box;
  }

  .radio-group {
    text-align: center;
    position: relative;
    top: -20px;
    z-index: 21;
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

  .__line-wrap, .__bar_line-wrap, .row4_line-wrap {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 20;
  }

  .__line-wrap {
    top: 30px;
    bottom: -20px;
  }

  .__bar_line-wrap {
    top: 40px;
    left: 10px;
    right: 10px;
    bottom: -20px;
  }

  .row4_line-wrap {
    top: 40px;
    left: 10px;
    right: 10px;
    bottom: -20px;
  }



  .__content {
    font-size: 16px;
    text-align: center;
    .__header {
      display: flex;
      > div {
        flex: 1;
        justify-content: center;
        display: flex;
      }

      > div:last-of-type {
        flex: 2 !important;
      }
    }

    .__body {
      display: flex;
      margin-top: 10px;
      > div {
        flex: 1;
        justify-content: center;
        display: flex;
      }

      > div:last-of-type {
        flex: 2 !important;
      }

      .__btn {
        width: 72px;
        height: 38px;
        line-height: 38px;
        background:url("~@/assets/img/__btn.png") no-repeat;
        font-size: 16px;
        margin: 0 10px;
      }

      .__btn.__leader {
        font-size: 18px;
      }
    }
  }






</style>
