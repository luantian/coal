<template>
  <div >
    <div style="margin-left:1%;margin-right:1%">
      <el-row>
        <el-col :span="4" v-for="(item) in tableData" :key="item.id" :offset="1" >
          <div style="margin-top:15px">
            <el-card :body-style="{ padding: '20px'}" shadow="hover" style="display: flex" >
              <div style="flex: 1">
                <span>{{item.deviceParam}} {{item.deviceNumberInfo}} {{item.deviceUnit}} </span><br>
              </div>
              <div class="el-icon-edit">
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
      data() {
        return {
          tableData: [
            {
              id: 1,
              deviceParam: '11',
              deviceNumberInfo: '22',
              deviceUnit: '33'
            },
            {
              id: 2,
              deviceParam: '44',
              deviceNumberInfo: '55',
              deviceUnit: '66'
            },
            {
              id: 3,
              deviceParam: '77',
              deviceNumberInfo: '88',
              deviceUnit: '99'
            },
            {
              id: 4,
              deviceParam: 'aa',
              deviceNumberInfo: 'bb',
              deviceUnit: 'cc'
            },
            {
              id: 5,
              deviceParam: 'qq',
              deviceNumberInfo: 'ww',
              deviceUnit: 'ee'
            },
            {
              id: 6,
              deviceParam: 'ww',
              deviceNumberInfo: 'ss',
              deviceUnit: 'xx'
            },
            {
              id: 7,
              deviceParam: 'rr',
              deviceNumberInfo: 'ff',
              deviceUnit: 'vv'
            }
          ],
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
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ArchiveReportModel.addWheelBucketBasicFile(this.ruleForm)
              if(code === 200){
                this.$message({
                  message: '新增成功',
                  type: 'success'
                });
                this.$emit("addDialogClose")
                this.$emit("queryList")
                return
              }
              this.$message.error('新增失败');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        addCancel() {
          this.$emit("addDialogClose")
        }
      }
    }
</script>

<style scoped>

</style>
