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
        <div style="padding-right: 0px">
          <el-button @click="addDialogVisible=true">新增档案</el-button>
        </div>
      </div>
      <div style="position: absolute;top:65px;left:45px;right:48px;bottom:20px;overflow: auto;padding-right: 0px">
        <el-row>
          <el-col :span="5" v-for="(item,index) in tableData" :key="item.id" :offset="index%4 === 0 ?0:1" >
            <div style="margin-top:15px">
              <el-card :body-style="{ padding: '20px'}" shadow="hover" >
                <div style="display: flex">
                  <div style="flex: 1">
                    <span>{{item.deviceParam}} </span><br>
                    <div style="padding-top: 5px">
                      <span >{{item.deviceNumberInfo}} ({{item.deviceUnit}})</span>
                    </div>
                  </div>
                  <div style="vertical-align: middle" @click="editData(index, item)">
                    <i class="el-icon-edit" style="vertical-align: middle"/>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
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
  import addForm from "@/views/DeviceArchivesReport/ReservedLoaderReport/addWheelBucketEquipmentForm";
  import editForm from "@/views/DeviceArchivesReport/ReservedLoaderReport/editWheelBucketEquipmentForm.vue";
  import {cloneDeep} from "lodash-es";

  export default {
    name: 'WheelBucketEquipmentFiles',
    components: {addForm,editForm},
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
        deviceType: 2
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
