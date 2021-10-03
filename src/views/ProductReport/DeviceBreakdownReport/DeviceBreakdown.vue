<template>
  <div class="personnel-files">
    <div class="header_div">
      <div style="flex: 1;text-align:center;">
        {{ $route.meta.title }}
      </div>
    </div>

    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">

        </div>
        <div style="padding-right: 35px">
          <el-button @click="addDialogVisible=true">新增参数</el-button>
        </div>
      </div>
      <div style="position: absolute;top:65px;left:20px;right:42px;bottom:20px;overflow: auto;padding-right: 0px">
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="deviceType" label="设备类别" align="center"></el-table-column>
          <el-table-column prop="deviceName" label="设备名称" align="center"></el-table-column>
          <el-table-column prop="alarmStartTime" label="故障开始时间" align="center"></el-table-column>
          <el-table-column prop="alarmEndTime" label="故障结束时间" align="center"></el-table-column>
          <el-table-column prop="alarmLocation" label="故障名称" align="center"></el-table-column>
          <el-table-column prop="deviceLimenValue" label="耗时" align="center"></el-table-column>
          <el-table-column prop="createUser" label="故障记录员" align="center"></el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="editData(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteData(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="bolck" style="margin-top: 40px;text-align: right;padding-right: 0px">
          <el-pagination
            background
            layout="prev, pager, next, sizes"
            :total="totalRecords"
            @size-change="pageSizeChange"
            @current-change="currentPageChange"
            :page-sizes="pageSizes">
          </el-pagination>
        </div>
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
  name: 'SitePersonnelFiles',
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
      editRowData: {}
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
    }
  },
  created() {
    this.toQuery()
  }
}

</script>

<style lang="scss" scoped>
$headerHeight: 100px;
.header_div {
  display: flex;
  height: 100px;
  align-items: center;
  background: aquamarine
}

.table_div {
  padding: 15px 25px;
  /*border-radius: 30px;*/
  background: darkgray;
  height: calc(100vh - #{$headerHeight} - #{$header-height});
  box-sizing: border-box;
}


</style>
