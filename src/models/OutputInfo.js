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


}

export default OutputInfo
