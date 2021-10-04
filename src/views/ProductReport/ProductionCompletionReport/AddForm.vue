<template>
<div style="width: 700px">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <div style="flex: 1">
      <el-form-item label="设备型号" prop="deviceType">
        <el-input type="text" v-model="ruleForm.deviceType" autocomplete="off" placeholder="请输入设备型号"></el-input>
      </el-form-item>
      <el-form-item label="取料名称" prop="materialName">
        <el-input type="text" v-model="ruleForm.materialName" autocomplete="off" placeholder="请输入人取料名称"></el-input>
      </el-form-item>
      <el-form-item label="带速" prop="beltSpeed">
        <el-input v-model="ruleForm.beltSpeed" placeholder="请输入带速"></el-input>
      </el-form-item>
      <el-form-item label="输送带类型" prop="beltType">
        <el-input v-model="ruleForm.beltType" placeholder="请输入输送带类型"></el-input>
      </el-form-item>
      <el-form-item label="拉紧形式" prop="tensionForm">
        <el-input v-model="ruleForm.tensionForm" placeholder="请输入拉紧形式"></el-input>
      </el-form-item>
      <el-form-item label="物料密度" prop="materialDensity">
        <el-input v-model="ruleForm.materialDensity" placeholder="请输入物料密度"></el-input>
      </el-form-item>
      <el-form-item label="运量" prop="freightVolume">
        <el-input v-model="ruleForm.freightVolume" placeholder="请输入运量"></el-input>
      </el-form-item>
      <el-form-item label="拉紧形式" prop="tensionForm">
        <el-input v-model="ruleForm.tensionForm" placeholder="请输入拉紧形式"></el-input>
      </el-form-item>
      <el-form-item label="物料密度" prop="materialDensity">
        <el-input v-model="ruleForm.materialDensity" placeholder="请输入物料密度"></el-input>
      </el-form-item>
      <el-form-item label="运量" prop="freightVolume">
        <el-input v-model="ruleForm.freightVolume" placeholder="请输入运量"></el-input>
      </el-form-item>
    </div>

    <div style="flex: 1">
      <el-form-item label="输送带厚度" prop="conveyorThickness">
        <el-input v-model="ruleForm.conveyorThickness" placeholder="请输入输送带厚度"></el-input>
      </el-form-item>
      <el-form-item label="物料粒度" prop="materialGranularity">
        <el-input v-model="ruleForm.materialGranularity" placeholder="请输入物料粒度"></el-input>
      </el-form-item>
      <el-form-item label="长度" prop="lengthNumber">
        <el-input v-model="ruleForm.lengthNumber" placeholder="请输入长度"></el-input>
      </el-form-item>
      <el-form-item label="上覆盖胶厚度" prop="upperGlueThickness">
        <el-input v-model="ruleForm.upperGlueThickness" placeholder="请输入上覆盖胶厚度"></el-input>
      </el-form-item>
      <el-form-item label="物料动堆积角" prop="materialStackingAngle">
        <el-input v-model="ruleForm.materialStackingAngle" placeholder="请输入物料动堆积角"></el-input>
      </el-form-item>
      <el-form-item label="提升高度" prop="liftingHeight">
        <el-input v-model="ruleForm.liftingHeight" placeholder="请输入提升高度"></el-input>
      </el-form-item>
      <el-form-item label="下覆盖胶厚度" prop="lowerGlueThickness">
        <el-input v-model="ruleForm.lowerGlueThickness" placeholder="请输入下覆盖胶厚度"></el-input>
      </el-form-item>
    </div>

    <div style="flex: 1">
      <el-form-item label="含水率" prop="moistureContent">
        <el-input v-model="ruleForm.moistureContent" placeholder="请输入含水率"></el-input>
      </el-form-item>
      <el-form-item label="输送倾角范围" prop="inclinationRange">
        <el-input v-model="ruleForm.inclinationRange" placeholder="请输入输送倾角范围"></el-input>
      </el-form-item>
      <el-form-item label="装机功率" prop="installedPower">
        <el-input v-model="ruleForm.installedPower" placeholder="请输入装机功率"></el-input>
      </el-form-item>
      <el-form-item label="带宽" prop="bandWidth">
        <el-input v-model="ruleForm.bandWidth" placeholder="带宽"></el-input>
      </el-form-item>
      <el-form-item label="带强" prop="bandStrength">
        <el-input v-model="ruleForm.bandStrength" placeholder="请输入带强"></el-input>
      </el-form-item>
      <el-form-item label="驱动单元布置方式" prop="driveArrangement">
        <el-input v-model="ruleForm.driveArrangement" placeholder="请输入驱动单元布置方式"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="ruleForm.remark" placeholder="请输入备注"></el-input>
      </el-form-item>
    </div>
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
