<template>
  <div class="test">
    <div class="main">
      <echarts-map-3D></echarts-map-3D>
    </div>
  </div>
</template>

<script>

import EchartsMap3D from '@/components/EchartsMap3D'

export default {
  name: 'Test',
  components: { EchartsMap3D },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 800px;
  height: 600px;
}
</style>
