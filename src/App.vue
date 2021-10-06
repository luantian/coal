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
    /*max-width: 1920px;*/
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  body {
    color: #fff;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 6px;
    height: 6px;
    background-color: #3666D3;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px #272C94;
    border-radius: 10px;
    background-color: #3666D3;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #272C94;
    background-color: #272C94;
  }
</style>
