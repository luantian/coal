<template>
  <div class="video-monitor">
    <common-header></common-header>
    <div class="container">
      <div class="menus">
        <tree-menu :routes="menus" @onSelect="onMenuItem"></tree-menu>
      </div>
      <div class="main">
<!--        <router-view></router-view>-->
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "@/components/CommonHeader";
  import TreeMenu from '@/components/TreeMenu'

  const menus = [
    {
      path: '/productReport/productionDailyReport',
      meta: {
        title: '生产日报表'
      },
      children: [
        {
          path: 'aaa',
          meta: {
            title: 'haha'
          }
        },
        {
          path: 'bbb',
          meta: {
            title: 'haha'
          }
        }
      ]
    },
    {
      path: '/productReport/leaderOnDuty',
      meta: {
        title: '领导值班表'
      },
    },
    {
      path: '/productReport/deviceBreakdown',
      meta: {
        title: '设备故障表'
      },
    },
    {
      path: '/productReport/output',
      meta: {
        title: '产量统计表'
      },
    },
  ]

  export default {
    name: 'VideoMonitor',
    components: { CommonHeader, TreeMenu },
    data() {
      return {
        menus
      }
    },
    methods: {
      onMenuItem() {
        console.log(123)
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

  .container {
    display: flex;
    height: calc(100vh - #{$header-height} - 30px);
    padding: 0 30px;
    .menus {
      width: $menus-width;
      //height: 100%;
      overflow: auto;
      border: 1px solid #2D35B7;
      box-sizing: border-box;
      box-shadow: 1px 1px 5px #2D35B7;
    }
    .main {
      width: calc(100vw - #{$menus-width});
      height: 100%;
      overflow: auto;
    }
  }
</style>
