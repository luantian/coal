<template>
  <div class="login">
    <div class="main">
      <div class="left">
        <img :src="require('@/assets/img/main-left.png')" alt="">
      </div>
      <div style="min-width: 100px; max-width: 200px;"></div>
      <div class="right">
        <div class="main-wrap">
          <el-form>
            <el-form-item class="custom-form-item">
              <div class="i-wrap">
                <i class="i-p el-icon-user"></i>
              </div>
              <el-input v-model="form.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item class="custom-form-item">
              <div class="i-wrap">
                <i class="i-p el-icon-lock"></i>
              </div>
              <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
          </el-form>
          <img class="login-btn" @click="toLogin" :src="require('@/assets/img/login-button.png')" alt="">
        </div>
      </div>
    </div>
    <div class="bottom">
      <img style="width: 468px; height: 44px;" :src="require('@/assets/img/bottom-left.png')" alt="">
      <div class="bottom-right">
        <img :src="require('@/assets/img/record.png')" alt="">
        <span>辽ICP备178743983号</span>
      </div>
    </div>
  </div>
</template>

<script>

import UserModel from '@/models/User'
import LocalStorage from '@/cache/LocalStorage'

export default {
  name: 'Login',
  data() {
    return {
      message: 'Login',
      form: {
        username: 'ry',
        password: 'admin123'
      },
    }
  },
  methods: {
    async toLogin() {
      const { code, token } = await UserModel.toLogin(this.form)
      if (code === 200 && token) {
        LocalStorage.setItem('token', token)
        await this.getUserInfo()
        this.$router.push({
          path: '/'
        })
      }
    },
    async getUserInfo() {
      const data = await UserModel.getInfo()
      LocalStorage.setItem('user', data.user)
      LocalStorage.setItem('permissions', data.permissions)
      LocalStorage.setItem('roles', data.roles)
    }
  }
}
</script>

<style lang="scss" scoped>

  //::v-deep .el-input {
  //  position: relative;
  //}

  ::v-deep .el-input__inner {
    background-color: #fff;
    border: 1px solid #5F76F2;
    color: #768390;
    height: 64px;
    text-indent: 65px;
    font-size: 20px;
  }

  .login {
    width: 100%;
    height: 100%;
    background: url("~@/assets/img/login-bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    .left {
      width: 797px;
    }
    .right {
      width: 592px;
      height: 524px;
      background: url("~@/assets/img/main-login.png") no-repeat;
      .main-wrap {
        width: 480px;
        margin: 0 auto;
        padding-top: 130px;
        font-size: 20px;
        .custom-form-item {
          position: relative;
          margin-bottom: 40px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    position: absolute;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    justify-content: space-around;
    .bottom-right {
      display: flex;
      align-items: center;
    }
  }

  .i-wrap {
    position: absolute;
    width: 64px;
    height: 100%;
    display: flex;
    border-right: 1px solid #B0B1E5;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .i-p {
      color: #B0B1E5;
      font-size: 30px;
    }
  }

  .login-btn {
    position: relative;
    left: -18px;
    width: 519px;
    height: 103px;
    margin: 0 auto;
    cursor: pointer;
  }


</style>
