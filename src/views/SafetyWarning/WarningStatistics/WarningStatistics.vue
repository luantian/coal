<template>
  <div class="container">
    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="报警设备">
              <el-input v-model="alarmDevice" placeholder="请输入报警设备"></el-input>
            </el-form-item>
            <span class="demonstration">起止日期</span>
            <el-date-picker
              style="margin-left: 15px"
              v-model="searchDate"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="⇀"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </el-date-picker>
            <el-form-item style="margin-left: 15px">
              <el-button type="primary" @click="toQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="chart1_container">
        <div style="display: flex; padding: 28px 36px;">
          <div style="width: 6px; height: 18px; background: #399CFF; border-radius: 2px;"></div>
          <div class="bar1">报警时长</div>
        </div>
        <div class="echarts_warning_duration">
          <custom-bar2 :dataset="barDataset" x-unit=" " y-unit="报警时长(min)"></custom-bar2>
        </div>
      </div>

      <div class="percent_chart_div">
        <div class="pie1" style="position: relative;">
          <div style="display: flex; position: absolute; left: 0; right: 0; top: 0; height: 50px; padding: 28px 36px;">
            <div style="width: 6px; height: 18px; background: #399CFF; border-radius: 2px;"></div>
            <div class="bar1">报警数量占比</div>
          </div>
          <custom-pie :dataset="pie1Dataset" unit="个"></custom-pie>
        </div>
        <div class="pie2" style="position: relative">
          <div style="display: flex; position: absolute; left: 0; right: 0; top: 0; height: 50px; padding: 28px 36px;">
            <div style="width: 6px; height: 18px; background: #399CFF; border-radius: 2px;"></div>
            <div class="bar1">报警时长占比</div>
          </div>
          <custom-pie :dataset="pie2Dataset" unit="分钟"></custom-pie>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import SafetyWarningModel from "@/models/SafetyWarning";
import CustomPie from '@/components/Echarts/CustomPie'
import CustomBar2 from '@/components/Echarts/CustomBar2'

export default {
  name: 'WarningStatistics',
  components: {CustomPie, CustomBar2},
  data() {
    return {
      alarmDevice: '',
      searchDate: [],
      warningDurationOptions: [],
      datasetDuration: [],
      datasetQuantity: [],
      searchValueDuration: 'total_minutes_number',
      searchValueQuantity: 'total_number',
      barDataset: {source: []},
      pie1Dataset: {source: []},
      pie2Dataset: {source: []},
    }
  },

  mounted() {
    this.toQuery()
  },

  methods: {

    async toQuery() {
      console.log('this.searchDate', this.searchDate)
      if (this.searchDate) {
        this.alarmStartTime = this.searchDate[0]
        this.alarmEndTime = this.searchDate[1]
      } else {
        this.alarmStartTime = ''
        this.alarmEndTime = ''
      }
      this.queryParams = {
        'selectCode': this.searchValueDuration,
        'alarmDevice': this.alarmDevice,
        'alarmStartTime': this.alarmStartTime,
        'alarmEndTime': this.alarmEndTime
      }
      const {data} = await SafetyWarningModel.selectWarningDurationEchartsData(this.queryParams);
      this.barDataset.source = data
      this.pie2Dataset.source = data
      this.queryParams['selectCode'] = this.searchValueQuantity
      const response = await SafetyWarningModel.selectWarningDurationEchartsData(this.queryParams);
      this.pie1Dataset.source = response['data']
      console.log(this.barDataset.source)
      console.log(this.pie2Dataset.source)
      console.log(this.pie1Dataset.source)
    },
  },
}

</script>

<style lang="scss" scoped>
$headerHeight: 100px;

.table_div {
  padding: 15px 25px;
  height: calc(100vh - #{$headerHeight} - #{$header-height});
  box-sizing: border-box;
}

.bar1 {
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 16px;
}

.chart1_container {
  height: 300px;
  background: rgba(8, 17, 77, 0.8);
  border: 1px solid #0F1597;
}

.percent_chart_div {
  display: flex;
  margin-top: 36px;
  .pie1 {
    margin-right: 36px;
  }
  .pie1, .pie2 {
    flex: 1;
    height: 264px;
    background: rgba(8, 17, 77, 0.8);
    border: 1px solid #0F1597;
  }
}

.echarts_warning_duration {
  height: 260px;
}


</style>
