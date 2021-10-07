<template>
  <div class="personnel-files">
    <div class="table_div" style="position: relative">
      <div style="display: flex;">

        <div style="flex: 1">

        </div>
        <div>
          <el-button @click="addDialogVisible=true" type="primary">新增档案</el-button>
        </div>
      </div>
      <div class="main_table">
        <common-item :table-data="tableData" @editData="editData" @deleteData="deleteData"></common-item>
      </div>
      <div>
        <el-dialog :visible.sync="addDialogVisible" @close="addDialogVisible = false" align="center"
                   :destroy-on-close="true" @queryList="toQuery">
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
import addForm from "@/views/DeviceArchivesReport/WheelBucketEquipment/addWheelBucketEquipmentForm";
import editForm from "@/views/DeviceArchivesReport/WheelBucketEquipment/editWheelBucketEquipmentForm.vue";
import {cloneDeep} from "lodash-es";
import CommonItem from "@/components/CommonItem/CommonItem";

export default {
  name: 'WheelBucketEquipmentFiles',
  components: {addForm,editForm, CommonItem},
  data() {
    return {
      tableData: [],
      addDialogVisible: false,
      editDialogVisible: false,
      rowData: {},
      totalRecords: 0,
      pageSizes: [10, 20, 50, 100],
      pageNum: 1,
      pageSize: 10,
      queryParams: {},
      deviceType: 1
    }
  },

  methods: {
    async toQuery() {
      this.queryParams = {
        'pageNum': this.pageNum,
        'pageSize': this.pageSize,
        'deviceType': this.deviceType
      }
      const {rows, total} = await ArchiveReportModel.selectWheelBucketBasicFilesList(this.queryParams);
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
        const {code} = await ArchiveReportModel.deleteWheelBucketBasicFile(row.id)
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



.item-wrap {
  display: flex;
  flex-wrap: wrap;
}

.main_table {

}



</style>
