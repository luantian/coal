<template>
  <div>
    <el-form :model="rowData" status-icon :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">

      <div style="display: flex">
        <div style="flex: 1">
          <el-form-item label="设备型号" prop="deviceType">
            <el-input type="text" v-model="rowData.deviceType" autocomplete="off" placeholder="请输入设备型号"></el-input>
          </el-form-item>
          <el-form-item label="取料名称" prop="materialName">
            <el-input type="text" v-model="rowData.materialName" autocomplete="off" placeholder="请输入人取料名称"></el-input>
          </el-form-item>
          <el-form-item label="带速" prop="beltSpeed">
            <el-input v-model="rowData.beltSpeed" placeholder="请输入带速"></el-input>
          </el-form-item>
          <el-form-item label="输送带类型" prop="beltType">
            <el-input v-model="rowData.beltType" placeholder="请输入输送带类型"></el-input>
          </el-form-item>
          <el-form-item label="拉紧形式" prop="tensionForm">
            <el-input v-model="rowData.tensionForm" placeholder="请输入拉紧形式"></el-input>
          </el-form-item>
          <el-form-item label="物料密度" prop="materialDensity">
            <el-input v-model="rowData.materialDensity" placeholder="请输入物料密度"></el-input>
          </el-form-item>
          <el-form-item label="运量" prop="freightVolume">
            <el-input v-model="rowData.freightVolume" placeholder="请输入运量"></el-input>
          </el-form-item>
        </div>

        <div style="flex: 1">
          <el-form-item label="输送带厚度" prop="conveyorThickness">
            <el-input v-model="rowData.conveyorThickness" placeholder="请输入输送带厚度"></el-input>
          </el-form-item>
          <el-form-item label="物料粒度" prop="materialGranularity">
            <el-input v-model="rowData.materialGranularity" placeholder="请输入物料粒度"></el-input>
          </el-form-item>
          <el-form-item label="长度" prop="lengthNumber">
            <el-input v-model="rowData.lengthNumber" placeholder="请输入长度"></el-input>
          </el-form-item>
          <el-form-item label="上覆盖胶厚度" prop="upperGlueThickness">
            <el-input v-model="rowData.upperGlueThickness" placeholder="请输入上覆盖胶厚度"></el-input>
          </el-form-item>
          <el-form-item label="物料动堆积角" prop="materialStackingAngle">
            <el-input v-model="rowData.materialStackingAngle" placeholder="请输入物料动堆积角"></el-input>
          </el-form-item>
          <el-form-item label="提升高度" prop="liftingHeight">
            <el-input v-model="rowData.liftingHeight" placeholder="请输入提升高度"></el-input>
          </el-form-item>
          <el-form-item label="下覆盖胶厚度" prop="lowerGlueThickness">
            <el-input v-model="rowData.lowerGlueThickness" placeholder="请输入下覆盖胶厚度"></el-input>
          </el-form-item>
        </div>

        <div style="flex: 1">
          <el-form-item label="含水率" prop="moistureContent">
            <el-input v-model="rowData.moistureContent" placeholder="请输入含水率"></el-input>
          </el-form-item>
          <el-form-item label="输送倾角范围" prop="inclinationRange">
            <el-input v-model="rowData.inclinationRange" placeholder="请输入输送倾角范围"></el-input>
          </el-form-item>
          <el-form-item label="装机功率" prop="installedPower">
            <el-input v-model="rowData.installedPower" placeholder="请输入装机功率"></el-input>
          </el-form-item>
          <el-form-item label="带宽" prop="bandWidth">
            <el-input v-model="rowData.bandWidth" placeholder="带宽"></el-input>
          </el-form-item>
          <el-form-item label="带强" prop="bandStrength">
            <el-input v-model="rowData.bandStrength" placeholder="请输入带强"></el-input>
          </el-form-item>
          <el-form-item label="驱动单元布置方式" prop="driveArrangement">
            <el-input v-model="rowData.driveArrangement" placeholder="请输入驱动单元布置方式"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="rowData.remark" placeholder="请输入备注"></el-input>
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
import ArchiveReportModel from "@/models/ArchiveReport";

export default {
  name: "addPersonnelFileForm",
  props: {
    rowData: {}
  },
  data() {
    return {
      ruleForm: {
        deviceType: '',
        materialName: '',
        beltSpeed: '',
        beltType: '',
        tensionForm: '',
        materialDensity: '',
        freightVolume: '',
        conveyorThickness: '',
        materialGranularity: '',
        lengthNumber: '',
        upperGlueThickness: '',
        materialStackingAngle: '',
        liftingHeight: '',
        lowerGlueThickness: '',
        moistureContent: '',
        inclinationRange: '',
        installedPower: '',
        bandWidth: '',
        bandStrength: '',
        driveArrangement: '',
        remark: ''
      },
      rules: {
        deviceType: [
          {required: true, message: '设备型号不能为空', trigger: 'blur'}
        ],
        materialName: [
          {required: true, message: '取料名称不能为空', trigger: 'blur'}
        ],
        beltSpeed: [
          {required: true, message: '带速不能为空', trigger: 'blur'}
        ],
        beltType: [
          {required: true, message: '输送带类型不能为空', trigger: 'blur'}
        ],
        tensionForm: [
          {required: true, message: '拉紧形式不能为空', trigger: 'blur'}
        ],
        materialDensity: [
          {required: true, message: '物料密度不能为空', trigger: 'blur'}
        ],
        freightVolume: [
          {required: true, message: '运量不能为空', trigger: 'blur'}
        ],
        conveyorThickness: [
          {required: true, message: '输送带厚度不能为空', trigger: 'blur'}
        ],
        lubricatingUnit: [
          {required: true, message: '物料粒度不能为空', trigger: 'blur'}
        ],
        lengthNumber: [
          {required: true, message: '长度不能为空', trigger: 'blur'}
        ],
        upperGlueThickness: [
          {required: true, message: '上覆盖胶厚度不能为空', trigger: 'blur'}
        ],
        materialStackingAngle: [
          {required: true, message: '物料动堆积角不能为空', trigger: 'blur'}
        ],
        liftingHeight: [
          {required: true, message: '提升高度不能为空', trigger: 'blur'}
        ],
        lowerGlueThickness: [
          {required: true, message: '下覆盖胶厚度不能为空', trigger: 'blur'}
        ],
        moistureContent: [
          {required: true, message: '含水率不能为空', trigger: 'blur'}
        ],
        inclinationRange: [
          {required: true, message: '输送倾角范围不能为空', trigger: 'blur'}
        ],
        installedPower: [
          {required: true, message: '装机功率不能为空', trigger: 'blur'}
        ],
        bandWidth: [
          {required: true, message: '带宽不能为空', trigger: 'blur'}
        ],
        bandStrength: [
          {required: true, message: '带强不能为空', trigger: 'blur'}
        ],
        driveArrangement: [
          {required: true, message: '驱动单元布置方式不能为空', trigger: 'blur'}
        ],
        remark: [
          {required: true, message: '备注不能为空', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const {code} = await ArchiveReportModel.editRibbonConveyerFilesList(this.rowData)
          console.log()
          if (code === 200) {
            this.$message({
              message: '编辑成功',
              type: 'success'
            });
            this.$emit("editDialogClose")
            this.$emit("queryList")
            return
          }
          this.$message.error('编辑失败');
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
