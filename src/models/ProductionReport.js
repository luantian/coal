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

  // 新增故障统计表数据
  static async addDeviceBreakFile(data) {
    return await this.post({
      url: '/reportdevifault/fault',
      data
    })
  }

  // 编辑故障统计表数据
  static async editDeviceBreakFile(data) {
    return await this.put({
      url: '/reportdevifault/fault',
      data
    })
  }

  // 查询生产日报--生产计划
  static async selectProductionPlanList(data) {
    return await this.get({
      url: '/reportplan/plan/list',
      data
    })
  }

  // 新增生产日报--生产计划
  static async addProductionPlan(data) {
    return await this.post({
      url: '/reportplan/plan',
      data
    })
  }

  // 编辑生产日报--生产计划
  static async editProductionPlan(data) {
    return await this.put({
      url: '/reportplan/plan',
      data
    })
  }

  // 删除生产日报--生产计划
  static async deleteProductionPlan(id) {
    return await this.delete({
      url: '/reportplan/plan/' + id
    })
  }

}

export default ArchiveReport
