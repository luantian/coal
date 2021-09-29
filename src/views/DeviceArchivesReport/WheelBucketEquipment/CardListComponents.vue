<template>
  <div >
    <div style="margin-left:1%;margin-right:1%">
      <el-row>
        <el-col :span="4" v-for="(item) in tableData" :key="item.id" :offset="1" >
          <div style="margin-top:15px">
            <el-card :body-style="{ padding: '20px'}" shadow="hover" >
              <div style="display: flex">
                <div style="flex: 1">
                  <span>{{item.deviceParam}} </span><br>
                  <div style="padding-top: 5px">
                    <span >{{item.deviceNumberInfo}} ({{item.deviceUnit}})</span>
                  </div>
                </div>
                <div style="vertical-align: middle">
                  <i class="el-icon-edit" style="vertical-align: middle"/>
                </div>
              </div>

            </el-card>
          </div>
        </el-col>
      </el-row>
<!--      <div style="margin-left:35%">-->
<!--        <div class="block">-->
<!--          <el-pagination-->
<!--            @size-change="handleSizeChange"-->
<!--            @current-change="handleCurrentChange"-->
<!--            :current-page="current_page"-->
<!--            :page-sizes="[4,8, 12, 16]"-->
<!--            :page-size="pagesize"-->
<!--            layout="total, sizes, prev, pager, next"-->
<!--            :total="total">-->
<!--          </el-pagination>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
  import ArchiveReportModel from "@/models/ArchiveReport";
    export default {
        name: "addPersonnelFileForm",
      props: {
          // tableData: {}
      },
      data() {
        return {
          tableData: [],
          // tableData: [
          //   {
          //     id: 1,
          //     deviceParam: '11',
          //     deviceNumberInfo: '22',
          //     deviceUnit: '33'
          //   },
          //   {
          //     id: 2,
          //     deviceParam: '44',
          //     deviceNumberInfo: '55',
          //     deviceUnit: '66'
          //   },
          //   {
          //     id: 3,
          //     deviceParam: '77',
          //     deviceNumberInfo: '88',
          //     deviceUnit: '99'
          //   },
          //   {
          //     id: 4,
          //     deviceParam: 'aa',
          //     deviceNumberInfo: 'bb',
          //     deviceUnit: 'cc'
          //   },
          //   {
          //     id: 5,
          //     deviceParam: 'qq',
          //     deviceNumberInfo: 'ww',
          //     deviceUnit: 'ee'
          //   },
          //   {
          //     id: 6,
          //     deviceParam: 'ww',
          //     deviceNumberInfo: 'ss',
          //     deviceUnit: 'xx'
          //   },
          //   {
          //     id: 7,
          //     deviceParam: 'rr',
          //     deviceNumberInfo: 'ff',
          //     deviceUnit: 'vv'
          //   }
          // ],
          rules: {
            deviceParam: [
              { required: true, message: '设备参数不能为空', trigger: 'blur' }
            ],
            deviceNumberInfo: [
              { required: true, message: '数值不能为空', trigger: 'blur' }
            ],
            deviceUnit: [
              { required: true, message: '单位不能为空', trigger: 'blur' }
            ]
          },
          deviceType: 1
        };
      },
      methods: {
        async toQuery() {
          const {rows} = await ArchiveReportModel.selectWheelBucketBasicFilesList()
          this.tableData = rows
        },
        addCancel() {
          this.$emit("addDialogClose")
        }
      },
      created() {
        this.toQuery()
      }
    }
</script>

<style scoped>

</style>
