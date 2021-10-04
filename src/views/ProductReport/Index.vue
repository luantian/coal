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
      onMenuItem(item) {
        this.$router.push({
          path: item.path
        })
      },
    }
  }

</script>

<style lang="scss" scoped>
  .top {
    height: $header-height;
  }

  .container {
    display: flex;
    height: calc(100vh - #{$header-height});
    .menus {
      width: $menus-width;
      height: 100%;
      background: aqua;
      overflow: auto;
    }
    .main {
      width: calc(100vw - #{$menus-width});
      height: 100%;
      background: ghostwhite;
      overflow: auto;
    }
  }



</style>
