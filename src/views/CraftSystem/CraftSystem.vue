<template>
  <div class="craft-system">
    <common-header></common-header>
    <div class="container">
      <column1></column1>
    </div>
  </div>
</template>

<script>

  import CommonHeader from "@/components/CommonHeader";
  import Column1 from "./Column1";

  export default {
    name: 'CraftSystem',
    components: { CommonHeader, Column1 },
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
    background: url("~@/assets/img/craftSystem_bg.png") no-repeat;
  }

  .container {
    display: flex;
    .column2 {
      flex: 1;
    }

    .column3 {
      width: 450px;
    }
  }

  .radio-group {
    text-align: center;
  }

  /deep/ .el-radio-button__inner {
    background-color: #091760;
    border: 1px solid #0B8FF5;
    color: #fff;
    border-right: none;
  }

  /deep/ .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #0B8FF5;
  }

  /deep/ .el-radio-button:last-child .el-radio-button__inner {
    border-right: 1px solid #0B8FF5;
  }

</style>
