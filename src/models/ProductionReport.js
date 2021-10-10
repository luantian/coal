import Base from "@/models/Base";
import axios from 'axios'
import LocalStorage from '@/cache/LocalStorage'
const token = LocalStorage.getItem('token')
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

  // 查询生产日报--完成情况
  static async selectCompletionList(data) {
    return await this.get({
      url: '/reportcomplete/complete/list',
      data
    })
  }

  // 新增生产日报--完成情况
  static async addCompletion(data) {
    return await this.post({
      url: '/reportcomplete/complete',
      data
    })
  }

  // 编辑生产日报--完成情况
  static async editCompletion(data) {
    return await this.put({
      url: '/reportcomplete/complete',
      data
    })
  }

  // 删除生产日报--完成情况
  static async deleteCompletion(id) {
    return await this.delete({
      url: '/reportcomplete/complete' + id
    })
  }

  static async exportFile() {
    this.btnLoading = true;
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/report/export/productionPlan',
      headers: {
        Authorization: 'Bearer ' + token
      },
      responseType: "arraybuffer"
    })
      .then(res => {
        this.btnLoading = false;
        if (res.data.type) {
          // 文件下载
          const blob = new Blob([res.data], {
            type: "application/vnd.ms-excel"
          });
          let link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.setAttribute('download', '导出文件.xlsx');
          link.click();
          link = null;
          this.$message.success('导出成功');
        } else {
          // 返回json
          this.$message.warning(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err)
        this.btnLoading = false;
        this.$message.error("下载失败");
      });
  }


}

export default ArchiveReport
