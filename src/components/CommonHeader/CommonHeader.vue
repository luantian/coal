<template>
  <div class="common-header">
    <div class="logo">

    </div>
    <div class="title">

    </div>
    <div class="opera">
      <div class="date">{{ date }}</div>
      <div class="user-info">
        <div class="user-avatar">
          <img src="@/assets/img/default_avatar.png" alt="">
        </div>
      </div>
      <div class="drop">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span class="user-name">admin</span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
<!--            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>

  import * as moment from 'moment';
  moment.locale('zh-cn');

  export default {
    name: 'CommonHeader',
    data() {
      return {
        timer: null,
        date: ''
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.date = moment().format('LL HH:mm:ss')
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }

</script>

<style lang="scss" scoped>
  .common-header {
    display: flex;
    color: #fff;
    height: 97px;
    line-height: 80px;
    background: url("~@/assets/img/common_header.png") no-repeat;
    .title {
      flex: 1;
    }
    .opera {
      display: flex;

      .user-info {
        margin: 0 8px 0 50px;
        .user-avatar {
          width: 38px;
          height: 38px;
          position: relative;
          top: 14px;
        }
      }
    }

    .drop {
      padding-right: 20px;
      .el-dropdown-link {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
</style>
