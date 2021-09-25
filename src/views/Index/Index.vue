<template>
  <div class="index">
    <common-header></common-header>
  </div>
</template>

<script>

import CommonHeader from "@/components/CommonHeader";

export default {
  name: 'Index',
  components: { CommonHeader },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    height: 100%;
    background: url("~@/assets/img/index_bg.png") no-repeat center center;
  }
</style>
