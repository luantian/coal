<template>
<div>
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
    <el-form-item label="设备类别" prop="deviceType">
      <el-input type="text" v-model="rowData.deviceType" autocomplete="off" placeholder="请输入设备类别"></el-input>
    </el-form-item>
    <el-form-item label="设备名称" prop="deviceName">
      <el-input v-model="rowData.deviceName" placeholder="请输入设备名称"></el-input>
    </el-form-item>
    <el-form-item label="故障开始时间" prop="alarmStartTime">
      <el-col :span="11">
        <el-date-picker type="datetime" placeholder="请选择故障开始时间" v-model="rowData.alarmStartTime" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss" ></el-date-picker>
      </el-col>
      <!--      <el-date-picker v-model="ruleForm.alarmStartTime" placeholder="请选择故障开始时间"></el-date-picker>-->
    </el-form-item>
    <el-form-item label="故障结束时间" prop="alarmEndTime">
      <el-col :span="11">
        <el-date-picker type="datetime" placeholder="请选择故障结束时间" v-model="rowData.alarmEndTime" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss" ></el-date-picker>
      </el-col>
      <!--      <el-input v-model="ruleForm.alarmEndTime" placeholder="请输入故障结束时间"></el-input>-->
    </el-form-item>
    <el-form-item label="故障名称" prop="alarmLocation">
      <el-input v-model="rowData.alarmLocation" placeholder="请输入故障名称"></el-input>
    </el-form-item>
    <el-form-item label="耗时" prop="deviceLimenValue">
      <el-input v-model="rowData.deviceLimenValue" placeholder="请输入耗时"></el-input>
    </el-form-item>
<!--    <el-form-item label="故障记录员" prop="createUser">-->
<!--      <el-input v-model="rowData.createUser" placeholder="请输入故障记录员"></el-input>-->
<!--    </el-form-item>-->
    <el-form-item>
      <el-button @click="editCancel">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import ProductionReportModel from "@/models/ProductionReport";
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
              { required: true, message: '设备类别不能为空', trigger: 'blur' }
            ],
            deviceName: [
              { required: true, message: '设备名称不能为空', trigger: 'blur' }
            ],
            alarmStartTime: [
              { required: true, message: '故障开始时间不能为空', trigger: 'blur' }
            ],
            alarmEndTime: [
              { required: true, message: '故障结束时间不能为空', trigger: 'blur' }
            ],
            alarmLocation: [
              { required: true, message: '故障名称位置不能为空', trigger: 'blur' }
            ],
            deviceLimenValue: [
              { required: true, message: '耗时不能为空', trigger: 'blur' }
            ],
            // createUser: [
            //   { required: true, message: '故障记录员不能为空', trigger: 'blur' }
            // ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ProductionReportModel.editDeviceBreakFile(this.rowData)
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
