<template>
  <div class="personnel-files">
    <div class="header_div">
      <div style="flex: 1;text-align:center;">
        {{ $route.meta.title }}
      </div>
    </div>

    <div class="table_div" style="position: relative">
      <div style="display: flex;">
        <!--        <div style="flex: 1">-->
        <!--          <label>设备部位系统</label>-->
        <!--          <el-select :inline="true" v-model="selectValue" clearable placeholder="请选择部件名称" :popper-append-to-body="false" style="margin-left: 10px">-->
        <!--            <el-option-->
        <!--              v-for="item in devicePositionSystemOptions"-->
        <!--              :key="item.value"-->
        <!--              :label="item.label"-->
        <!--              :value="item.value">-->
        <!--            </el-option>-->
        <!--          </el-select>-->
        <!--          <label style="margin-left: 35px">故障部位</label>-->
        <!--          <el-select :inline="true" v-model="selectValue" clearable placeholder="请选择部件名称" :popper-append-to-body="false" style="margin-left: 10px">-->
        <!--            <el-option-->
        <!--              v-for="item in faultLocationOptions"-->
        <!--              :key="item.value"-->
        <!--              :label="item.label"-->
        <!--              :value="item.value">-->
        <!--            </el-option>-->
        <!--          </el-select>-->
        <!--          <el-button type="primary" @click="toQuery" style="margin-left: 10px">查询</el-button>-->
        <!--        </div>-->

        <div style="flex: 1">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="设备部位系统">
              <el-input v-model="faultLocation" placeholder="请输入设备部位系统"></el-input>
            </el-form-item>
            <el-form-item label="故障部位">
              <el-input v-model="devicePositionSystem" placeholder="请输入故障部位"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="toQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="padding-right: 35px">
          <el-button @click="addDialogVisible=true">新增档案</el-button>
        </div>
      </div>
      <div class="main_table">
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column label="序号" type="index" align="center"></el-table-column>
          <el-table-column prop="faultLocation" label="故障部位" align="center"></el-table-column>
          <el-table-column prop="devicePositionSystem" label="设备部位系统" align="center"></el-table-column>
          <el-table-column prop="faultName" label="故障名称" align="center"></el-table-column>
          <el-table-column prop="faultType" label="故障类别" align="center"></el-table-column>
          <el-table-column label="操作">
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
import ArchiveReportModel from "@/models/ArchiveReport";
import addForm from "@/views/DeviceArchivesReport/CantileverReceivingCarBreakdown/addWheelBucketBreakDownForm";
import editForm from "@/views/DeviceArchivesReport/CantileverReceivingCarBreakdown/editWheelBucketBreakDownForm";
import {cloneDeep} from "lodash-es";

export default {
  name: 'WheelBucketBreakDownFiles',
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
      devicePositionSystemOptions: [],
      faultLocationOptions: [],
      selectValue: '',
      devicePositionSystem: '',
      faultLocation: '',
      faultDataType: 3
    }
  },

  methods: {
    async toQuery() {
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'faultLocation': this.faultLocation,
        'devicePositionSystem': this.devicePositionSystem,
        'faultDataType': this.faultDataType
      }
      const {rows, total} = await ArchiveReportModel.selectWheelBucketBreakDown(this.queryParams);
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
        const {code} = await ArchiveReportModel.deleteWheelBucketBreakDown(row.id)
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
