<template>
  <div class="wheel-bucket-equipment">
    <div style="display: flex; height: 100px; align-items: center; background: aquamarine">
      <div style="flex: 1;text-align:center;">
        {{ $route.meta.title }}
      </div>
      <div style="padding-right: 100px;">
        <el-button @click="addParam">新增参数</el-button>
      </div>
    </div>
    <div style="padding: 15px 25px 15px 25px">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column  prop="date" label="设备参数"> </el-table-column>
        <el-table-column prop="name" label="数值"> </el-table-column>
        <el-table-column prop="address" label="单位"> </el-table-column>
        <el-table-column prop="address" label="设备参数"> </el-table-column>
        <el-table-column prop="address" label="数值"> </el-table-column>
        <el-table-column prop="address" label="单位"> </el-table-column>
        <el-table-column prop="address" label="设备参数"> </el-table-column>
        <el-table-column prop="address" label="数值"> </el-table-column>
        <el-table-column prop="address" label="单位"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

  import ArchiveReportModel from "../../../models/ArchiveReport";

  export default {
    name: 'WheelBucketEquipment',
    data() {
      return {

      }
    },
    methods: {
      addParam() {
        this.tableData =ArchiveReportModel.selectSitePersonnelFilesList()
        // this.tableData = [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
