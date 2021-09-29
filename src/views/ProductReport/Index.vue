<template>
  <div class="report-index">
    <div class="top">顶部组件</div>
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

  import TreeMenu from '@/components/TreeMenu'

  const menus = [
    {
      path: '/productReport/productionDailyReport',
      meta: {
        title: '近景监控'
      },
    }
  ]

  export default {
    name: 'ReportIndex',
    components: { TreeMenu },
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
