<template>
  <div class="column2">
    <div class="title-wrap">
      <span>累计产量</span>
      <span class="cumulative">
        <span class="item" v-for="(item, index) in String(cumulative.totalYieldNumber)" :style="{ backgroundImage: item === '.' && 'none' }" :key="index">{{ item }}</span>
      </span>
      <span>万吨</span>
    </div>
    <div class="info-list">
      <div class="info-item" v-for="(item, index) in cumulativeList" :key="index">
        <div class="icon-wrap">
          <img :src="item.icon" alt="">
        </div>
        <div class="info-content">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-count" style="font-family: Quartz">{{ item.count }} <span class="info-unit">{{ item.unit }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import OutputInfoModel from "@/models/OutputInfo";

  export default {
    name: 'Column2',
    data() {
      return {
        cumulative: {
          dayYieldNumber: 0,
          hourYieldNumber: 0,
          monYieldNumber: 0,
          totalYieldNumber: 0,
          yearYieldNumber: 0
        },
        cumulativeList: [
          { keyIndex: 'hourYieldNumber', title: '小时量', count: 0, unit: '吨', icon: require('@/assets/img/hour.png') },
          { keyIndex: 'dayYieldNumber', title: '日产量', count: 0, unit: '吨', icon: require('@/assets/img/day.png') },
          { keyIndex: 'monYieldNumber', title: '月产量', count: 0, unit: '万吨', icon: require('@/assets/img/month.png') },
          { keyIndex: 'yearYieldNumber', title: '年产量', count: 0, unit: '万吨', icon: require('@/assets/img/year.png') },
        ]
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
    margin-top: 30px;
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

</style>
