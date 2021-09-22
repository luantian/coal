<template>
  <div class="report-index">
    <div>
      <div class="menus">
        <div @click="onMenu(item)" class="menu-item" v-for="(item, index) in menus" :key="index">{{ item.title }}</div>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ReportIndex',
    data() {
      return {
        menus: [
          {
            title: '生产日报表',
            path: 'a'
          },
          {
            title: '生产日报表2',
            path: 'b'
          }
        ]
      }
    },
    methods: {
      onMenu(item) {
        this.$router.push({
          path: item.path
        })
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
