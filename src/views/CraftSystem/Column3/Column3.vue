<template>
  <div class="column3">
    <sub-title>工作时间统计</sub-title>
    <div class="radio-group">
      <el-radio-group v-model="workTimeValue" @change="onWorkTimeChange">
        <el-radio-button v-for="item in workTimes" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
      </el-radio-group>
      <div class="__line-wrap">
        <custom-line :dataset="workTimeDataset" y-unit="小时"></custom-line>
      </div>
    </div>
  </div>
</template>

<script>

  import SubTitle from "../SubTitle";

  import CustomLine from '@/components/Echarts/CustomLine'

  import OutputInfoModel from "@/models/OutputInfo";

  const workTimes = [
    { name: '当月', value: 3 },
    { name: '本月', value: 2 },
    { name: '年度', value: 1 }
  ]

  export default {
    name: 'Column3',
    components: { SubTitle, CustomLine },
    data() {
      return {
        workTimes,
        workTimeValue: 3,
        workTimeDataset: { source: [] },
      }
    },
    mounted() {
      this.queryTotal(this.workTimeValue)
    },
    methods: {
      onWorkTimeChange(v) {
        this.queryTotal(v)
      },
      async queryTotal(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryHistogramStatistics(params)
        this.workTimeDataset = { source: data }
        this.piesDataset = { source: [] }
        this.barDataset = { source: [
          [ '1号装车仓', 400, 10.23 ],
          [ '2号装车仓', 603, 8.5 ],
          [ '3号装车仓', 821, 9.8 ]
        ] }
      }
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
  }

  .__line-wrap, .__pies-wrap, .__bar-wrap {
    height: 300px;
  }

  /deep/ .el-radio-button__inner {
    background-color: #091760;
    border: 1px solid #0B8FF5;
    color: #fff;
    border-right: none;
  }

  /deep/ .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #0B8FF5;
  }

  /deep/ .el-radio-button:last-child .el-radio-button__inner {
    border-right: 1px solid #0B8FF5;
  }

</style>
