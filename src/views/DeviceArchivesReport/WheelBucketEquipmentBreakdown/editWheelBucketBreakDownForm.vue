<template>
<div>
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
    <el-form-item label="故障部位" prop="faultLocation">
      <el-input type="text" v-model="rowData.faultLocation" autocomplete="off" placeholder="请输入故障部位"></el-input>
    </el-form-item>
    <el-form-item label="设备部位系统" prop="devicePositionSystem">
      <el-input type="text" v-model="rowData.devicePositionSystem" autocomplete="off" placeholder="请输入设备部位系统"></el-input>
    </el-form-item>
    <el-form-item label="故障名称" prop="faultName">
      <el-input v-model="rowData.faultName" placeholder="请输入故障名称"></el-input>
    </el-form-item>
    <el-form-item label="故障类别" prop="faultType">
      <el-input v-model="rowData.faultType" placeholder="请输入故障类别" maxLength = "1"></el-input>
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
      props: {
        rowData: {}
      },
      data() {
        return {
          ruleForm: {
            faultLocation: '',
            devicePositionSystem: '',
            faultName: '',
            faultType: ''
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
              const {code} = await ArchiveReportModel.editWheelBucketBreakDown(this.rowData)
              console.log()
              if(code === 200){
                this.$message({
                  message: '編輯成功',
                  type: 'success'
                });
                this.$emit("editDialogClose")
                this.$emit("queryList")
                return
              }
              this.$message.error('編輯失败');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        addCancel() {
          this.$emit("editDialogClose")
        }
      }
    }
</script>

<style scoped>

</style>
