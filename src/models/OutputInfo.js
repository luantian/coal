import Base from "@/models/Base";

class OutputInfo extends Base {
  constructor() {
    super()
  }

  // 查询总和
  static async queryTotalSizeStatistics(data) {
    return await this.get({
      url: '/yield/yieldInfo/totalSizeStatistics',
      data,
    })
  }

  // 查询产量柱状图折线图饼图等统计信息
  static async queryHistogramStatistics(data) {
    return await this.get({
      url: '/yield/yieldInfo/histogramStatistics',
      data,
    })
  }

  // 查询轮斗利用率
  static async queryBucketreality(data) {
    return await this.get({
      url: '/bucketreality/reality/faultRealityPercent',
      data,
    })
  }

  // 查询 装车仓 储量数据
  static async queryReserves(data) {
    return await this.get({
      url: '/bigbelt/belt/loadingbinVolumeHistogram',
      data,
    })
  }



  // 查询 装车仓 温度
  static async queryTemperature(data) {
    return await this.get({
      url: '/bigbelt/belt/loadingbinTemperatureHistogram',
      data,
    })
  }

  // 查询工作时间统计
  static async queryRealityHistogramStatistics(data) {
    return await this.get({
      url: '/bucketreality/reality/histogramStatistics',
      data
    })
  }

  // 查询AACM电能消耗
  static async queryAACM(data) {
    return await this.get({
      url: '/bigbelt/belt/beltAacmhigheleHistogram',
      data
    })
  }

  // 查询设备温度
  static async queryMotorTemperature(data) {
    return await this.get({
      url: '/bigbelt/belt/beltMotortemTemperatureHistogram',
      data
    })
  }

  // 查询设备温度 新
  static async queryMotorTemperatureNew(data) {
    return await this.get({
      url: '/bigbelt/belt/beltMotortemTemperatureHistogramNew',
      data
    })
  }

}

export default OutputInfo
