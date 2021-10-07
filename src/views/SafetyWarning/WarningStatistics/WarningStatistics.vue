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
      <div class="chart1_container" style="width: 100%;height: 400px;padding: 36px;">
        <div style="display: flex">
          <div style="width: 6px;height: 18px;background: #399CFF;border-radius: 2px;">
          </div>
          <div class="bar1">报警时长</div>

        </div>
        <div class="echarts_warning_duration" ref="duration_chart" style="width: 100%;height: 100%;padding: 0"></div>
      </div>

      <div class="percent_chart_div" style="display: flex;width: 100%;height: 100%">
        <div class="number_percent_chart" ref="number_percent_chart" style="flex: 1">
        </div>
        <div class="duration_percent_chart" ref="duration_percent_chart" style="flex: 1">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SafetyWarningModel from "@/models/SafetyWarning";

export default {
  name: 'WarningStatistics',
  data() {
    return {
      alarmDevice: '',
      searchDate: [],
      warningDurationOptions: [],
      datasetDuration: [],
      datasetDurationPercent: [],
      datasetQuantityPercent: []
    }
  },
  mounted() {
    this.initDurationEcharts()
    this.initNumberPercentEcharts();
    this.initDurationPercentEcharts()
  },
  methods: {
    async toQuery() {
      if (this.searchDate) {
        this.alarmStartTime = this.searchDate[0]
        this.alarmEndTime = this.searchDate[1]
      }
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'alarmDevice': this.alarmDevice,
        'alarmStatus': this.alarmStatus,
        'alarmStartTime': this.alarmStartTime,
        'alarmEndTime': this.alarmEndTime
      }
      const {data} = await SafetyWarningModel.selectWarningDurationEchartsData(this.queryParams);
      this.datasetDuration = data
      this.render()
    },
    initDurationEcharts() {
      this.myChart = this.$echarts.init(this.$refs.duration_chart)
      const color = '#fff'
      const nameTextStyle = {
        color
      }
      this.option = {
        xAxis: {
          type: 'category',
          name: this.xUnit,
          nameTextStyle,
          axisLabel: {
            textStyle: {
              color  //更改坐标轴文字颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          name: this.yUnit || 'min',
          nameTextStyle,
          axisLine: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color,  //更改坐标轴文字颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            smooth: true,
            barWidth: 38
          }
        ],
        dataset: {}
      }
    },
    initDurationPercentEcharts() {
      this.myChart = this.$echarts.init(this.$refs.duration_percent_chart)
      const color = '#fff'
      const nameTextStyle = {
        color
      }
      this.option = {
        xAxis: {
          type: 'category',
          name: this.xUnit,
          nameTextStyle,
          axisLabel: {
            textStyle: {
              color  //更改坐标轴文字颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          name: this.yUnit || 'min',
          nameTextStyle,
          axisLine: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color,  //更改坐标轴文字颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            smooth: true,
            barWidth: 38
          }
        ],
        dataset: {}
      }
    },
    initNumberPercentEcharts() {
      this.myChart2 = this.$echarts.init(this.$refs.number_percent_chart)
      const color = '#fff'
      const nameTextStyle = {
        color
      }
      this.option = {
        xAxis: {
          type: 'category',
          name: this.xUnit,
          nameTextStyle,
          axisLabel: {
            textStyle: {
              color  //更改坐标轴文字颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          name: this.yUnit || 'min',
          nameTextStyle,
          axisLine: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color,  //更改坐标轴文字颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            smooth: true,
            barWidth: 38
          }
        ],
        dataset: {}
      }
    },
    render() {
      this.option.dataset.source = this.datasetDuration
      this.option && this.myChart2.setOption(this.option)
    }
  },
  created() {
    this.toQuery()
  }
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
  //width: 63px;
  //height: 16px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 16px;
}

.chart1_container {
  background: rgba(8, 17, 77, 0.8);
  border: 1px solid;
  border-image: linear-gradient(0deg, #0F1597, #3347C2, #10169F) 10 10;
  padding: 36px;
}

.number_percent_chart .duration_percent_chart{
  width: 100%;
  height: 100%  ;
  background: rgba(8, 17, 77, 0.8);
  border: 1px solid;
  border-image: linear-gradient(0deg, #0F1597, #3347C2, #10169F) 10 10;
}


</style>
