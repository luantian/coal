import Base from "@/models/Base";

class ArchiveReport extends Base {
  constructor() {
    super()
  }

  // 查询设备实时报警
  static async selectRealTimeWarningList(data) {
    return await this.get({
      url: '/devicealarm/devicealarmInfo/list',
      data
    })
  }

  // 处理设备实时报警
  static async editRealTimeWarning(data) {
    return await this.put({
      url: '/devicealarm/devicealarmInfo',
      data
    })
  }

  // 查询设备历史报警统计--报警时长
  static async selectWarningDurationEchartsData(data) {
    return await this.get({
      url: '/devicealarm/devicealarmInfo/deviceAlarmStatistics',
      data
    })
  }

}

export default ArchiveReport
