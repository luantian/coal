<template>
  <div class="column1">
    <div class="output">
      <sub-title>产量统计</sub-title>
      <div class="radio-group">
        <el-radio-group v-model="outputValue" size="medium" @change="onOutputChange">
          <el-radio-button v-for="item in outputRadios" :label="item.value" :key="item.name">{{ item.name }}</el-radio-button>
        </el-radio-group>
        <div class="__line-wrap">
          <custom-line :dataset="lineDataset"></custom-line>
        </div>
      </div>

      <sub-title>轮斗利用率</sub-title>
      <div class="pies">
        <div class="__pies-wrap">
          <custom-pies :dataset="piesDataset"></custom-pies>
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

  const outputRadios = [
    { name: '当月', value: 3 },
    { name: '本月', value: 2 },
    { name: '年度', value: 1 }
  ]

  export default {
    name: 'Column1',
    components: { SubTitle, CustomLine, CustomPies },
    data() {
      return {
        outputRadios,
        outputValue: 3,
        lineDataset: { source: [] },
        piesDataset: { source: [] }
      }
    },
    mounted() {
      this.queryTotal(this.outputValue)
    },
    methods: {
      onOutputChange(v) {
        this.queryTotal(v)
      },
      async queryTotal(v) {
        const params = {
          selectType: v
        }
        const { data } = await OutputInfoModel.queryHistogramStatistics(params)
        this.lineDataset = { source: data }
        this.piesDataset = { source: [] }
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

  .radio-group {
    text-align: center;
  }

  .__line-wrap, .__pies-wrap {
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
