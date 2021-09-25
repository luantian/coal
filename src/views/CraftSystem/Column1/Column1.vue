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
    </div>
  </div>
</template>

<script>

  import SubTitle from "../SubTitle";
  import OutputInfoModel from "@/models/OutputInfo";

  import CustomLine from '@/components/Echarts/CustomLine'

  const outputRadios = [
    { name: '当月', value: 3 },
    { name: '本月', value: 2 },
    { name: '年度', value: 1 }
  ]

  export default {
    name: 'Column1',
    components: { SubTitle, CustomLine },
    data() {
      return {
        outputRadios,
        outputValue: 3,
        lineDataset: { source: [] }
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
        console.log('data', data)
        this.lineDataset.source = data
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
</style>
