<template>
  <div class="safety-warning">
    <common-header></common-header>
    <div class="tabs">
      <div @click="onChangeTab(tab, index)" :class="['tab-item', { active: activeIndex === index }]" v-for="(tab, index) in tabs" :key="index">
        {{ tab.title }}
      </div>
    </div>
    <div class="content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "@/components/CommonHeader";

  import Tab1 from './Tab1'
  import Tab2 from './Tab2'
  import Tab3 from './Tab3'

  export default {
    name: 'SafetyWarning',
    components: { CommonHeader, Tab1, Tab2, Tab3 },
    data() {
      return {
        tabs: [ { title: '设备实时报警', value: 1, name: 'Tab1' }, { title: '历史报警列表', value: 2, name: 'Tab2' }, { title: '历史报警统计', value: 3, name: 'Tab3' } ],
        activeIndex: 0,
        currentComponent: 'Tab1',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      onChangeTab(item, index) {
        this.activeIndex = index
        this.currentComponent = item.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .safety-warning {
    height: 100%;
    background: url("~@/assets/img/index_bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 74px;
    line-height: 74px;
    font-size: 18px;
    margin: auto;
    .tab-item {
      border-bottom: 4px solid transparent;
      cursor: pointer;
    }
    .tab-item.active {
      border-bottom: 4px solid #7CF4FF;
      color: #7CF4FF;
    }
  }

  .content {
    margin: 0 40px;
    border: 1px solid #2D35B7;
    padding: 16px 50px;
  }
</style>
