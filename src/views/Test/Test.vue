<template>
  <div class="test">
    <div class="main">
      test
      <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Test',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 800px;
    height: 600px;
    color: $primary-color;
  }
</style>
