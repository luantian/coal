<template>
  <div class="login">
    {{ message }}
    <a-button @click="toLogin" type="primary">asdf</a-button>
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

<style lang="less" scoped>

</style>
