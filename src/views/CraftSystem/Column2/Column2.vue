<template>
  <div class="column2">
    <div class="title-wrap">
      <span>累计产量</span>
      <span class="cumulative">
        <span class="item" v-for="(item, index) in String(cumulative.totalYieldNumber)" :style="{ backgroundImage: item === '.' && 'none' }" :key="index">{{ item }}</span>
      </span>
      <span>吨</span>
    </div>
    <div class="info-list">
      <div class="info-item" v-for="(item, index) in cumulativeList" :key="index">
        <div class="icon-wrap">
          <img :src="item.icon" alt="">
        </div>
        <div class="info-content">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-count">{{ item.count > 1000000 ? item.count / 10000 : item.count }} <span class="info-unit">{{ item.count > 1000000 ? '万吨' : item.unit }}</span></div>
        </div>
      </div>
    </div>

    <div class="three-model">
      <div class="three-model-header">
        <div class="models">
          <div class="_model" @click="changeModel(index)" :class="{ active: activeModelIndex === index }" v-for="(item, index) in models" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div style="width: 100%; height: 510px; padding: 10px; box-sizing: border-box;">
        <iframe style="width: 100%; height: 100%;" :src="`/threeModel/index.html?timer=${new Date().getTime()}#model=./model/${models[activeModelIndex].name}.glb&kiosk=0`" frameborder="0"></iframe>
      </div>
    </div>

  </div>
</template>

<script>

  import OutputInfoModel from "@/models/OutputInfo";
  // import ThreeModel from "@/components/ThreeModel";

  const cumulativeList = [
    { keyIndex: 'hourYieldNumber', title: '小时量', count: 0, unit: '吨', icon: require('@/assets/img/hour.png') },
    { keyIndex: 'dayYieldNumber', title: '日产量', count: 0, unit: '吨', icon: require('@/assets/img/day.png') },
    { keyIndex: 'monYieldNumber', title: '月产量', count: 0, unit: '吨', icon: require('@/assets/img/month.png') },
    { keyIndex: 'yearYieldNumber', title: '年产量', count: 0, unit: '吨', icon: require('@/assets/img/year.png') },
  ]

  const models = [
    { name: '轮斗挖掘机' },
    { name: '转载机' },
    { name: '悬臂式受料车' },
    { name: '带式输送机' },
    { name: '装车仓' },
    { name: '整体工艺' },
  ]

  export default {
    name: 'Column2',
    components: {
      // ThreeModel
    },
    data() {
      return {
        cumulative: {
          dayYieldNumber: 0,
          hourYieldNumber: 0,
          monYieldNumber: 0,
          totalYieldNumber: 0,
          yearYieldNumber: 0
        },
        cumulativeList,
        models,
        activeModelIndex: 0
      }
    },
    mounted() {
      this.queryTotalSizeStatistics()
    },
    methods: {
      async queryTotalSizeStatistics() {
        const { code, data } = await OutputInfoModel.queryTotalSizeStatistics()
        if (code === 200) {
          console.log('data', data)
          this.cumulative = data
          this.cumulativeList.map((item) => {
            const key = item.keyIndex
            item.count = data[key]
          })
        }
      },
      changeModel(index) {
        this.activeModelIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column2 {
    flex: 1;
    padding: 0 50px;
  }

  .title-wrap {
    text-align: center;
    vertical-align: center;
    padding-top: 26px;
  }

  .cumulative {
    $h: 56px;
    display: inline-block;
    height: $h;
    color: #FFB14C;
    font-family: Quartz;
    font-size: 46px;
    vertical-align: middle;
    margin: 0 15px;
    .item {
      display: inline-block;
      margin: 0 8px;
      width: 44px;
      height: $h;
      line-height: $h;
      background: url("~@/assets/img/count_bg.png") no-repeat;
    }
  }

  .info-list {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    .info-item {
      display: flex;
      .icon-wrap {
        width: 82px;
        height: 53px;
      }
      .info-content {
        .info-title {
          color: #DDFCFF;
          font-size: 14px;
        }
        .info-count {
          font-family: Quartz;
          color: #7CF4FF;
          font-size: 30px;
        }
        .info-unit {
          color: #DDFCFF;
          font-size: 16px;
        }
      }
    }
  }

  .three-model {
    height: 570px;
    background: url("~@/assets/img/three-model-border.png") no-repeat;
    background-size: 100% 100%;
    .three-model-header {
      height: 47px;
      line-height: 47px;
      text-align: center;
      .models {
        display: flex;
        justify-content: space-around;
        padding: 0 50px;
        ._model {
          box-sizing: border-box;
          border-bottom: 5px solid transparent;
          cursor: pointer;
          &:hover {
            border-bottom: 5px solid #7CF4FF;
          }
        }
        ._model.active {
          border-bottom: 5px solid #7CF4FF;
        }
      }
    }
  }

</style>
