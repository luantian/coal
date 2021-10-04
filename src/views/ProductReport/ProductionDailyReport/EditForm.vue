<template>
<div style="width: 700px">
  <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <div style="display: flex">
      <div style="flex: 1">
        <el-form-item label="轮斗组作业人数" prop="bucketJobPeopleNumber">
          <el-input type="text" v-model="rowData.bucketJobPeopleNumber" autocomplete="off" placeholder="请输入轮斗组作业人数"></el-input>
        </el-form-item>
        <el-form-item label="轮斗组姓名-白班" prop="bucketNameDay">
          <el-input type="text" v-model="rowData.bucketNameDay" autocomplete="off" placeholder="请输入轮斗组姓名-白班"></el-input>
        </el-form-item>
        <el-form-item label="轮斗组姓名-夜班" prop="bucketNameNight">
          <el-input v-model="rowData.bucketNameNight" placeholder="请输入轮斗组姓名-夜班"></el-input>
        </el-form-item>
        <el-form-item label="轮斗组电话-白班" prop="bucketTelDay">
          <el-input v-model="rowData.bucketTelDay" placeholder="请输入轮斗组电话-白班"></el-input>
        </el-form-item>
        <el-form-item label="轮斗组电话-夜班" prop="bucketTelNight">
          <el-input v-model="rowData.bucketTelNight" placeholder="请输入轮斗组电话-夜班"></el-input>
        </el-form-item>
        <el-form-item label="值班调度姓名-白班" prop="dispatchNameDay">
          <el-input v-model="rowData.dispatchNameDay" placeholder="请输入值班调度姓名-白班"></el-input>
        </el-form-item>
        <el-form-item label="值班调度姓名-夜班" prop="dispatchNameNight">
          <el-input v-model="rowData.dispatchNameNight" placeholder="请输入值班调度姓名-夜班"></el-input>
        </el-form-item>
        <el-form-item label="值班调度电话-白班" prop="dispatchTelDay">
          <el-input v-model="rowData.dispatchTelDay" placeholder="请输入值班调度电话-白班"></el-input>
        </el-form-item>
        <el-form-item label="值班调度电话-夜班" prop="dispatchTelNight">
          <el-input v-model="rowData.dispatchTelNight" placeholder="请输入值班调度电话-夜班"></el-input>
        </el-form-item>
        <el-form-item label="当班人数" prop="dutyPeopleNumber">
          <el-input v-model="rowData.dutyPeopleNumber" placeholder="请输当班人数"></el-input>
        </el-form-item>
      </div>

      <div style="flex: 1">
        <el-form-item label="装车人数" prop="entruckPeopleNumber">
          <el-input v-model="rowData.entruckPeopleNumber" placeholder="请输入装车人数"></el-input>
        </el-form-item>
        <el-form-item label="工长姓名-白班" prop="foremanNameDay">
          <el-input v-model="rowData.foremanNameDay" placeholder="请输入工长姓名-白班"></el-input>
        </el-form-item>
        <el-form-item label="工长姓名-夜班" prop="foremanNameNight">
          <el-input v-model="rowData.foremanNameNight" placeholder="请输入工长姓名-夜班"></el-input>
        </el-form-item>
        <el-form-item label="工长人数" prop="foremanPeopleNumber">
          <el-input v-model="rowData.foremanPeopleNumber" placeholder="请输入工长人数"></el-input>
        </el-form-item>
        <el-form-item label="工长电话-白班" prop="foremanTelDay">
          <el-input v-model="rowData.foremanTelDay" placeholder="请输入工长电话-白班"></el-input>
        </el-form-item>
        <el-form-item label="工长电话-夜班" prop="foremanTelNight">
          <el-input v-model="rowData.foremanTelNight" placeholder="请输入工长电话-夜班"></el-input>
        </el-form-item>
        <el-form-item label="铲车作业人数" prop="forkliftJobPeopleNumber">
          <el-input v-model="rowData.forkliftJobPeopleNumber" placeholder="请输入铲车作业人数"></el-input>
        </el-form-item>
        <el-form-item label="铲车台数" prop="forkliftNumber">
          <el-input v-model="rowData.forkliftNumber" placeholder="请输入铲车台数"></el-input>
        </el-form-item>
        <el-form-item label="巡检人数" prop="inspectionPeopleNumber">
          <el-input v-model="rowData.inspectionPeopleNumber" placeholder="请输入巡检人数"></el-input>
        </el-form-item>
        <el-form-item label="作业位置" prop="jobLocation">
          <el-input v-model="rowData.jobLocation" placeholder="请输入作业位置"></el-input>
        </el-form-item>
      </div>

      <div style="flex: 1">
        <el-form-item label="值班领导姓名-白班" prop="leaderNameDay">
          <el-input v-model="rowData.leaderNameDay" placeholder="请输入值班领导姓名-白班"></el-input>
        </el-form-item>
        <el-form-item label="值班领导电话-白班" prop="leaderTelDay">
          <el-input v-model="rowData.leaderTelDay" placeholder="请输入值班领导电话-白班"></el-input>
        </el-form-item>
        <el-form-item label="计划日报日期" prop="planDate">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择计划日报日期" v-model="ruleForm.planDate" style="width: 100%;" value-format="yyyy-MM-dd" editable="false"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="安全员姓名-白班" prop="safetyNameDay">
          <el-input v-model="rowData.safetyNameDay" placeholder="请输入安全员姓名-白班"></el-input>
        </el-form-item>
        <el-form-item label="安全员姓名-夜班" prop="safetyNameNight">
          <el-input v-model="rowData.safetyNameNight" placeholder="请输入安全员姓名-夜班"></el-input>
        </el-form-item>
        <el-form-item label="安全员电话-白班" prop="safetyTelDay">
          <el-input v-model="rowData.safetyTelDay" placeholder="请输入安全员电话-白班"></el-input>
        </el-form-item>
        <el-form-item label="安全员电话-夜班" prop="safetyTelNight">
          <el-input v-model="rowData.safetyTelNight" placeholder="请输入安全员电话-夜班"></el-input>
        </el-form-item>
        <el-form-item label="水车作业人数" prop="waterwheelJobPeopleNumber">
          <el-input v-model="rowData.waterwheelJobPeopleNumber" placeholder="请输入水车作业人数"></el-input>
        </el-form-item>
        <el-form-item label="水车台数" prop="waterwheelNumber">
          <el-input v-model="rowData.waterwheelNumber" placeholder="请输入水车台数"></el-input>
        </el-form-item>
        <el-form-item label="工作计划" prop="workPlan">
          <el-input v-model="rowData.workPlan" placeholder="请输入工作计划"></el-input>
        </el-form-item>
      </div>
    </div>
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
            bucketJobPeopleNumber: [
              { required: true, message: '轮斗组作业人数不能为空', trigger: 'blur' }
            ],
            bucketNameDay: [
              { required: true, message: '轮斗组姓名-白班不能为空', trigger: 'blur' }
            ],
            bucketNameNight: [
              { required: true, message: '轮斗组姓名-夜班不能为空', trigger: 'blur' }
            ],
            bucketTelDay: [
              { required: true, message: '轮斗组电话-白班不能为空', trigger: 'blur' }
            ],
            bucketTelNight: [
              { required: true, message: '轮斗组电话-夜班不能为空', trigger: 'blur' }
            ],
            dispatchNameDay: [
              { required: true, message: '值班调度姓名-白班不能为空', trigger: 'blur' }
            ],
            dispatchNameNight: [
              { required: true, message: '值班调度姓名-夜班不能为空', trigger: 'blur' }
            ],
            dispatchTelDay: [
              { required: true, message: '值班调度电话-白班不能为空', trigger: 'blur' }
            ],
            dispatchTelNight: [
              { required: true, message: '值班调度电话-夜班不能为空', trigger: 'blur' }
            ],
            dutyPeopleNumber: [
              { required: true, message: '当班人数不能为空', trigger: 'blur' }
            ],
            entruckPeopleNumber: [
              { required: true, message: '装车人数不能为空', trigger: 'blur' }
            ],
            foremanNameDay: [
              { required: true, message: '工长姓名-白班不能为空', trigger: 'blur' }
            ],
            foremanNameNight: [
              { required: true, message: '工长姓名-夜班不能为空', trigger: 'blur' }
            ],
            foremanPeopleNumber: [
              { required: true, message: '工长人数不能为空', trigger: 'blur' }
            ],
            foremanTelDay: [
              { required: true, message: '工长电话-白班不能为空', trigger: 'blur' }
            ],
            foremanTelNight: [
              { required: true, message: '工长电话-夜班不能为空', trigger: 'blur' }
            ],
            forkliftJobPeopleNumber: [
              { required: true, message: '铲车作业人数不能为空', trigger: 'blur' }
            ],
            forkliftNumber: [
              { required: true, message: '铲车台数不能为空', trigger: 'blur' }
            ],
            inspectionPeopleNumber: [
              { required: true, message: '巡检人数不能为空', trigger: 'blur' }
            ],
            jobLocation: [
              { required: true, message: '作业位置不能为空', trigger: 'blur' }
            ],
            leaderNameDay: [
              { required: true, message: '值班领导姓名-白班不能为空', trigger: 'blur' }
            ],
            leaderTelDay: [
              { required: true, message: '值班领导电话-白班不能为空', trigger: 'blur' }
            ],
            planDate: [
              { required: true, message: '计划日报日期不能为空', trigger: 'blur' }
            ],
            safetyNameDay: [
              { required: true, message: '安全员姓名-白班不能为空', trigger: 'blur' }
            ],
            safetyNameNight: [
              { required: true, message: '安全员姓名-夜班不能为空', trigger: 'blur' }
            ],
            safetyTelDay: [
              { required: true, message: '安全员电话-白班不能为空', trigger: 'blur' }
            ],
            safetyTelNight: [
              { required: true, message: '安全员电话-夜班不能为空', trigger: 'blur' }
            ],
            waterwheelJobPeopleNumber: [
              { required: true, message: '水车作业人数不能为空', trigger: 'blur' }
            ],
            waterwheelNumber: [
              { required: true, message: '水车台数不能为空', trigger: 'blur' }
            ],
            workPlan: [
              { required: true, message: '工作计划不能为空', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              const {code} = await ProductionReportModel.editProductionPlan(this.rowData)
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
