<template>
<div style="width: 700px">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="部门" prop="deptName">
      <el-input type="text" v-model="ruleForm.deptName" autocomplete="off" placeholder="请输入部门名称"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="personName">
      <el-input type="text" v-model="ruleForm.personName" autocomplete="off" placeholder="请输入人员姓名"></el-input>
    </el-form-item>
    <el-form-item label="职务" prop="postName">
      <el-input v-model="ruleForm.postName" placeholder="请输职务入"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="phonenumber">
      <el-input v-model="ruleForm.phonenumber" placeholder="请输入联系方式"></el-input>
    </el-form-item>
    <el-form-item label="职责" prop="dutyName">
      <el-input v-model="ruleForm.dutyName" placeholder="请输入职责"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="ruleForm.remark" placeholder="请输入备注"></el-input>
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
            deptName: '',
            personName: '',
            postName: '',
            phonenumber: '',
            dutyName: '',
            remark: ''
          },
          rules: {
            deptName: [
              { required: true, message: '部门名称不能为空', trigger: 'blur' }
            ],
            personName: [
              { required: true, message: '人员姓名不能为空', trigger: 'blur' }
            ],
            postName: [
              { required: true, message: '职务不能为空', trigger: 'blur' }
            ],
            phonenumber: [
              { required: true, message: '联系电话不能为空', trigger: 'blur' }
            ],
            dutyName: [
              { required: true, message: '职责不能为空', trigger: 'blur' }
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
              const {code} = await ArchiveReportModel.addSitePersonnelFile(this.ruleForm)
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
