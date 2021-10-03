import Base from "@/models/Base";

class ArchiveReport extends Base {
  constructor() {
    super()
  }

  // 查询现场人员基础档案列表
  static async selectSitePersonnelFilesList(data) {
    return await this.get({
      url: '/person/info/list',
      data
    })
  }

  // 删除现场人员基础档案
  static async deleteSitePersonnelFile(id) {
    return await this.delete({
      url: '/person/info/' + id
    })
  }

  // 新增现场人员基础档案
  static async addSitePersonnelFile(data) {
    return await this.post({
      url: '/person/info',
      data
    })
  }


  // 編輯现场人员基础档案
  static async editSitePersonnelFile(data) {
    return await this.put({
      url: '/person/info',
      data
    })
  }

  // 查询轮斗挖掘机故障档案列表
  static async selectWheelBucketBreakDown(data) {
    return await this.get({
      url: '/faualwheel/faualwheelInfo/list',
      data
    })
  }

  // 新增轮斗挖掘机故障档案列表
  static async addWheelBucketBreakDown(data) {
    return await this.post({
      url: '/faualwheel/faualwheelInfo',
      data
    })
  }

  // 删除轮斗挖掘机故障档案列表
  static async deleteWheelBucketBreakDown(id) {
    return await this.delete({
      url: '/faualwheel/faualwheelInfo/' + id
    })
  }


  // 删除轮斗挖掘机故障档案列表
  static async editWheelBucketBreakDown(data) {
    return await this.put({
      url: '/faualwheel/faualwheelInfo',
      data
    })
  }

  // 查询设备基础档案--轮斗、转载机、悬臂受料车
  static async selectWheelBucketBasicFilesList(data) {
    return await this.get({
      url: '/devicewheel/devicewheelInfo/list',
      data
    })
  }

  // 新增设备基础档案--轮斗、转载机、悬臂受料车
  static async addWheelBucketBasicFile(data) {
    return await this.post({
      url: '/devicewheel/devicewheelInfo',
      data
    })
  }

  // 编辑设备基础档案--轮斗、转载机、悬臂受料车
  static async editWheelBucketBasicFile(data) {
    return await this.put({
      url: '/devicewheel/devicewheelInfo',
      data
    })
  }

  // 查询润滑用油明细表
  static async selectOilConsumptionList(data) {
    return await this.get({
      url: '/lubrication/info/list',
      data
    })
  }

  // 新增润滑用油明细表
  static async addOilConsumptionList(data) {
    return await this.post({
      url: '/lubrication/info',
      data
    })
  }

  // 刪除润滑用油明细表
  static async deleteOilConsumptionList(id) {
    return await this.delete({
      url: '/lubrication/info/' + id
    })
  }

  // 刪除润滑用油明细表
  static async editOilConsumptionList(data) {
    return await this.put({
      url: '/lubrication/info',
      data
    })
  }

}

export default ArchiveReport
