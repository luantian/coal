<template>
  <div class="tab1">
    <el-form>
      <el-form-item label="选择查询位置">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <el-button type="primary" style="margin-left: 10px;">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  const columns = [
    {
      prop: '',
      label: '报警起始时间',
    },
    {
      prop: '',
      label: '报警终止时间',
    },
    {
      prop: '',
      label: '报警信息',
    },
    {
      prop: '',
      label: '报警设备',
    },
    {
      prop: '',
      label: '报警部位',
    },
    {
      prop: '',
      label: '报警参数值',
    },
    {
      prop: '',
      label: '设备阀值',
    },
    {
      prop: '',
      label: '预警排除措施',
    },
    {
      prop: '',
      label: '状态',
    },
    {
      prop: '',
      label: '操作',
    }
  ]

  export default {
    name: 'Tab1',
    data() {
      return {
        columns,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
