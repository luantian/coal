<template>
  <div class="index">
    <common-header></common-header>
<!--    <div class="main container">-->
<!--      <router-link to="/craftSystem" tag="div" class="one"></router-link>-->
<!--      <router-link to="/videoMonitor" tag="div" class="two"></router-link>-->
<!--      <router-link to="/safetyWarning" tag="div" class="three"></router-link>-->
<!--      <router-link to="/productReport/productionDailyReport" tag="div" class="four"></router-link>-->
<!--      <router-link to="/deviceArchiveReport/sitePersonnelFiles" tag="div" class="five"></router-link>-->
<!--    </div>-->
    <div class="content">
      <span class="lightLeftTop"></span>
      <span class="lightRightTop"></span>
      <span class="lightLeftBottom"></span>
      <span class="lightRightBottom"></span>
      <span class="lightLeft"></span>
      <span class="lightTop"></span>
      <span class="lightRight"></span>
      <span class="lightBottom"></span>

      <router-link to="/craftSystem" tag="div" class="menuCraftSysBox">
        <div class="title">工艺系统</div>
        <div class="circleBg"></div>
        <div class="circleRun"><div><div></div><div></div><div></div></div></div>
        <div class="icon"><div class="iconLight"></div></div>
        <div class="pointBox"><div></div><div></div></div>
        <div class="pointBox1"><div></div><div></div><img :src="require('@/assets/images/circleYellow.png')"><img src="require('@/assets/images/circleYellow.png')"><img :src="require('@/assets/images/circleYellow.png')"></div>
      </router-link>
      <router-link to="/safetyWarning" tag="div" class="menuSafeBox">
        <div class="title">安全预警</div>
        <div class="circleBg"></div>
        <div class="circleRun"><div><div></div><div></div><div></div></div></div>
        <div class="icon"><div class="iconLight"></div></div>
        <div class="pointBox"><div></div><div></div></div>
        <div class="pointBox1"><div></div><div></div><img :src="require('@/assets/images/circleRed.png')"><img :src="require('@/assets/images/circleRed.png')"><img :src="require('@/assets/images/circleRed.png')"></div>
      </router-link>
      <router-link to="/productReport" tag="div" class="menuProduceForm">
        <div class="title">生产报表</div>
        <div class="circleBg"></div>
        <div class="circleRun"><div><div></div><div></div><div></div></div></div>
        <div class="pointBox"><div></div><div></div></div>
        <div class="icon"><div class="iconLight"></div></div>
        <div class="pointBox1"><div></div><div></div><img :src="require('@/assets/images/circleGreen.png')"><img :src="require('@/assets/images/circleGreen.png')"><img :src="require('@/assets/images/circleGreen.png')"></div>
      </router-link>
      <router-link to="/videoMonitor" tag="div" class="menuVideoBox">
        <div class="title">视频监控</div>
        <div class="circleBg"></div>
        <div class="circleRun"><div><div></div><div></div><div></div></div></div>
        <div class="icon"></div>
        <div class="pointBox"><div></div><div></div></div>
        <div class="pointBox1"><div></div><div></div><img :src="require('@/assets/images/circlePurple.png')"><img :src="require('@/assets/images/circlePurple.png')"><img :src="require('@/assets/images/circlePurple.png')"></div>
      </router-link>
      <router-link to="/deviceArchiveReport/sitePersonnelFiles" tag="div" class="menuDevicefilesBox">
        <div class="title">设备档案</div>
        <div class="circleBg"></div>
        <div class="circleRun"><div><div></div><div></div><div></div></div></div>
        <div class="icon"></div>
        <div class="pointBox"><div></div><div></div></div>
        <div class="pointBox1"><div></div><div></div><img :src="require('@/assets/images/circleOrange.png')"><img :src="require('@/assets/images/circleOrange.png')"><img :src="require('@/assets/images/circleOrange.png')"></div>
      </router-link>
    </div>
  </div>
