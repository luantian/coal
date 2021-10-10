<template>
<div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
    <el-form-item label="设备参数" prop="deviceParam">
      <el-input type="text" v-model="ruleForm.deviceParam" autocomplete="off" placeholder="请输入故障部位"></el-input>
    </el-form-item>
    <el-form-item label="数值" prop="deviceNumberInfo">
      <el-input type="text" v-model="ruleForm.deviceNumberInfo" autocomplete="off" placeholder="请输入设备部位系统"></el-input>
    </el-form-item>
    <el-form-item label="单位" prop="deviceUnit">
      <el-input v-model="ruleForm.deviceUnit" placeholder="请输入故障名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="addCancel">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import ArchiveReportModel from "@/models/ArchiveReport";
    export default {
        name: "addPersonnelFileForm",
      data() {
        return {
          ruleForm: {
            deviceParam: '',
            deviceNumberInfo: '',
            deviceUnit: '',
            deviceType: 3
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
