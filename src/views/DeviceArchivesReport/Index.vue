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
    path: '/deviceArchiveReport/sitePersonnelFiles',
    meta: {
      title: '现场人员基础档案'
    },
  },
  {
    path: '/deviceArchiveReport/lubricatingOilConsumption',
    meta: {
      title: '润滑用油明细表'
    },
  },
  {
    path: '/deviceArchiveReport/deviceBasicFiles',
    meta: {
      title: '设备基础档案'
    },
    children: [
      {
        path: 'wheelBucketEquipment',
        meta: {
          title: '轮斗设备基础档案'
        }
      },
      {
        path: 'reversedLoader',
        meta: {
          title: '转载机基础档案'
        }
      },
      {
        path: 'cantileverReceivingCar',
        meta: {
          title: '悬臂受料车基础档案'
        }
      },
      {
        path: 'ribbonConveyer',
        meta: {
          title: '带式传输机基础档案'
        }
      },
      {
        path: 'loadingBunker',
        meta: {
          title: '装车仓基础档案'
        }
      }
    ]
  },
  {
    path: '/deviceArchiveReport/deviceParts',
    meta: {
      title: '零部件基础档案'
    },
    children: [
      {
        path: 'wheelBucket',
        meta: {
          title: '轮斗挖掘机零部件基础档案'
        }
      },
      {
        path: 'reversedLoaderParts',
        meta: {
          title: '转载机零部件基础档案'
        }
      },
      {
        path: 'cantileverReceivingCarParts',
        meta: {
          title: '悬臂受料车零部件基础档案'
        }
      },
      {
        path: 'strap',
        meta: {
          title: '皮条零部件基础档案'
        }
      },
    ]
  },
  {
    path: '/deviceArchiveReport/breakDown',
    meta: {
      title: '故障基础档案'
    },
    children: [
      {
        path: 'wheelBucket',
        meta: {
          title: '轮斗挖掘机故障基础档案'
        }
      },
      {
        path: 'reversedLoaderBreakdown',
        meta: {
          title: '转载机故障基础档案'
        }
      },
      {
        path: 'cantileverReceivingCarBreakdown',
        meta: {
          title: '悬臂受料车故障基础档案'
        }
      }
    ]
  },
]
export default {
  name: 'ArchiveReportIndex',
  components: {TreeMenu},
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
    //background: red;
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
