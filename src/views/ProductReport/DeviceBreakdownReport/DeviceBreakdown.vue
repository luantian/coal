<template>
  <div class="personnel-files">


    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">

        </div>
        <div style="padding-right: 35px">
          <el-button @click="addDialogVisible=true" type="primary">新增参数</el-button>
          <el-button @click="exportDeviceBreakdownReport" type="primary">导出</el-button>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;" height="calc(100vh - 400px)" >
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="deviceType" label="设备类别" align="center"></el-table-column>
          <el-table-column prop="deviceName" label="设备名称" align="center"></el-table-column>
          <el-table-column prop="alarmStartTime" label="故障开始时间" align="center"></el-table-column>
          <el-table-column prop="alarmEndTime" label="故障结束时间" align="center"></el-table-column>
          <el-table-column prop="alarmLocation" label="故障名称" align="center"></el-table-column>
          <el-table-column prop="deviceLimenValue" label="耗时" align="center"></el-table-column>
          <el-table-column prop="nickName" label="故障记录员" align="center"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div>
                <span class="opear-text" @click="editData(scope.$index, scope.row)">编辑</span>
                <span class="opear-text" @click="deleteData(scope.$index, scope.row)">删除</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next, sizes"
          :total="totalRecords"
          @size-change="pageSizeChange"
          @current-change="currentPageChange"
          :page-sizes="pageSizes">
        </el-pagination>
      </div>
      <div>
        <el-dialog :visible.sync="addDialogVisible" @close="addDialogVisible = false" align="center"
                   :destroy-on-close="true">
          <add-form @addDialogClose="addDialogVisible = false"
                    @queryList="toQuery"></add-form>
        </el-dialog>
        <el-dialog :visible.sync="editDialogVisible" @close="editDialogVisible = false" align="center">
          <edit-form @editDialogClose="editDialogVisible = false"
                     @queryList="toQuery" :rowData="rowData" :destroy-on-close="true"></edit-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import ProductionReportModel from "@/models/ProductionReport";
import addForm from "@/views/ProductReport/DeviceBreakdownReport/AddForm";
import editForm from "@/views/ProductReport/DeviceBreakdownReport/EditForm";
import { cloneDeep } from 'lodash-es'
export default {
  name: 'DeviceBreakdown',
  components: {addForm, editForm},
  data() {
    return {
      tableData: [],
      deptName: '',
      personName: '',
      addDialogVisible: false,
      editDialogVisible: false,
      rowData: {},
      totalRecords: 0,
      pageSizes: [10, 20, 50, 100],
      pageNum: 1,
      pageSize: 10,
      queryParams: {},
      editRowData: {},
      url: '/api/report/export/devicrFault',
      filename: '设备故障表'
    }
  },
  methods: {
    async toQuery() {
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'personName': this.personName,
        'deptName': this.deptName
      }
      const {rows, total} = await ProductionReportModel.selectDeviceBreakFileList(this.queryParams);
      this.tableData = rows
      this.totalRecords = total
    },
    async editData(index, row) {
      this.rowData = cloneDeep(row)
      this.editDialogVisible = true
    },
    async deleteData(index, row) {
      this.$confirm('是否确认删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {code} = await ProductionReportModel.deleteDeviceBreakFile(row.id)
        if (code === 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          await this.toQuery()
          return
        }
        this.$message.error('删除失败');
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        })
      })
    },
    async pageSizeChange(val) {
      this.pageSize = val
      await this.toQuery()
    },
    async currentPageChange(val) {
      this.pageNum = val
      await this.toQuery()
    },
    async exportDeviceBreakdownReport() {
      await ProductionReportModel.exportFile(this.url, this.filename)
    }
  },
  created() {
    this.toQuery()
  }
}

</script>

<style lang="scss" scoped>


</style>
