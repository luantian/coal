import Base from "@/models/Base";
import axios from 'axios'
import LocalStorage from '@/cache/LocalStorage'
import { saveAs } from 'file-saver';

// import { saveAs } from 'file-saver';
const baseUrl = process.env.VUE_APP_BASE_URL

const token = LocalStorage.getItem('token')

const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip'
}

/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
function resolveBlob(res, mimeType) {
  const aLink = document.createElement('a')
  var blob = new Blob([res.data], { type: mimeType })
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
  var contentDisposition = decodeURI(res.headers['content-disposition'])
  var result = patt.exec(contentDisposition)
  var fileName = result[1]
  // fileName = fileName.replace(/\"/g, '')
  aLink.href = URL.createObjectURL(blob)
  aLink.setAttribute('download', fileName) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
}


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

  static async downFileZip() {
    axios({
      method: 'get',
      url: `${baseUrl}/api/report/export/productionPlan`,
      responseType: 'blob',
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(res => {
      resolveBlob(res, mimeMap.zip)
    })
  }

  static async exportFile(url, filename) {
    axios({
      method: 'get',
      url: baseUrl + url,
      headers: {
        Authorization: 'Bearer ' + token
      },
      responseType: "blob"
    })
      .then(res => {
        this.btnLoading = false;
        console.log('res.data.type', res.data)
        if (res.data) {
          // 文件下载
          const blob = new Blob([res.data], {
            // type: "application/vnd.ms-excel"
            type: "application/octet-stream"
            // type: "application/zip"
          });
          saveAs(blob, filename + '.xlsx')
          // let link = document.createElement('a');
          // let url = URL.createObjectURL(blob)
          // link.href = url
          // link.download = filename + '.zip' // 重命名文件
          // link.click();
          // link = null;
          // URL.revokeObjectURL(url) // 释放内存
          // this.$message.success('导出成功');
        } else {
          // 返回json
          console.log('error111')
          // this.$message.warning(res.data.msg);
        }
      })
      .catch(() => {
        console.log('error222')
        this.btnLoading = false;
        // this.$message.error("下载失败");
      });
  }


}

export default ArchiveReport
