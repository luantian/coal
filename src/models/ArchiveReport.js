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

}

export default ArchiveReport
