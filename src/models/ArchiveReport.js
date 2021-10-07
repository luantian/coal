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

  // 编辑设备基础档案--轮斗、转载机、悬臂受料车
  static async deleteWheelBucketBasicFile(id) {
    return await this.delete({
      url: '/devicewheel/devicewheelInfo/' + id
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

  // 查询带式输送机基础档案列表
  static async selectRibbonConveyerFilesList(data) {
    return await this.get({
      url: '/conveyor/info/list',
      data
    })
  }

  // 新增带式输送机基础档案列表
  static async addRibbonConveyerFilesList(data) {
    return await this.post({
      url: '/conveyor/info',
      data
    })
  }

  // 编辑带式输送机基础档案列表
  static async editRibbonConveyerFilesList(data) {
    return await this.put({
      url: '/conveyor/info',
      data
    })
  }

  // 编辑带式输送机基础档案列表
  static async deleteRibbonConveyerFilesList(id) {
    return await this.delete({
      url: '/conveyor/info/' + id
    })
  }

  // 查询装车仓基础档案列表
  static async selectLoadingBunkerFilesList(data) {
    return await this.get({
      url: '/warehouse/warehouseInfo/list',
      data
    })
  }

  // 查询装车仓基础档案列表
  static async addLoadingBunkerFile(data) {
    return await this.post({
      url: '/warehouse/warehouseInfo',
      data
    })
  }

  // 编辑装车仓基础档案列表
  static async editLoadingBunkerFile(data) {
    return await this.put({
      url: '/warehouse/warehouseInfo',
      data
    })
  }

  // 删除装车仓基础档案列表
  static async deleteLoadingBunkerFile(id) {
    return await this.delete({
      url: '/warehouse/warehouseInfo/' + id
    })
  }

  // 查询皮条零部件基础档案
  static async selectStrapFileList(data) {
    return await this.get({
      url: '/pimp/pimpInfo/list',
      data
    })
  }

  // 新增皮条零部件基础档案
  static async addStrapFile(data) {
    return await this.post({
      url: '/pimp/pimpInfo',
      data
    })
  }

  // 编辑皮条零部件基础档案
  static async editStrapFile(data) {
    return await this.put({
      url: '/pimp/pimpInfo',
      data
    })
  }

  // 删除皮条零部件基础档案
  static async deleteStrapFile(id) {
    return await this.delete({
      url: '/pimp/pimpInfo/' + id
    })
  }

  // 查询零部件基础档案零----1：轮斗挖掘机，2：转载机零部件基础档案，3：悬臂受料车零部件基础档案
  static async selectPartFileList(data) {
    return await this.get({
      url: '/partsconveyor/partsconveyorInfo/list',
      data
    })
  }

  // 新增零部件基础档案零----1：轮斗挖掘机，2：转载机零部件基础档案，3：悬臂受料车零部件基础档案
  static async addPartFile(data) {
    return await this.post({
      url: '/partsconveyor/partsconveyorInfo',
      data
    })
  }

  // 编辑零部件基础档案零----1：轮斗挖掘机，2：转载机零部件基础档案，3：悬臂受料车零部件基础档案
  static async editPartFile(data) {
    return await this.put({
      url: '/partsconveyor/partsconveyorInfo',
      data
    })
  }

  // 删除零部件基础档案零----1：轮斗挖掘机，2：转载机零部件基础档案，3：悬臂受料车零部件基础档案
  static async deletePartFile(id) {
    return await this.delete({
      url: '/partsconveyor/partsconveyorInfo/' + id
    })
  }

}

export default ArchiveReport
