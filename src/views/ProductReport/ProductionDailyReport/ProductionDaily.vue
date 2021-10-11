<template>
  <div class="personnel-files">


    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">

        </div>
        <div style="padding-right: 35px">
          <el-button @click="addDialogVisible=true" type="primary">新增参数</el-button>
          <el-button @click="exportProductionPlanReport" type="primary">导出</el-button>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;" height="calc(100vh - 400px)">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="bucketJobPeopleNumber" label="轮斗组作业人数" align="center"></el-table-column>
          <el-table-column prop="bucketNameDay" label="轮斗组姓名-白班" align="center"></el-table-column>
          <el-table-column prop="bucketNameNight" label="轮斗组姓名-夜班" align="center"></el-table-column>
          <el-table-column prop="bucketTelDay" label="轮斗组电话-白班" align="center"></el-table-column>
          <el-table-column prop="bucketTelNight" label="轮斗组电话-夜班" align="center"></el-table-column>
          <el-table-column prop="dispatchNameDay" label="值班调度姓名-白班" align="center"></el-table-column>
          <el-table-column prop="dispatchNameNight" label="值班调度姓名-夜班" align="center"></el-table-column>
          <el-table-column prop="dispatchTelDay" label="值班调度电话-白班" align="center"></el-table-column>
          <el-table-column prop="dispatchTelNight" label="值班调度电话-夜班" align="center"></el-table-column>
          <el-table-column prop="dutyPeopleNumber" label="当班人数" align="center"></el-table-column>
          <el-table-column prop="entruckPeopleNumber" label="装车人数" align="center"></el-table-column>
          <el-table-column prop="foremanNameDay" label="工长姓名-白班" align="center"></el-table-column>
          <el-table-column prop="foremanNameNight" label="工长姓名-夜班" align="center"></el-table-column>
          <el-table-column prop="foremanPeopleNumber" label="工长人数" align="center"></el-table-column>
          <el-table-column prop="foremanTelDay" label="工长电话-白班" align="center"></el-table-column>
          <el-table-column prop="foremanTelNight" label="工长电话-夜班" align="center"></el-table-column>
          <el-table-column prop="forkliftJobPeopleNumber" label="铲车作业人数" align="center"></el-table-column>
          <el-table-column prop="forkliftNumber" label="铲车台数" align="center"></el-table-column>
          <el-table-column prop="inspectionPeopleNumber" label="巡检人数" align="center"></el-table-column>
          <el-table-column prop="jobLocation" label="作业位置" align="center"></el-table-column>
          <el-table-column prop="leaderNameDay" label="值班领导姓名-白班" align="center"></el-table-column>
          <el-table-column prop="leaderTelDay" label="值班领导电话-白班" align="center"></el-table-column>
          <el-table-column prop="planDate" label="计划日报日期" align="center"></el-table-column>
          <el-table-column prop="safetyNameDay" label="安全员姓名-白班" align="center"></el-table-column>
          <el-table-column prop="safetyNameNight" label="安全员姓名-夜班" align="center"></el-table-column>
          <el-table-column prop="safetyTelDay" label="安全员电话-白班" align="center"></el-table-column>
          <el-table-column prop="safetyTelNight" label="安全员电话-夜班" align="center"></el-table-column>
          <el-table-column prop="waterwheelJobPeopleNumber" label="水车作业人数" align="center"></el-table-column>
          <el-table-column prop="waterwheelNumber" label="水车台数" align="center"></el-table-column>
          <el-table-column prop="workPlan" label="工作计划" align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" :width="120">
            <template slot-scope="scope">
              <div style="width: 150px">
                <span class="opear-text" @click="detail(scope.$index, scope.row)">查看</span>
                <span class="opear-text" @click="editData(scope.$index, scope.row)">编辑</span>
                <span class="opear-text" @click="deleteData(scope.$index, scope.row)" style="width: 150px">删除</span>
              </div>
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
                   :destroy-on-close="true" width="1500px">
          <add-form @addDialogClose="addDialogVisible = false"
                    @queryList="toQuery"></add-form>
        </el-dialog>
        <el-dialog :visible.sync="editDialogVisible" @close="editDialogVisible = false" align="center" :destroy-on-close="true" width="1500px">
          <edit-form @editDialogClose="editDialogVisible = false"
                     @queryList="toQuery" :rowData="rowData" :destroy-on-close="true"></edit-form>
        </el-dialog>
        <el-dialog :visible.sync="detailDialogVisible" @close="detailDialogVisible = false" align="center" :destroy-on-close="true" width="1500px">
          <detail @editDialogClose="detailDialogVisible = false"
                      :rowData="rowData" :destroy-on-close="true"></detail>
        </el-dialog>
      </div>
    </div>

  </div>
</template>

<script>
  import ProductionReportModel from "@/models/ProductionReport";
  import addForm from "@/views/ProductReport/ProductionDailyReport/AddForm";
  import editForm from "@/views/ProductReport/ProductionDailyReport/EditForm";
  import detail from "@/views/ProductReport/ProductionDailyReport/Detail";
  import { cloneDeep } from 'lodash-es'
  // import Export from "@/models/Export";
  export default {
    name: 'SitePersonnelFiles',
    components: {addForm, editForm, detail},
    data() {
      return {
        tableData: [],
        deptName: '',
        personName: '',
        addDialogVisible: false,
        editDialogVisible: false,
        detailDialogVisible: false,
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
        const {rows, total} = await ProductionReportModel.selectProductionPlanList(this.queryParams);
        this.tableData = rows
        this.totalRecords = total
      },
      async editData(index, row) {
        this.rowData = cloneDeep(row)
        this.editDialogVisible = true
      },
      async detail(index, row) {
        this.rowData = cloneDeep(row)
        this.detailDialogVisible = true
      },
      async deleteData(index, row) {
        this.$confirm('是否确认删除该数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const {code} = await ProductionReportModel.deleteProductionPlan(row.id)
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
      async exportProductionPlanReport() {
        await ProductionReportModel.exportFile()
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
