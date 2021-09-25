import Base from "@/models/Base";

class ArchiveReport extends Base {
  constructor() {
    super()
  }

  static async selectSitePersonnelFilesList(data) {
    return await this.get({
      url: '/person/info/list',
      data,
    })
  }

}

export default ArchiveReport
