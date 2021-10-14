<template>
  <div class="personnel-files">


    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="部件名称">
              <el-input v-model="partsName" placeholder="请输入部件名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="toQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="padding-right: 35px">
          <el-button @click="addDialogVisible=true" type="primary">新增参数</el-button>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;" height="calc(100vh - 400px)">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="partsName" label="部件名称" align="center"></el-table-column>
          <el-table-column prop="elementName" label="零件名称" align="center"></el-table-column>
          <el-table-column prop="specification" label="规格型号" align="center"></el-table-column>
          <el-table-column prop="quantity" label="数量" align="center"></el-table-column>
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
import ArchiveReportModel from "@/models/ArchiveReport";
import addForm from "@/views/DeviceArchivesReport/CantileverReceivingCarParts/AddForm";
import editForm from "@/views/DeviceArchivesReport/CantileverReceivingCarParts/EditForm";
import {cloneDeep} from 'lodash-es'

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
      editRowData: {},
      partsName: '',
      partsType: 3
    }
  },
  methods: {
    async toQuery() {
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'partsName': this.partsName,
        'partsType': this.partsType
      }
      const {rows, total} = await ArchiveReportModel.selectPartFileList(this.queryParams);
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
        const {code} = await ArchiveReportModel.deletePartFile(row.id)
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





</style>
