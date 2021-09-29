<template>
  <div class="index">
    <common-header></common-header>
    <div class="main container">
      <router-link to="/craftSystem" tag="div" class="one"></router-link>
      <router-link to="/videoMonitor" tag="div" class="two"></router-link>
      <router-link to="/safetyWarning" tag="div" class="three"></router-link>
      <router-link to="/productReport/productionDailyReport" tag="div" class="four"></router-link>
      <router-link to="/deviceArchiveReport/sitePersonnelFiles" tag="div" class="five"></router-link>
    </div>
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
    background: url("~@/assets/img/index_bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100vh - #{$header-height});
    background: url("~@/assets/img/index_main_bg.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .one, .two, .three, .four, .five {
    width: 492px;
    height: 271px;
    position: absolute;
    cursor: pointer;
  }

  .one {
    top: 0;
    left: 0;
    background: url("~@/assets/img/one.png") no-repeat;
    background-size: 100% 100%;
  }

  .two {
    top: 0;
    right: 0;
    background: url("~@/assets/img/two.png") no-repeat;
    background-size: 100% 100%;
  }

  .three {
    position: relative;
    background: url("~@/assets/img/three.png") no-repeat;
    background-size: 100% 100%;
  }

  .four {
    bottom: 0;
    left: 0;
    background: url("~@/assets/img/four.png") no-repeat;
    background-size: 100% 100%;
  }

  .five {
    bottom: 0;
    right: 0;
    background: url("~@/assets/img/five.png") no-repeat;
    background-size: 100% 100%;
  }

</style>
