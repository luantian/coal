<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px">
      <div>
        <el-form-item label="日报日期:" prop="planDate">
          <el-col :span="5">
            <el-date-picker type="date" placeholder="请选择日报日期" v-model="ruleForm.planDate" style="width: 100%;" value-format="yyyy-MM-dd" ></el-date-picker>
          </el-col>
        </el-form-item>
      </div>
      <div class="span_div">
      <span class="_span">
        一、当日值班安排
      </span>
      </div>
      <div class="span_div">
      <span class="_span">
        1、白班
      </span>
      </div>
      <div style="display: flex;padding-top: 18px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="值班领导:" prop="leaderNameDay" >
              <el-input v-model="ruleForm.leaderNameDay" placeholder="请输入值班领导姓名-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="leaderTelDay">
              <el-input v-model="ruleForm.leaderTelDay" placeholder="请输入值班领导电话-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1">

        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="值班调度:" prop="dispatchNameDay" >
              <el-input v-model="ruleForm.dispatchNameDay" placeholder="请输入值班调度姓名-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="dispatchTelDay">
              <el-input v-model="ruleForm.dispatchTelDay" placeholder="请输入值班调度电话-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="工长:" prop="foremanNameDay" >
              <el-input v-model="ruleForm.foremanNameDay" placeholder="请输入工长姓名-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="foremanTelDay">
              <el-input v-model="ruleForm.foremanTelDay" placeholder="请输入工长电话-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="安全员:" prop="safetyNameDay" >
              <el-input v-model="ruleForm.safetyNameDay" placeholder="请输入安全员姓名-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="safetyTelDay">
              <el-input v-model="ruleForm.safetyTelDay" placeholder="请输入安全员电话-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="轮斗组:" prop="bucketNameDay" >
              <el-input type="text" v-model="ruleForm.bucketNameDay" autocomplete="off" placeholder="请输入轮斗组姓名-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="bucketTelDay">
              <el-input v-model="ruleForm.bucketTelDay" placeholder="请输入轮斗组电话-白班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="span_div">
      <span class="_span">
        2、夜班
      </span>
      </div>
      <div style="display: flex;padding-top: 18px">
        <div style="flex: 1;display: flex;padding-right: 50px;" >
          <div style="flex: 1;">
            <el-form-item label="值班调度:" prop="dispatchNameNight" >
              <el-input v-model="ruleForm.dispatchNameNight" placeholder="请输入值班调度姓名-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="dispatchTelNight">
              <el-input v-model="ruleForm.dispatchTelNight" placeholder="请输入值班调度电话-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="工长:" prop="foremanNameNight" >
              <el-input v-model="ruleForm.foremanNameNight" placeholder="请输入工长姓名-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="foremanTelNight">
              <el-input v-model="ruleForm.foremanTelNight" placeholder="请输入工长电话-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="安全员:" prop="safetyNameNight" >
              <el-input v-model="ruleForm.safetyNameNight" placeholder="请输入安全员姓名-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="safetyTelNight">
              <el-input v-model="ruleForm.safetyTelNight" placeholder="请输入安全员电话-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="轮斗组:" prop="bucketNameNight" >
              <el-input v-model="ruleForm.bucketNameNight" placeholder="请输入轮斗组姓名-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="" prop="bucketTelNight">
              <el-input v-model="ruleForm.bucketTelNight" placeholder="请输入轮斗组电话-夜班" style="width: 180px"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="span_div">
      <span class="_span">
        二、当班人数及作业地点
      </span>
      </div>
      <div style="display: flex;padding-top: 18px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="当班人数:" prop="dutyPeopleNumber" >
              <el-input v-model="ruleForm.dutyPeopleNumber" placeholder="请输当班人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
          </div>
        </div>
        <div style="flex: 1">
        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="装车人数:" prop="entruckPeopleNumber" >
              <el-input v-model="ruleForm.entruckPeopleNumber" placeholder="请输入装车人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="巡检人数:" prop="inspectionPeopleNumber">
              <el-input v-model="ruleForm.inspectionPeopleNumber" placeholder="请输入巡检人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="工长人数:" prop="foremanPeopleNumber" >
              <el-input v-model="ruleForm.foremanPeopleNumber" placeholder="请输入工长人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">

          </div>
        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="轮斗组作业人数" prop="bucketJobPeopleNumber" >
              <el-input type="text" v-model="ruleForm.bucketJobPeopleNumber" autocomplete="off" placeholder="请输入轮斗组作业人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">

          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">

          </div>
          <div style="flex: 1">

          </div>
        </div>
      </div>
      <div style="display: flex;padding-top: 0px">
        <div style="flex: 1;display: flex;padding-right: 50px;">
          <div style="flex: 1;">
            <el-form-item label="水车台数:" prop="waterwheelNumber" >
              <el-input v-model="ruleForm.waterwheelNumber" placeholder="请输入水车台数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="水车作业人数:" prop="waterwheelJobPeopleNumber" >
              <el-input v-model="ruleForm.waterwheelJobPeopleNumber" placeholder="请输入水车作业人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
        </div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;">
            <el-form-item label="铲车台数:" prop="forkliftNumber" >
              <el-input v-model="ruleForm.forkliftNumber" placeholder="请输入铲车台数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
          <div style="flex: 1">
            <el-form-item label="铲车作业人数:" prop="forkliftJobPeopleNumber" >
              <el-input v-model="ruleForm.forkliftJobPeopleNumber" placeholder="请输入铲车作业人数" style="width: 180px;"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div>
        <el-form-item label="作业位置:" prop="jobLocation" >
          <el-input v-model="ruleForm.jobLocation" placeholder="请输入作业位置" type="textarea" ></el-input>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="工作计划:" prop="workPlan" >
          <el-input v-model="ruleForm.workPlan" placeholder="请输入工作计划" type="textarea"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button @click="addCancel">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import ProductionReportModel from "@/models/ProductionReport";

