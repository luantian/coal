<template>
  <div class="video-monitor">
    <common-header></common-header>
    <div class="container">
      <div class="menus">
        <tree-menu :routes="menus" @onSelect="onMenuItem"></tree-menu>
      </div>
      <div class="main">
<!--        <router-view></router-view>-->
        <div class="video-wrap">
          <div class="video-item" v-for="(item, index) in videos" :key="index">
            <img style="width: 100%;" :src="`/video/${item.imgUrl}`" alt="">
            <div class="video-bottom">
              <div>一号摄像头</div>
              <div class="video-status"><div class="green-circle"></div>工作中</div>
            </div>
          </div>
        </div>
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

  const videos = [
    { videoUrl: '1.mov', imgUrl: '1.png' },
    { videoUrl: '2.mov', imgUrl: '2.png' },
    { videoUrl: '3.mov', imgUrl: '3.png' },
    { videoUrl: '4.mp4', imgUrl: '4.png' }
  ]

  export default {
    name: 'VideoMonitor',
    components: { CommonHeader, TreeMenu },
    data() {
      return {
        menus,
        videos
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
      padding: 30px 36px;
      box-sizing: border-box;
      border: 1px solid #2D35B7;
      border-left: 0;
      box-shadow: 1px 1px 5px #2D35B7;
    }
  }

  .video-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .video-item {
    width: 30%;
    border: 1px solid #2D35B7;
    background: #050D3D;
    //margin-right: 3.18%;
    margin-bottom: 36px;
    .video-bottom {
      height: 56px;
      background: url("~@/assets/img/video-bottom.png") no-repeat;
      background-size: 100% 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }

  .video-status {
    display: flex;
  }

  .red-circle {
    width: 18px;
    height: 18px;
    background: red;
    border-radius: 100%;
    margin-right: 10px;
  }

  .green-circle {
    width: 18px;
    height: 18px;
    background: #2EF157;
    border-radius: 100%;
    margin-right: 10px;
  }

</style>
