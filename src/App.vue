<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
    }
  }
}
</script>

<style>
  html, body, #app {
    max-width: 1920px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  body {
    color: #fff;
  }
</style>
