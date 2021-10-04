<template>
  <div style="width: 700px">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="日装车数" prop="dailyEntruckNumber">
        <el-input type="text" v-model="ruleForm.dailyEntruckNumber" autocomplete="off" placeholder="请输入日装车数"></el-input>
      </el-form-item>
      <el-form-item label="日累计煤量，吨" prop="dayCoalNumber">
        <el-input v-model="ruleForm.dayCoalNumber" placeholder="请输入日累计煤量，吨"></el-input>
      </el-form-item>
      <el-form-item label="影响生产情况" prop="influenceProductionSituation">
        <el-input v-model="ruleForm.influenceProductionSituation" placeholder="请输入影响生产情况"></el-input>
      </el-form-item>
      <el-form-item label="月累计煤量，吨" prop="monCoalNumber">
        <el-input v-model="ruleForm.monCoalNumber" placeholder="请输入月累计煤量，吨"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
      <el-form-item label="未过磅数据装煤" prop="notPoundDateRegion">
        <el-input v-model="ruleForm.notPoundDateRegion" placeholder="请输入未过磅数据装煤"></el-input>
      </el-form-item>
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
          deviceType: '',
          deviceName: '',
          alarmStartTime: '',
          alarmEndTime: '',
          alarmLocation: '',
          deviceLimenValue: '',
          createUser: ''
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
          createUser: [
            { required: true, message: '故障记录员不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const {code} = await ProductionReportModel.addDeviceBreakFile(this.ruleForm)
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
