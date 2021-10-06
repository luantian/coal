<template>
  <div class="report-index">
    <common-header></common-header>
    <div class="container">
      <div class="menus">
        <tree-menu :routes="menus" @onSelect="onMenuItem"></tree-menu>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import CommonHeader from "@/components/CommonHeader";
  import TreeMenu from '@/components/TreeMenu'

  const menus = [
    {
      path: '/productReport/productionPlan',
      meta: {
        title: '生产日报-生产计划'
      },
    },
    {
      path: '/productReport/completion',
      meta: {
        title: '生产日报-完成情况'
      },
    },
    {
      path: '/productReport/deviceBreakdown',
      meta: {
        title: '设备故障表'
      },
    }
  ]

  export default {
    name: 'ReportIndex',
    components: { TreeMenu, CommonHeader },
    data() {
      return {
        menus
      }
    },
    mounted() {
      //
    },
    methods: {
      onMenuItem(path) {
        this.$router.push({
          path
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .top {
    height: $header-height;
  }


  .report-index {
    height: 100%;
    background: url("~@/assets/img/index_bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .container {
    display: flex;
    height: calc(100vh - #{$header-height} - 17px);
    padding: 17px 34px 0 32px;
    .menus {
      width: $menus-width;
      height: calc(100vh - #{$header-height} - 42px);
      //background: red;
      overflow: auto;
      background: rgba(5, 13, 61, 0.6);
      border: 1px solid #2D35B7;
    }
    .main {
      width: calc(100vw - #{$menus-width});
      height: calc(100vh - #{$header-height} - 42px);
      overflow: auto;
      background: rgba(5, 13, 61, 0.6);
      border-right: 1px solid #2D35B7;
      border-top: 1px solid #2D35B7;
      border-bottom: 1px solid #2D35B7;
    }
  }



</style>
