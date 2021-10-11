<template>
  <div class="component_container">
    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="部门">
              <el-input v-model="deptName" placeholder="请输入部门"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="personName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="toQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="padding-right: 18px">
          <el-button type="primary" @click="addDialogVisible=true">新增档案</el-button>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;" height="calc(100vh - 400px)">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="deptName" label="部门" align="center"></el-table-column>
          <el-table-column prop="personName" label="姓名" align="center"></el-table-column>
          <el-table-column prop="postName" label="职务" align="center"></el-table-column>
          <el-table-column prop="phonenumber" label="联系电话" align="center"></el-table-column>
          <el-table-column prop="dutyName" label="职责" align="center"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
        <el-dialog width="600px" :visible.sync="addDialogVisible" @close="addDialogVisible = false" align="center"
                   :destroy-on-close="true">
          <add-personnel-file-form @addDialogClose="addDialogVisible = false"
                                   @queryList="toQuery"></add-personnel-file-form>
        </el-dialog>
        <el-dialog width="600px" :visible.sync="editDialogVisible" @close="editDialogVisible = false" align="center">
          <edit-personnel-file-form @editDialogClose="editDialogVisible = false"
                                    @queryList="toQuery" :rowData="rowData"
                                    :destroy-on-close="true"></edit-personnel-file-form>
        </el-dialog>
      </div>
    </div>

  </div>
</template>

<script>
import ArchiveReportModel from "@/models/ArchiveReport";
import addPersonnelFileForm from "@/views/DeviceArchivesReport/SitePersonnelFilesReport/addPersonnelFileForm";
import editPersonnelFileForm from "@/views/DeviceArchivesReport/SitePersonnelFilesReport/editPersonnelFileForm";
import {cloneDeep} from 'lodash-es'

export default {
  name: 'SitePersonnelFiles',
  components: {addPersonnelFileForm, editPersonnelFileForm},
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
      const {rows, total} = await ArchiveReportModel.selectSitePersonnelFilesList(this.queryParams);
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
        const {code} = await ArchiveReportModel.deleteSitePersonnelFile(row.id)
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
}

.table_div {
  padding: 30px 25px;
  /*border-radius: 30px;*/
  //background: transparent !important;
  height: calc(100vh - #{$headerHeight} - 100px);
}




</style>
