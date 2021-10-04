import Base from "@/models/Base";

class ArchiveReport extends Base {
  constructor() {
    super()
  }


// 查询故障统计表数据
  static async selectDeviceBreakFileList(data) {
    return await this.get({
      url: '/reportdevifault/fault/list',
      data
    })
  }

  // 删除故障统计表数据
  static async deleteDeviceBreakFile(id) {
    return await this.delete({
      url: '/reportdevifault/fault/' + id
    })
  }

  // 删除故障统计表数据
  static async addDeviceBreakFile(data) {
    return await this.post({
      url: '/reportdevifault/fault',
      data
    })
  }

  // 删除故障统计表数据
  static async editDeviceBreakFile(data) {
    return await this.put({
      url: '/reportdevifault/fault',
      data
    })
  }

}

export default ArchiveReport
