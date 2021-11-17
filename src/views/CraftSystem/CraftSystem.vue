<template>
  <div class="craft-system">
    <common-header></common-header>
    <div class="container">
      <column1></column1>
      <column2></column2>
      <column3></column3>
    </div>
    <div class="full-screen">
      <div class="full-screen-main"></div>
    </div>
  </div>
</template>

<script>

  import CommonHeader from "@/components/CommonHeader";
  import Column1 from "./Column1";
  import Column2 from "./Column2";
  import Column3 from "./Column3";

  export default {
    name: 'CraftSystem',
    components: { CommonHeader, Column1, Column2, Column3 },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .craft-system {
    //height: 100%;
    //min-height: 970px;
    background: #000 url("~@/assets/img/craftSystem_bg.jpg") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .container {
    display: flex;
    .column3 {
      width: 450px;
    }
  }

  .full-screen {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
    justify-content: center;
    align-items: center;
    z-index: 1000000;
    .full-screen-main {
      width: 800px;
      height: 600px;
    }
  }



</style>