export default {
  name: "addPersonnelFileForm",
  data() {
    return {
      ruleForm: {
        bucketJobPeopleNumber: '',
        bucketNameDay: '',
        bucketNameNight: '',
        bucketTelDay: '',
        bucketTelNight: '',
        dispatchNameDay: '',
        dispatchNameNight: '',
        dispatchTelDay: '',
        dispatchTelNight: '',
        dutyPeopleNumber: '',
        entruckPeopleNumber: '',
        foremanNameDay: '',
        foremanNameNight: '',
        foremanPeopleNumber: '',
        foremanTelDay: '',
        foremanTelNight: '',
        forkliftJobPeopleNumber: '',
        forkliftNumber: '',
        inspectionPeopleNumber: '',
        jobLocation: '',
        leaderNameDay: '',
        leaderTelDay: '',
        planDate: '',
        safetyNameDay: '',
        safetyNameNight: '',
        safetyTelDay: '',
        safetyTelNight: '',
        waterwheelJobPeopleNumber: '',
        waterwheelNumber: '',
        workPlan: '',
        year: '',
        month: '',
        day: ''
      },
      rules: {
        bucketJobPeopleNumber: [
          {required: true, message: '轮斗组作业人数不能为空', trigger: 'blur'}
        ],
        bucketNameDay: [
          {required: true, message: '轮斗组姓名-白班不能为空', trigger: 'blur'}
        ],
        bucketNameNight: [
          {required: true, message: '轮斗组姓名-夜班不能为空', trigger: 'blur'}
        ],
        bucketTelDay: [
          {required: true, message: '轮斗组电话-白班不能为空', trigger: 'blur'}
        ],
        bucketTelNight: [
          {required: true, message: '轮斗组电话-夜班不能为空', trigger: 'blur'}
        ],
        dispatchNameDay: [
          {required: true, message: '值班调度姓名-白班不能为空', trigger: 'blur'}
        ],
        dispatchNameNight: [
          {required: true, message: '值班调度姓名-夜班不能为空', trigger: 'blur'}
        ],
        dispatchTelDay: [
          {required: true, message: '值班调度电话-白班不能为空', trigger: 'blur'}
        ],
        dispatchTelNight: [
          {required: true, message: '值班调度电话-夜班不能为空', trigger: 'blur'}
        ],
        dutyPeopleNumber: [
          {required: true, message: '当班人数不能为空', trigger: 'blur'}
        ],
        entruckPeopleNumber: [
          {required: true, message: '装车人数不能为空', trigger: 'blur'}
        ],
        foremanNameDay: [
          {required: true, message: '工长姓名-白班不能为空', trigger: 'blur'}
        ],
        foremanNameNight: [
          {required: true, message: '工长姓名-夜班不能为空', trigger: 'blur'}
        ],
        foremanPeopleNumber: [
          {required: true, message: '工长人数不能为空', trigger: 'blur'}
        ],
        foremanTelDay: [
          {required: true, message: '工长电话-白班不能为空', trigger: 'blur'}
        ],
        foremanTelNight: [
          {required: true, message: '工长电话-夜班不能为空', trigger: 'blur'}
        ],
        forkliftJobPeopleNumber: [
          {required: true, message: '铲车作业人数不能为空', trigger: 'blur'}
        ],
        forkliftNumber: [
          {required: true, message: '铲车台数不能为空', trigger: 'blur'}
        ],
        inspectionPeopleNumber: [
          {required: true, message: '巡检人数不能为空', trigger: 'blur'}
        ],
        jobLocation: [
          {required: true, message: '作业位置不能为空', trigger: 'blur'}
        ],
        leaderNameDay: [
          {required: true, message: '值班领导姓名-白班不能为空', trigger: 'blur'}
        ],
        leaderTelDay: [
          {required: true, message: '值班领导电话-白班不能为空', trigger: 'blur'}
        ],
        planDate: [
          {required: true, message: '计划日报日期不能为空', trigger: 'blur'}
        ],
        safetyNameDay: [
          {required: true, message: '安全员姓名-白班不能为空', trigger: 'blur'}
        ],
        safetyNameNight: [
          {required: true, message: '安全员姓名-夜班不能为空', trigger: 'blur'}
        ],
        safetyTelDay: [
          {required: true, message: '安全员电话-白班不能为空', trigger: 'blur'}
        ],
        safetyTelNight: [
          {required: true, message: '安全员电话-夜班不能为空', trigger: 'blur'}
        ],
        waterwheelJobPeopleNumber: [
          {required: true, message: '水车作业人数不能为空', trigger: 'blur'}
        ],
        waterwheelNumber: [
          {required: true, message: '水车台数不能为空', trigger: 'blur'}
        ],
        workPlan: [
          {required: true, message: '工作计划不能为空', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const {code} = await ProductionReportModel.addProductionPlan(this.ruleForm)
          console.log()
          if (code === 200) {
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
._span {
  font-size: 14px;
  color: white
}
.span_div{
  text-align: left;
  padding-top: 18px;
}
</style>
