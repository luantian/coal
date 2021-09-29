<template>
  <div class="login">
    <div class="main">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="toLogin" type="primary">登录</el-button>
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
      const { token } = await UserModel.toLogin(this.form)
      if (token) {
        LocalStorage.setItem('token', token)
        this.$router.push({
          path: '/index'
        })
      }
    },
    async getUserInfo() {
      const data = await UserModel.getInfo()
      console.log('data', data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .main {
    width: 600px;
    height: 400px;
    margin: 0 auto;
  }
</style>
