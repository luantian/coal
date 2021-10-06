<template>
<div>
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="所属系统" prop="belongSystem">
      <el-input type="text" v-model="rowData.belongSystem" autocomplete="off" placeholder="请输入所属系统"></el-input>
    </el-form-item>
    <el-form-item label="设备名称" prop="deviceName">
      <el-input type="text" v-model="rowData.deviceName" autocomplete="off" placeholder="请输入人设备名称"></el-input>
    </el-form-item>
    <el-form-item label="单位" prop="deviceUnit">
      <el-input v-model="rowData.deviceUnit" placeholder="请输入单位"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="deviceNumber">
      <el-input v-model="rowData.deviceNumber" placeholder="请输入数量"></el-input>
    </el-form-item>
    <el-form-item label="设备位置" prop="deviceLocation">
      <el-input v-model="rowData.deviceLocation" placeholder="请输入设备位置"></el-input>
    </el-form-item>
    <el-form-item label="型号/种类" prop="lubricatingType">
      <el-input v-model="rowData.lubricatingType" placeholder="请输入型号/种类"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="lubricatingNumber">
      <el-input v-model="rowData.lubricatingNumber" placeholder="请输入数量"></el-input>
    </el-form-item>
    <el-form-item label="单位" prop="lubricatingUnit">
      <el-input v-model="rowData.lubricatingUnit" placeholder="请输入单位"></el-input>
    </el-form-item>
    <el-form-item label="更换周期" prop="lubricatingReplaceCycleNumber">
      <el-input v-model="rowData.lubricatingReplaceCycleNumber" placeholder="请输入更换周期"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="rowData.remark" placeholder="请输入备注"></el-input>
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
            belongSystem: '',
            deviceName: '',
            deviceUnit: '',
            deviceNumber: '',
            deviceLocation: '',
            lubricatingType: '',
            lubricatingNumber: '',
            lubricatingUnit: '',
            lubricatingReplaceCycleNumber: '',
            remark: ''
          },
          rules: {
            belongSystem: [
              { required: true, message: '所属系统不能为空', trigger: 'blur' }
            ],
            deviceName: [
              { required: true, message: '设备名称不能为空', trigger: 'blur' }
            ],
            deviceUnit: [
              { required: true, message: '单位不能为空', trigger: 'blur' }
            ],
            deviceNumber: [
              { required: true, message: '数量不能为空', trigger: 'blur' }
            ],
            deviceLocation: [
              { required: true, message: '设备位置不能为空', trigger: 'blur' }
            ],
            lubricatingType: [
              { required: true, message: '型号/种类不能为空', trigger: 'blur' }
            ],
            lubricatingNumber: [
              { required: true, message: '数量不能为空', trigger: 'blur' }
            ],
            lubricatingUnit: [
              { required: true, message: '单位不能为空', trigger: 'blur' }
            ],
            lubricatingReplaceCycleNumber: [
              { required: true, message: '更换周期不能为空', trigger: 'blur' }
            ],
            remark: [
              { required: true, message: '备注不能为空', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ArchiveReportModel.editOilConsumptionList(this.rowData)
              console.log()
              if(code === 200){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                this.$emit("editDialogClose")
                this.$emit("queryList")
                return
              }
              this.$message.error('修改失败');
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
