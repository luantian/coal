<template>
<div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
    <el-form-item label="设备型号" prop="deviceType">
      <el-input type="text" v-model="ruleForm.deviceType" autocomplete="off" placeholder="请输入设备型号"></el-input>
    </el-form-item>
    <el-form-item label="仓体长度(m)" prop="warehouseLength">
      <el-input v-model="ruleForm.warehouseLength" placeholder="请输入仓体长度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体宽度(m)" prop="warehouseWidth">
      <el-input v-model="ruleForm.warehouseWidth" placeholder="请输入仓体宽度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体高度(m)" prop="warehouseHeight">
      <el-input v-model="ruleForm.warehouseHeight" placeholder="仓体高度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体容积(m³)" prop="warehouseVolume">
      <el-input v-model="ruleForm.warehouseVolume" placeholder="请输入仓体容积(m³)"></el-input>
    </el-form-item>
    <el-form-item label="物料容重(t/m³)" prop="materialDensity">
      <el-input v-model="ruleForm.materialDensity" placeholder="请输入物料容重(t/m³)"></el-input>
    </el-form-item>
    <el-form-item label="物料堆积角(°)" prop="materialAngle">
      <el-input v-model="ruleForm.materialAngle" placeholder="请输入物料堆积角(°)"></el-input>
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
            deviceType: '',
            warehouseLength: '',
            warehouseWidth: '',
            warehouseHeight: '',
            warehouseVolume: '',
            materialDensity: '',
            materialAngle: ''
          },
          rules: {
            deviceType: [
              { required: true, message: '设备型号不能为空', trigger: 'blur' }
            ],
            warehouseLength: [
              { required: true, message: '仓体长度(m)不能为空', trigger: 'blur' }
            ],
            warehouseWidth: [
              { required: true, message: '仓体宽度(m)不能为空', trigger: 'blur' }
            ],
            warehouseHeight: [
              { required: true, message: '仓体高度(m)不能为空', trigger: 'blur' }
            ],
            warehouseVolume: [
              { required: true, message: '仓体容积(m³)不能为空', trigger: 'blur' }
            ],
            materialDensity: [
              { required: true, message: '物料容重(t/m³)不能为空', trigger: 'blur' }
            ],
            materialAngle: [
              { required: true, message: '物料堆积角(°)不能为空', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ArchiveReportModel.addLoadingBunkerFile(this.ruleForm)
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
