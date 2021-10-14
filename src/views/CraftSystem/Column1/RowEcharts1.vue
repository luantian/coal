<template>
  <div class="row-echarts1">
    <div style="width: 300px;">
      <el-date-picker
        v-model="dateTime"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
      <el-button @click="onQuery" type="primary">查询</el-button>
    </div>
    <custom-line :dataset="dataset" :x-unit="xUnit" :y-unit="yUnit"></custom-line>
  </div>
</template>

<script>

  import CustomLine from '@/components/Echarts/CustomLine'
  import OutputInfoModel from "@/models/OutputInfo";

  export default {
    name: 'RowEcharts1',
    components: { CustomLine },
    props: {
      dataset: {
        type: Object,
        required: true
      },
      xUnit: {
        type: String,
      },
      yUnit: {
        type: String,
      }
    },
    data() {
      return {
        dateTime: ''
      }
    },
    methods: {
      async queryTotal(params) {
        const { data } = await OutputInfoModel.queryHistogramStatistics(params)
        this.dataset = { source: data }
      },
      onQuery() {
        const params = {
          dayOrder: this.dateTime
        }
        this.queryTotal(params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row-echarts1 {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
</style>