</template>

<script>

import CommonHeader from "@/components/CommonHeader";

export default {
  name: 'Index',
  components: { CommonHeader },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

//html {margin: 0px; padding: 0px; height: 100%; width:100%;overflow: hidden; }
//body {margin: 0px;  color:#fff;  font-size:14px;width:100%;height:100%;overflow:hidden; }
//* {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
//h1,h2,h3,h4,h5,h6{font-weight:normal; margin: 0px; padding: 0px;}
//div{margin: 0px;}

.index {
  //width: 100%;
  height: 100%;
  background: url("~@/assets/img/index_bg.png") no-repeat center;
  background-size: 100% 100%;
}

.content{
  position: relative; width:81.8vw; height: 44.3vw; margin-left: 9.1vw; background:url("~@/assets/images/lightBg.png") no-repeat center;background-size: contain;
}
.content > div{ position: absolute; overflow:hidden; }
.content > div > .title{position: absolute; height: 30px; color: #fff; font-size: 30px; text-align: center; width: 100%;}
.content > div > .circleBg{bottom: 0; position: absolute; width: 100%; padding-top: 50%;background:url("~@/assets/images/baseCircle.png") no-repeat center; background-size: contain;}
.content > div > .circleRun{width: 14.2vw; height: 14.2vw;position: absolute; -webkit-perspective: 160 !important;margin-left:8.2vw; bottom: 3.8vw; }
.content > div > .circleRun > div:first-child{ width: 14.2vw; height: 14.2vw;position: absolute; transform-style: preserve-3d; z-index:5;transform: rotateX(78deg); }
.content > div > .circleRun > div:first-child > div:first-child{width: 14.2vw; height: 14.2vw;position: absolute;  background: url("~@/assets/images/circle1.png") no-repeat center center  ; background-size: contain; animation: rotate 150s linear infinite;}
.content > div > .circleRun > div:first-child > div:nth-child(2){width: 14.2vw; height: 14.2vw;position: absolute; margin-top:1vw ; background: url("~@/assets/images/circle2.png") no-repeat  center center ; background-size: contain; animation: rotate2 100s linear infinite;}
.content > div > .circleRun > div:first-child > div:nth-child(3){width: 14.2vw; height: 14.2vw;position: absolute; margin-top:1vw ;  background: url("~@/assets/images/circle3.png") no-repeat  center center ; background-size: contain; animation: rotate 80s linear infinite;}
.content > div:hover{animation: upDown 3s ease-in infinite ;}
.content > div:hover > .circleRun > div:first-child > div:first-child{ animation: rotate 50s linear infinite;}
.content > div:hover > .circleRun > div:first-child > div:nth-child(2){ animation: rotate2 40s linear infinite;}
.content > div:hover > .circleRun > div:first-child > div:nth-child(3){animation: rotate 10s linear infinite;}


.content > div > .pointBox{position: absolute; width: 100%;}
.content > div > .pointBox > div:first-child{animation: hideShow 1s ease-in infinite ;bottom: 0;position: absolute; margin-left: 18%; width: 60%; padding-top: 35%;}
.content > div > .pointBox > div:last-child{animation: hideShow 2s ease-in infinite ;bottom: 0;position: absolute; margin-left: 18%; width: 60%; padding-top: 35%;}
.content > div > .pointBox1{position: absolute; width: 100%; height: 13vw;}
.content > div > .pointBox1 > div:first-child{animation: upDown 3s ease-in infinite ;position: absolute; margin-top:5vw; width: 100%; padding-top: 40%;background:url("~@/assets/images/threeCircle2All.png") no-repeat center; background-size: contain;}
.content > div > .pointBox1 > div:nth-child(2){animation: downUp 3s ease-in infinite ;position: absolute; margin-top:5vw; width: 80%; margin-left: 10%; padding-top: 40%;background:url("~@/assets/images/threeCircleAll.png") no-repeat center; background-size: contain;}
.content > div > .pointBox1 > img:nth-child(3){position: absolute;  width:8%; margin-left: 10%; padding-top: 33%; }
.content > div > .pointBox1 > img:nth-child(4){position: absolute;  width:8%; margin-left: 62%; padding-top:43%; }
.content > div > .pointBox1 > img:nth-child(5){position: absolute;  width:8%; margin-left: 80%; padding-top: 25%; }
.content > div:hover > .pointBox1 > img:nth-child(3){animation: upDown 2.5s ease-in infinite ;}
.content > div:hover > .pointBox1 > img:nth-child(4){animation: upDown 3s ease-out infinite; }
.content > div:hover > .pointBox1 > img:nth-child(5){animation: upDown 5s ease-out infinite;}

.content > div.menuCraftSysBox{width:31vw ; height: 22.5vw;margin-left: 25.2vw; margin-top: 5.2vw;}
.content > div.menuCraftSysBox > .title{ margin-top: 2vw;}
.content > div.menuCraftSysBox > .pointBox{height:18vw;margin-top:1vw;}
.content > div.menuCraftSysBox > .pointBox > div:first-child{ background:url("~@/assets/images/menuYellowPoints.png") no-repeat center; background-size: contain;}
.content > div.menuCraftSysBox > .pointBox > div:last-child{ background:url("~@/assets/images/menuYellowPoints1.png") no-repeat center; background-size: contain;}
.content > div.menuCraftSysBox > .pointBox1{ margin-top:0.1vw;}
.content > div.menuCraftSysBox > .pointBox1 > div:first-child{ margin-top:8vw;}
.content > div.menuCraftSysBox > .pointBox1 > div:nth-child(2){ margin-top:8vw;}
.content > div.menuCraftSysBox > .icon{ position: absolute; margin-top:0.6vw;width:31vw ; height: 22.5vw;background:url("~@/assets/images/menuCraftSysIcon.png") no-repeat center; background-size: contain; }
.content > div.menuCraftSysBox > .icon .iconLight{position: absolute;width:31vw ; height: 22.5vw;  background:url("~@/assets/images/menuCraftSysIconLight.png") no-repeat center; background-size: contain;}
.content > div.menuCraftSysBox:hover > .icon{
  background:url("~@/assets/images/menuCraftSysIcon.gif") no-repeat center center;
  background-size: contain;
}

.content > div.menuSafeBox { width:17.6vw ; height: 13vw; margin-left: 9.5vw; margin-top: 4vw; }
.content > div.menuSafeBox > .title{ font-size: 20px;}
.content > div.menuSafeBox > .circleRun{width: 11vw; height: 11vw;margin-left:3vw; bottom:0.5vw;}
.content > div.menuSafeBox > .circleRun > div:first-child{ width: 11vw; height: 11vw;  transform: rotateX(73deg);}
.content > div.menuSafeBox > .circleRun > div:first-child > div:first-child{width: 11vw; height: 11vw;}
.content > div.menuSafeBox > .circleRun > div:first-child > div:nth-child(2){width: 11vw; height: 11vw;}
.content > div.menuSafeBox > .circleRun > div:first-child > div:nth-child(3){width: 11vw; height: 11vw;}
.content > div.menuSafeBox > .pointBox{height: 9.5vw;}
.content > div.menuSafeBox > .pointBox > div:first-child{ background:url("~@/assets/images/menuSafeIconPoint.png") no-repeat center; background-size: contain; }
.content > div.menuSafeBox > .pointBox > div:last-child {
  background: url("~@/assets/images/menuSafeIconPoint1.png") no-repeat center;
  background-size: contain;
}
.content > div.menuSafeBox > .icon{ position: absolute; margin-top:2vw; width:17.6vw; height: 8vw;background:url("~@/assets/images/menuSafeIcon.png") no-repeat center; background-size: contain; }
.content > div.menuSafeBox > .icon .iconLight{position: absolute;width:17.6vw; height: 6.2vw; transform: scale(0.6); margin-top: -1.5vw; background:url("~@/assets/images/menuSafeIconGif.png") no-repeat center; background-size: contain;}
.content > div.menuSafeBox:hover > .icon .iconLight{ animation: safeLight 1s ease-in infinite ;}

.content > div.menuProduceForm{width:17.6vw ; height: 13vw;margin-left: 53vw; margin-top: 4vw;}
.content > div.menuProduceForm > .title{ font-size: 20px;}
.content > div.menuProduceForm > .circleRun{width: 11vw; height: 11vw;margin-left:3vw; bottom: 0.5vw;}
.content > div.menuProduceForm > .circleRun > div:first-child{ width: 11vw; height: 11vw; transform: rotateX(73deg); }
.content > div.menuProduceForm > .circleRun > div:first-child > div:first-child{width: 11vw; height: 11vw;}
.content > div.menuProduceForm > .circleRun > div:first-child > div:nth-child(2){width: 11vw; height: 11vw;}
.content > div.menuProduceForm > .circleRun > div:first-child > div:nth-child(3){width: 11vw; height: 11vw;}
.content > div.menuProduceForm > .pointBox{height: 10vw;}
.content > div.menuProduceForm > .pointBox > div:first-child{background:url("~@/assets/images/menuGreenIconPoint.png") no-repeat center; background-size: contain;}
.content > div.menuProduceForm > .pointBox > div:last-child{background:url("~@/assets/images/menuGreenIconPoint1.png") no-repeat center; background-size: contain;}
.content > div.menuProduceForm > .icon{ position: absolute; margin-top:1vw; width:17.6vw; height: 12vw;background:url("~@/assets/images/menuProduceFormIcon.png") no-repeat center center; background-size: contain; }
.content > div.menuProduceForm > .icon .iconLight{position: absolute;width:17.6vw; height: 12vw;  background:url("~@/assets/images/menuProduceFormIconLight.png") no-repeat center; background-size: contain;}
.content > div.menuProduceForm:hover > .icon{
  background:url("~@/assets/images/menuProduceFormIcon.gif") no-repeat center center; background-size: contain;}

.content > div.menuVideoBox{width:23vw ; height: 16vw;margin-left: 0vw; margin-top: 22vw;}
.content > div.menuVideoBox > .title{ font-size: 24px;}
.content > div.menuVideoBox > .circleRun{width: 13vw; height: 13vw;margin-left:5vw; bottom: 0.5vw;}
.content > div.menuVideoBox > .circleRun > div:first-child{ width: 12.6vw; height: 12.6vw; transform: rotateX(75deg); }
.content > div.menuVideoBox > .circleRun > div:first-child > div:first-child{width: 12.6vw; height: 12.6vw;}
.content > div.menuVideoBox > .circleRun > div:first-child > div:nth-child(2){width: 12.6vw; height: 12.6vw;}
.content > div.menuVideoBox > .circleRun > div:first-child > div:nth-child(3){width: 12.6vw; height: 12.6vw;}
.content > div.menuVideoBox > .pointBox{height: 10vw; margin-top:2vw;}
.content > div.menuVideoBox > .pointBox > div:first-child{background:url("~@/assets/images/menuVedioIconPoint.png") no-repeat center; background-size: contain;}
.content > div.menuVideoBox > .pointBox > div:last-child{background:url("~@/assets/images/menuVedioIconPoint1.png") no-repeat center; background-size: contain;}
.content > div.menuVideoBox > .pointBox1{ margin-top: 0.1vw;}
.content > div.menuVideoBox > .icon{ position: absolute; margin-top:0.5vw;margin-left:2vw; width:22vw; height: 10.5vw;background:url("~@/assets/images/menuVideoIcon.png") no-repeat center center; background-size: contain; }
.content > div.menuVideoBox:hover > .icon{background:url("~@/assets/images/menuVideoIcon.gif") no-repeat center center; background-size: contain;}

.content > div.menuDevicefilesBox{width:23vw ; height: 16vw;margin-left: 58vw; margin-top: 22vw;}
.content > div.menuDevicefilesBox > .title{ font-size: 24px;}
.content > div.menuDevicefilesBox > .circleRun{width: 13vw; height: 13vw;margin-left:5vw; bottom: 0.5vw;}
.content > div.menuDevicefilesBox > .circleRun > div:first-child{ width: 12.6vw; height: 12.6vw; transform: rotateX(75deg); }
.content > div.menuDevicefilesBox > .circleRun > div:first-child > div:first-child{width: 12.6vw; height: 12.6vw;}
.content > div.menuDevicefilesBox > .circleRun > div:first-child > div:nth-child(2){width: 12.6vw; height: 12.6vw;}
.content > div.menuDevicefilesBox > .circleRun > div:first-child > div:nth-child(3){width: 12.6vw; height: 12.6vw;}
.content > div.menuDevicefilesBox > .pointBox{height: 10vw; margin-top:2vw;}
.content > div.menuDevicefilesBox > .pointBox > div:first-child{background:url("~@/assets/images/menuDeviceIconPoint.png") no-repeat center; background-size: contain;}
.content > div.menuDevicefilesBox > .pointBox > div:last-child{background:url("~@/assets/images/menuDeviceIconPoint1.png") no-repeat center; background-size: contain;}
.content > div.menuDevicefilesBox > .pointBox1{ margin-top:0.1vw;}
.content > div.menuDevicefilesBox > .icon{ position: absolute; margin-top:1.5vw;margin-left:1vw; width:20vw; height: 9vw;background:url("~@/assets/images/menuDevicefilesIcon.png") no-repeat center center; background-size: contain; }
.content > div.menuDevicefilesBox:hover > .icon{background:url("~@/assets/images/menuDevicefilesIcon.gif") no-repeat center center; background-size: contain;}

.content > span{display: block; position: absolute;  width: 5vw; height: 1.5vw;}
.content > .lightLeftTop{margin-top: 16vw;margin-left: 28vw; width: 5.5vw; height: 4vw; animation: lightLeftTop 3s ease-in infinite; background:url("~@/assets/images/lightLeftTop.png") no-repeat center;background-size: contain;}
.content > .lightRightTop{margin-top: 14.8vw; margin-left: 49vw; width: 5.5vw; height: 4vw; animation: lightRightTop 3s ease-in infinite;background:url("~@/assets/images/lightRightTop.png") no-repeat center;background-size: contain;}
.content > .lightLeftBottom{margin-top:19.8vw; margin-left: 26vw; width: 6.5vw; height: 5vw; animation: lightLeftBottom 3s ease-in infinite;  background:url("~@/assets/images/lightLeftBottom.png") no-repeat center;background-size: contain;}
.content > .lightRightBottom{margin-top: 20.2vw;;margin-left: 48vw; width: 6.5vw; height: 5vw; animation: lightRightBottom 3s ease-in infinite; background:url("~@/assets/images/lightRightBottom.png") no-repeat center;background-size: contain;}
.content > .lightLeft{margin-top: 11vw;margin-left: 15vw; width: 4vw; height: 5.5vw; animation: lightLeft 3s ease-in infinite; background:url("~@/assets/images/lightLeft.png") no-repeat center;background-size: contain;}
.content > .lightTop{margin-top: 10.2vw;margin-left: 53vw; width: 5.5vw; height: 2.6vw; animation: lightTop 3s ease-in infinite; background:url("~@/assets/images/lightTop.png") no-repeat center;background-size: contain;}
.content > .lightRight{margin-top: 26.8vw;margin-left: 68.8vw; width:4vw; height: 6vw; animation: lightRight 3s ease-in infinite; background:url("~@/assets/images/lightRight.png") no-repeat center;background-size: contain;}
.content > .lightBottom{margin-top: 31.05vw;margin-left: 16vw; width: 7vw; height: 4vw; animation: lightBottom 3s ease-in infinite; background:url("~@/assets/images/lightBottom.png") no-repeat center;background-size: contain;}

@keyframes backgroundGif{
  0%{  transform:scale(1); }
  50%{ transform:scale(1.1);}
  100%{  transform:scale(1);}
}

@keyframes lightLeftTop{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  20% {transform: translate(-5vw,-2.1vw) scale(0.5);  opacity: 50%;}
  50% {transform: translate(-10vw,-4.2vw)  scale(0); opacity: 0%;}
  100% {transform: translate(-10vw,-4.2vw)  scale(0); opacity: 0%;}
}
@keyframes lightRightTop{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  20% {transform: translate(5vw,-1.9vw) scale(0.5);  opacity: 50%;}
  50% {transform: translate(10vw,-3.8vw)  scale(0); opacity: 0%;}
  100% {transform: translate(10vw,-3.8vw)  scale(0); opacity: 0%;}
}
@keyframes lightLeftBottom{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  20% {transform: translate(-5.6vw,2.6vw) scale(0.5);  opacity: 50%;}
  50% {transform: translate(-12vw,5.2vw)  scale(0); opacity: 0%;}
  100% {transform: translate(-12vw,5.2vw)  scale(0); opacity: 0%;}
}
@keyframes lightRightBottom{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  20% {transform: translate(5.6vw,2.5vw) scale(0.5);  opacity: 50%;}
  50% {transform: translate(12.6vw,5.0vw)  scale(0); opacity: 0%;}
  100% {transform: translate(12.6vw,5.0vw)  scale(0); opacity: 0%;}
}
@keyframes lightLeft{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  50% {transform: translate(0,0) scale(1);  opacity: 100%;}
  70% {transform: translate(-2.8vw,6vw) scale(0.5);  opacity: 50%;}
  100% {transform: translate(-5.6vw,12vw)  scale(0); opacity: 0%;}

}
@keyframes lightTop{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  50% {transform: translate(0,0) scale(1);  opacity: 100%;}
  70% {transform: translate(-6vw,0) scale(0.5);  opacity: 50%;}
  100% {transform: translate(-12vw,0)  scale(0); opacity: 0%;}
}
@keyframes lightRight{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  50% {transform: translate(0,0) scale(1);  opacity: 100%;}
  70% {transform: translate(-2.8vw,-6.3vw) scale(0.5);  opacity: 50%;}
  100% {transform: translate(-5.6vw,-12.6vw)  scale(0); opacity: 0%;}
}
@keyframes lightBottom{
  0% {transform: translate(0,0) scale(1);  opacity: 100%;}
  50% {transform: translate(0,0) scale(1);  opacity: 100%;}
  70% {transform: translate(13vw,0) scale(0.5);  opacity: 50%;}
  100% {transform: translate(26vw,0)  scale(0); opacity: 0%;}
}

@keyframes upDown{
  0%{ transform:translateY(0) ;}
  50%{transform: translateY(-0.4vw);}
  100%{ transform:translateY(0) ;}
}
@keyframes downUp{
  0%{ transform:translateY(0) ;}
  50%{transform: translateY(0.3vw);}
  100%{ transform:translateY(0) ;}
}
@keyframes hideShow{
  0%{  opacity: 100%;}
  50%{ opacity: 0%;}
  100%{  opacity: 100%;}
}

@keyframes safeLight{
  0%{ transform: scale(0.6); opacity: 100%;}
  100%{transform: scale(1); opacity: 0;}
}

@keyframes rotate{
  0%{transform: rotateZ(0deg) ;}
  100%{transform:rotateZ(360deg);}
}
@keyframes rotate2{
  0%{transform: rotateZ(0deg) ;}
  100%{transform:rotateZ(-360deg);}
}

</style>
