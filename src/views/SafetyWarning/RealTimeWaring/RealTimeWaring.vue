<template>
  <div class="personnel-files">
    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <div style="flex: 1">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="报警设备">
              <el-input v-model="alarmDevice" placeholder="请输入报警设备"></el-input>
            </el-form-item>
<!--            <span class="demonstration">起止日期</span>-->
<!--            <el-date-picker-->
<!--              style="margin-left: 15px"-->
<!--              v-model="searchDate"-->
<!--              type="daterange"-->
<!--              value-format="yyyy-MM-dd"-->
<!--              range-separator="⇀"-->
<!--              start-placeholder="开始时间"-->
<!--              end-placeholder="结束时间">-->
<!--            </el-date-picker>-->
            <el-form-item style="margin-left: 15px">
              <el-button type="primary" @click="toQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="alarmStartTime" label="报警起始时间" align="center"></el-table-column>
          <el-table-column prop="alarmEndTime" label="报警终止时间" align="center"></el-table-column>
          <el-table-column prop="alarmInfo" label="报警信息" align="center"></el-table-column>
          <el-table-column prop="alarmDevice" label="报警设备" align="center"></el-table-column>
          <el-table-column prop="alarmLocation" label="报警部位" align="center"></el-table-column>
          <el-table-column prop="alarmParamValue" label="报警参数值" align="center"></el-table-column>
          <el-table-column prop="deviceLimenValue" label="设备阀值" align="center"></el-table-column>
          <el-table-column prop="alarmExcludeMeasures" label="预警排除措施" align="center"></el-table-column>
          <el-table-column prop="alarmStatus" label="状态" align="center" :formatter="statusFormatter"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div style="display: flex">
                <label style="cursor: pointer;text-decoration: underline;color: #8CF5FF"
                       @click="editData(scope.$index, scope.row)">处理</label>
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
    </div>

  </div>
</template>

<script>

import SafetyWarningModel from "@/models/SafetyWarning";

export default {
  name: 'RealTimeWaring',
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
      alarmDevice: '',
      alarmStatus: 1,
      alarmStartTime: '',
      alarmEndTime: '',
      searchDate: ''
    }
  },
  methods: {
    async toQuery() {

      // if (this.searchDate) {
      //   this.alarmStartTime = this.searchDate[0]
      //   this.alarmEndTime = this.searchDate[1]
      // }
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'alarmDevice': this.alarmDevice,
        'alarmStatus': this.alarmStatus,
        // 'alarmStartTime': this.alarmStartTime,
        // 'alarmEndTime': this.alarmEndTime
      }
      const {rows, total} = await SafetyWarningModel.selectRealTimeWarningList(this.queryParams);
      this.tableData = rows
      this.totalRecords = total
    },
    async editData(index, row) {
      row.alarmStatus = 2
      this.$confirm('是否确认处理该报警信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {code} = await SafetyWarningModel.editRealTimeWarning(row)
        if (code === 200) {
          this.$message({
            message: '处理成功',
            type: 'success'
          });
          await this.toQuery()
          return
        }
        this.$message.error('处理失败');
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消处理'
        })
      })
      // this.rowData = cloneDeep(row)
      // this.editDialogVisible = true
    },
    async deleteData(index, row) {
      this.$confirm('是否确认删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {code} = await SafetyWarningModel.deleteDeviceBreakFile(row.id)
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
    statusFormatter(data) {
      if (null === data) {
        return data
      }
      if (data === 1) {
        return '已处理'
      }
      return '未处理'
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
  height: calc(100vh - #{$headerHeight} - #{$header-height});
  box-sizing: border-box;
}


</style>
