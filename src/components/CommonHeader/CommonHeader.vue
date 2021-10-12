<template>
  <div class="common-header">
    <div class="logo">
      <router-link v-if="$route.fullPath !== '/'" to="/" tag="div" class="to-index">返回首页</router-link>
    </div>
    <div class="title">

    </div>
    <div class="opera">
      <div class="date">{{ date }}</div>
      <div class="user-info">
        <div class="user-avatar">
          <img :src="userInfo.avatar || require('@/assets/img/default_avatar.png')" alt="">
        </div>
      </div>
      <div class="drop">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span class="user-name">{{ userInfo.nickName }}</span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="toManager">后台管理</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="toLogout">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>

  import * as moment from 'moment';
  moment.locale('zh-cn');

  import LocalStorage from "@/cache/LocalStorage";
  import UserModel from '@/models/User'

  export default {
    name: 'CommonHeader',
    data() {
      return {
        timer: null,
        date: '',
        token: LocalStorage.getItem('token'),
        userInfo: LocalStorage.getItem('user')
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.date = moment().format('LL HH:mm:ss')
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      toManager() {
        window.open(`http://49.233.1.136:8091/system/user?token=${this.token}`)
        // location.href = `localhost:8888/index?token=${this.token}`
      },
      async toLogout() {
        const { code } = await UserModel.toLogout()
        if (code === 200) {
          LocalStorage.setItem('token', null)
          LocalStorage.setItem('user', null)
          LocalStorage.setItem('permissions', null)
          LocalStorage.setItem('roles', null)
          this.$router.push({
            path: '/login'
          })
        }
      }
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
    .logo {
      position: relative;
    }
    .to-index {
      width: 85px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 14px;
      background: url("~@/assets/img/toindex.png") no-repeat;
      cursor: pointer;
      position: absolute;
      left: 400px;
      top: 20px;
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
        .user-name {
          color: #fff;
        }
      }
    }
  }
</style>
