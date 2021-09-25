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


}

export default OutputInfo
