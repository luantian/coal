<template>
  <div class="sub-title">
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubTitle',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .sub-title {
    width: 410px;
    height: 60px;
    background: url("~@/assets/img/sub_title_bg.png") no-repeat;
  }

  .main {
    text-align: center;
    font-size: 18px;
  }
</style>
