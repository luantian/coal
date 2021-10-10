import Base from "@/models/Base";
import { saveAs } from 'file-saver';

const baseUrl = process.env.VUE_APP_BASE_URL


class Excel extends Base {
  constructor() {
    super()
  }

  static Prefix = `${super.Knowledge}/schema/excel`

  static async download(filename) {
    saveAs(`${baseUrl}${Excel.Prefix}/downTempalte`, filename);
  }

  static async exportProductionPlanExcel(filename) {
    console.log(`${baseUrl}/report/export/productionPlan`)
    saveAs(`${baseUrl}/report/export/productionPlan`, filename);
  }

  static async upload(data) {
    return await this.post({
      url: `${Excel.Prefix}/import`,
      data
    })
  }
}

export default Excel
