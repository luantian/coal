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

  import CommonHeader from "@/components/CommonHeader"
  import TreeMenu from '@/components/TreeMenu'

  const menus = [
    {
      path: '组件1',
      meta: {
        title: '近景监控'
      },
      children: [
        {
          path: '组件2',
          meta: {
            title: '一号监控点',
          }
        },
        {
          path: '组件3',
          meta: {
            title: '二号监控点',
          }
        },
        {
          path: '组件4',
          meta: {
            title: '三号监控点',
          }
        },
        {
          path: '组件5',
          meta: {
            title: '四号监控点',
          }
        }
      ]
    },
    {
      path: '组件7',
      meta: {
        title: '远景监控'
      },
    }
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
      onMenuItem(path, paths) {
        console.log('path', path)
        console.log('paths', paths)
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
