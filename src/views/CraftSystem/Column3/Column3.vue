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
        <custom-line :dataset="workTimeDataset" y-unit="小时"></custom-line>
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
<!--            <div class="__btn">栾一天</div>-->
          </div>
        </div>
      </div>
    </div>

    <div class="row3">
      <sub-title>AACM电能消耗</sub-title>
      <div class="__bar_line-wrap">
        <custom-bar-line :dataset="barLineDataset" x-unit="千瓦" y-unit="时"></custom-bar-line>
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

  export default {
    name: 'Column3',
    components: { SubTitle, CustomLine, CustomBarLine },
    data() {
      return {
        workTimes,
        workTimeValue: 3,
        workTimeDataset: { source: [] },
        duty: {},
        barLineDataset: { source: [] }
      }
    },
    mounted() {
      this.queryWorkTime(this.workTimeValue)
      this.queryScreen()
      this.queryAACM(3)
    },
    methods: {
      onWorkTimeChange(v) {
        this.queryWorkTime(v)
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
        this.barLineDataset = { source: data }
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
    z-index: 2;
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

  .__line-wrap, .__bar_line-wrap {
    position: absolute;
    left: 0;
    right: 0;
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
