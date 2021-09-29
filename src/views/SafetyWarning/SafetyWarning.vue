<template>
  <div class="safety-warning">
    <common-header></common-header>
    安全预警
  </div>
</template>

<script>
  import CommonHeader from "@/components/CommonHeader";
  export default {
    name: 'SafetyWarning',
    components: { CommonHeader },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .safety-warning {
    height: 100%;
    background: url("~@/assets/img/index_bg.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
