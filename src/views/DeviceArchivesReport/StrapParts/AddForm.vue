<template>
<div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
    <el-form-item label="部件名称" prop="partsName">
      <el-input type="text" v-model="ruleForm.partsName" autocomplete="off" placeholder="请输入部件名称"></el-input>
    </el-form-item>
    <el-form-item label="部件位置" prop="partsLocation">
      <el-input v-model="ruleForm.partsLocation" placeholder="请输入部件位置"></el-input>
    </el-form-item>
    <el-form-item label="规格型号" prop="specification">
      <el-input v-model="ruleForm.specification" placeholder="请输入规格型号"></el-input>
    </el-form-item>
    <el-form-item label="技术参数" prop="technicalParam">
      <el-input v-model="ruleForm.technicalParam" placeholder="技术参数"></el-input>
    </el-form-item>
    <el-form-item label="附件" prop="annex">
      <el-input v-model="ruleForm.annex" placeholder="请输入附件"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="quantity">
      <el-input v-model="ruleForm.quantity" placeholder="请输入数量"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="ruleForm.remark" placeholder="请输入备注"></el-input>
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
            partsName: '',
            partsLocation: '',
            specification: '',
            technicalParam: '',
            annex: '',
            quantity: '',
            remark: ''
          },
          rules: {
            partsName: [
              { required: true, message: '部件名称不能为空', trigger: 'blur' }
            ],
            partsLocation: [
              { required: true, message: '部件位置不能为空', trigger: 'blur' }
            ],
            specification: [
              { required: true, message: '规格型号不能为空', trigger: 'blur' }
            ],
            technicalParam: [
              { required: true, message: '技术参数不能为空', trigger: 'blur' }
            ],
            annex: [
              { required: true, message: '附件位置不能为空', trigger: 'blur' }
            ],
            quantity: [
              { required: true, message: '数量不能为空', trigger: 'blur' }
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
              const {code} = await ArchiveReportModel.addStrapFile(this.ruleForm)
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
