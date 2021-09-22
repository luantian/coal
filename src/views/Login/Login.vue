<template>
  <div class="login">
    {{ message }}
    <el-button @click="toLogin" type="primary">login</el-button>
  </div>
</template>

<script>

import UserModel from '@/models/User'

export default {
  name: 'Login',
  data() {
    return {
      message: 'Login'
    }
  },
  methods: {
    async toLogin() {
      const { status } = await UserModel.getAll()
      console.log('status', status)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
