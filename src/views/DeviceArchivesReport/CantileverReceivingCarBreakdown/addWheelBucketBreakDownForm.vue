<template>
<div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="故障部位" prop="faultLocation">
      <el-input type="text" v-model="ruleForm.faultLocation" autocomplete="off" placeholder="请输入故障部位"></el-input>
    </el-form-item>
    <el-form-item label="设备部位系统" prop="devicePositionSystem">
      <el-input type="text" v-model="ruleForm.devicePositionSystem" autocomplete="off" placeholder="请输入设备部位系统"></el-input>
    </el-form-item>
    <el-form-item label="故障名称" prop="faultName">
      <el-input v-model="ruleForm.faultName" placeholder="请输入故障名称"></el-input>
    </el-form-item>
    <el-form-item label="故障类别" prop="faultType">
      <el-input v-model="ruleForm.faultType" placeholder="请输入故障类别" maxLength = "1"></el-input>
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
            faultLocation: '',
            devicePositionSystem: '',
            faultName: '',
            faultType: '',
            faultDataType: 3
          },
          rules: {
            faultLocation: [
              { required: true, message: '故障部位不能为空', trigger: 'blur' }
            ],
            devicePositionSystem: [
              { required: true, message: '设备部位系统不能为空', trigger: 'blur' }
            ],
            faultName: [
              { required: true, message: '故障名称不能为空', trigger: 'blur' }
            ],
            faultType: [
              { required: true, message: '故障类别不能为空', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ArchiveReportModel.addWheelBucketBreakDown(this.ruleForm)
              console.log()
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
