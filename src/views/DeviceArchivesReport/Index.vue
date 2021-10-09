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
          title: '带式输送机基础档案'
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
        path: 'wheelBucketBreakdown',
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
  components: {TreeMenu, CommonHeader},
  data() {
    return {
      menus
    }
  },
  mounted() {
    //
  },
  methods: {
    onMenuItem(path, paths) {
      const current = this.$router.history.current.fullPath
      const toPath = paths.join('/')
      if (current === toPath) return
      this.$router.push({
        path: toPath
      })
    },
  }
}

</script>

<style lang="scss" scoped>
.top {
  height: $header-height;
}

.report-index {
  height: 100%;
  background: url("~@/assets/img/index_bg.jpg") no-repeat;
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
