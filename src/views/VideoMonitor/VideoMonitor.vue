<template>
  <div class="video-monitor">
    <common-header></common-header>
    视频监控
  </div>
</template>

<script>
  import CommonHeader from "@/components/CommonHeader";
  export default {
    name: 'VideoMonitor',
    components: { CommonHeader },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .video-monitor {
    height: 100%;
    background: url("~@/assets/img/index_bg.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
