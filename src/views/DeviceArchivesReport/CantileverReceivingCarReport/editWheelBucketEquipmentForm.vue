<template>
<div style="width: 700px">
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="设备参数" prop="deviceParam">
      <el-input type="text" v-model="rowData.deviceParam" autocomplete="off" placeholder="请输入故障部位"></el-input>
    </el-form-item>
    <el-form-item label="数值" prop="deviceNumberInfo">
      <el-input type="text" v-model="rowData.deviceNumberInfo" autocomplete="off" placeholder="请输入设备部位系统"></el-input>
    </el-form-item>
    <el-form-item label="单位" prop="deviceUnit">
      <el-input v-model="rowData.deviceUnit" placeholder="请输入故障名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="editCancel">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import ArchiveReportModel from "@/models/ArchiveReport";
    export default {
        name: "addPersonnelFileForm",
      props: {
          rowData: {}
      },
      data() {
        return {
          ruleForm: {
            deviceParam: '',
            deviceNumberInfo: '',
            deviceUnit: '',
            deviceType: 1
          },

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
              const {code} = await ArchiveReportModel.editWheelBucketBasicFile(this.rowData)
              if(code === 200){
                this.$message({
                  message: '编辑成功',
                  type: 'success'
                });
                this.$emit("editDialogClose")
                this.$emit("queryList")
                return
              }
              this.$message.error('编辑失败');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        editCancel() {
          this.$emit("editDialogClose")
        }
      }
    }
</script>

<style scoped>

</style>
