<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
      <div >
        <el-form-item label="生成日报日期:" prop="productionDate">
          <el-col :span="5">
            <el-date-picker type="date" placeholder="请选择生成日报日期" v-model="ruleForm.productionDate" style="width: 100%;" value-format="yyyy-MM-dd" ></el-date-picker>
          </el-col>
        </el-form-item>

      </div>
      <div class="span_div">
        <span class="_span">一、采煤</span>
      </div>
      <div style="display: flex;padding-top: 15px">
        <div style="flex: 1">
          <el-form-item label="日装车数:" prop="dailyEntruckNumber">
            <el-input type="text" v-model="ruleForm.dailyEntruckNumber" autocomplete="off" placeholder="请输入日装车数"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">
          <el-form-item label="日累计煤量(吨):" prop="dayCoalNumber">
            <el-input type="text" v-model="ruleForm.dayCoalNumber" autocomplete="off" placeholder="请输入日累计煤量（吨）"></el-input>
          </el-form-item>
        </div>
      </div>
      <div style="display: flex">
        <div style="flex: 1">
          <el-form-item label="月累计煤量(吨):" prop="monCoalNumber">
            <el-input type="text" v-model="ruleForm.monCoalNumber" autocomplete="off" placeholder="请输入月累计煤量(吨)"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">
          <el-form-item label="年累计煤量(吨):" prop="yearCoalNumber">
            <el-input type="text" v-model="ruleForm.yearCoalNumber" autocomplete="off" placeholder="请输入年累计煤量(吨)"></el-input>
          </el-form-item>
        </div>
      </div>
      <div style="display: flex">
        <div style="flex: 1">
          <el-form-item label="日期或区间:" prop="notPoundDateRegion">
            <el-input type="text" v-model="ruleForm.notPoundDateRegion" autocomplete="off" placeholder="请输入未过磅数据装煤日期或区间"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">
          <el-form-item label="未过磅数据装煤车数:" prop="notPoundVehicleNumber" label-width="180px">
            <el-input type="text" v-model="ruleForm.notPoundVehicleNumber" autocomplete="off" placeholder="请输入未过磅数据装煤车数"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">
          <el-form-item label="产煤量(吨):" prop="produceCoalNumber">
            <el-input type="text" v-model="ruleForm.produceCoalNumber" autocomplete="off" placeholder="请输入产煤量(吨)"></el-input>
          </el-form-item>
        </div>
      </div>
      <div style="padding-top: 20px" class="span_div">
        <span class="_span">二、洒水</span>
      </div>
      <div style="display: flex;padding-top: 15px">
        <div style="flex: 1">
          <el-form-item label="水车车数:" prop="waterwheelNumber">
            <el-input type="text" v-model="ruleForm.waterwheelNumber" autocomplete="off" placeholder="请输入水车车数"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">
          <el-form-item label="洒水量(m³):" prop="sprinklingNumber">
            <el-input type="text" v-model="ruleForm.sprinklingNumber" autocomplete="off" placeholder="请输入洒水量(m³)"></el-input>
          </el-form-item>
        </div>
      </div>
      <div style="display: flex;padding-top: 15px">
        <div style="flex: 1">
          <el-form-item label="洒水位置:" prop="sprinklingLocation">
            <el-input type="text" v-model="ruleForm.sprinklingLocation" autocomplete="off" placeholder="请输入洒水位置"></el-input>
          </el-form-item>
        </div>
        <div style="flex: 1">

        </div>
      </div>
      <div style="padding-top: 20px" class="span_div">
        <span class="_span">三、生产情况及影响生产情况分析</span>
      </div>
      <div style="display: flex;padding-top: 15px">
        <div style="flex: 1">
          <el-form-item label="生产情况:" prop="productionSituation">
            <el-input type="textarea" v-model="ruleForm.productionSituation" autocomplete="off" placeholder="请输入生产情况"></el-input>
          </el-form-item>
        </div>
      </div>
      <div style="display: flex;padding-top: 15px">
        <div style="flex: 1">
          <el-form-item label="影响生产情况:" prop="influenceProductionSituation">
            <el-input type="textarea" v-model="ruleForm.influenceProductionSituation" autocomplete="off" placeholder="请输入影响生产情况"></el-input>
          </el-form-item>
        </div>
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
          productionDate: '',
          dailyEntruckNumber: '',
          dayCoalNumber: '',
          monCoalNumber: '',
          yearCoalNumber: '',
          notPoundDateRegion: '',
          notPoundVehicleNumber: '',
          produceCoalNumber: '',
          waterwheelNumber: '',
          sprinklingNumber: '',
          sprinklingLocation: '',
          productionSituation: '',
          influenceProductionSituation: ''
        },
        rules: {
          productionDate: [
            { required: true, message: '生成日报日期不能为空', trigger: 'blur' }
          ],
          dailyEntruckNumber: [
            { required: true, message: '日装车数不能为空', trigger: 'blur' }
          ],
          dayCoalNumber: [
            { required: true, message: '日累计煤量(吨)不能为空', trigger: 'blur' }
          ],
          monCoalNumber: [
            { required: true, message: '月累计煤量(吨)不能为空', trigger: 'blur' }
          ],
          yearCoalNumber: [
            { required: true, message: '年累计煤量(吨)不能为空', trigger: 'blur' }
          ],
          notPoundDateRegion: [
            { required: true, message: '日期或区间不能为空', trigger: 'blur' }
          ],
          notPoundVehicleNumber: [
            { required: true, message: '未过磅数据装煤车数不能为空', trigger: 'blur' }
          ],
          produceCoalNumber: [
            { required: true, message: '产煤量(吨)不能为空', trigger: 'blur' }
          ],
          waterwheelNumber: [
            { required: true, message: '水车车数不能为空', trigger: 'blur' }
          ],
          sprinklingNumber: [
            { required: true, message: '洒水量(m³)不能为空', trigger: 'blur' }
          ],
          sprinklingLocation: [
            { required: true, message: '洒水位置不能为空', trigger: 'blur' }
          ],
          productionSituation: [
            { required: true, message: '生产情况不能为空', trigger: 'blur' }
          ],
          influenceProductionSituation: [
            { required: true, message: '影响生产情况不能为空', trigger: 'blur' }
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
  .span_div{
    text-align: left;
    padding-top: 18px;
  }
  ._span {
    font-size: 14px;
    color: white
  }
</style>
