<template>
  <div class="sub-title">
    <div class="main">
      <slot></slot>
<!--      <div class="el-icon-full-screen"></div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubTitle',
    props: {
      className: {
        type: String,
      }
    },
    data() {
      return {

      }
    },
    methods: {
      fullscreen() {
        const element = document.querySelector('.' + this.className)
        console.log('this.className', this.className)
        console.log('element', element)
        if (!element) return
        if(element.requestFullscreen){
          element.requestFullscreen();
        }
        else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        }
        else if(element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        }
        else if(element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sub-title {
    width: 410px;
    height: 60px;
    background: url("~@/assets/img/sub_title_bg.png") no-repeat;
  }

  .main {
    text-align: center;
    font-size: 18px;
    position: relative;
    .el-icon-full-screen {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
