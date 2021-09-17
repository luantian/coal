<template>
  <div>
    <el-drawer
      title="搜索"
      size="40%"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
        <el-form-item label="区域">
          <el-input v-model="ruleForm.area" clearable></el-input>
        </el-form-item>
        <el-form-item label="产业类型">
          <el-input v-model="ruleForm.type" clearable></el-input>
        </el-form-item>
        <el-form-item label="产业规模">
          <el-select v-model="ruleForm.scale">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="经营内容">
          <el-input v-model="ruleForm.content" clearable></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker
            v-model="selectTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">注册</el-button>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: ['dialog'],
  data() {
    return {
      drawer: this.dialog.show, // 是否显示弹窗
      direction: 'ltr', // 弹窗方向
      ruleForm: {
        area: '',
        type: '',
        scale: '',
        name: '',
        content: ''
      },
      selectTime: ''
    };
  },
  methods: {
    handleClose(done) {
      done()
      this.$emit('handleClose', false)
    }
  }
}
</script>

<style lang="less" scoped>
.el-form {
  width: 90%;
}
</style>
