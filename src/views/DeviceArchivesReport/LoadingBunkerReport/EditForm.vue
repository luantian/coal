<template>
<div>
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="设备型号" prop="deviceType">
      <el-input type="text" v-model="rowData.deviceType" autocomplete="off" placeholder="请输入设备型号"></el-input>
    </el-form-item>
    <el-form-item label="仓体长度(m)" prop="warehouseLength">
      <el-input v-model="rowData.warehouseLength" placeholder="请输入仓体长度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体宽度(m)" prop="warehouseWidth">
      <el-input v-model="rowData.warehouseWidth" placeholder="请输入仓体宽度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体高度(m)" prop="warehouseHeight">
      <el-input v-model="rowData.warehouseHeight" placeholder="仓体高度(m)"></el-input>
    </el-form-item>
    <el-form-item label="仓体容积(m³)" prop="warehouseVolume">
      <el-input v-model="rowData.warehouseVolume" placeholder="请输入仓体容积(m³)"></el-input>
    </el-form-item>
    <el-form-item label="物料容重(t/m³)" prop="materialDensity">
      <el-input v-model="rowData.materialDensity" placeholder="请输入物料容重(t/m³)"></el-input>
    </el-form-item>
    <el-form-item label="物料堆积角(°)" prop="materialAngle">
      <el-input v-model="rowData.materialAngle" placeholder="请输入物料堆积角(°)"></el-input>
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
              { required: true, message: '仓体容积(m³)位置不能为空', trigger: 'blur' }
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
              const {code} = await ArchiveReportModel.editLoadingBunkerFile(this.rowData)
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
