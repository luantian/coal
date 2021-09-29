<template>
  <div id="app" class="global-scale">
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
      // scale: 1,
      ratio: 1920 / 1080,
      scale: window.innerWidth / 1920
    }
  },
  mounted() {
    // window.onresize = this.onResize
    // this.onResize()
  },
  beforeDestroy() {
    window.onresize = null
  },
  methods: {
    onResize() {
      this.scale = window.innerWidth / 1920
      const GlobalScaleDOM = document.querySelector('.global-scale')
      GlobalScaleDOM.style.transform = `scale(${this.scale})`
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
