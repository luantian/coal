<template>
<div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="部门" prop="deptName">
      <el-input type="text" v-model="ruleForm.deptName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="personName">
      <el-input type="text" v-model="ruleForm.personName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="职务" prop="postName">
      <el-input v-model="ruleForm.postName"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="phonenumber">
      <el-input v-model="ruleForm.phonenumber"></el-input>
    </el-form-item>
    <el-form-item label="职责" prop="dutyName">
      <el-input v-model="ruleForm.dutyName"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="ruleForm.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import ArchiveReportModel from "@/models/ArchiveReport";
    export default {
        name: "addPersonnelFileForm",
      data() {
        const checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        const validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
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
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              const {code} = ArchiveReportModel.addSitePersonnelFile(this.ruleForm)
              if(code === 200){
                this.$message({
                  message: '新增成功',
                  type: 'success'
                });
                this.emit("addDialogClose")
                this.toQuery()
                return
              }
              this.$message.error('新增失败');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
