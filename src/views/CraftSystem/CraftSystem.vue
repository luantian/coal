<template>
  <div class="craft-system">
    <common-header></common-header>
    <div class="container">
      <column1></column1>
      <column2></column2>
      <column3></column3>
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
    background: #000 url("~@/assets/img/craftSystem_bg.png") no-repeat;
  }

  .container {
    display: flex;


    .column3 {
      width: 450px;
    }
  }



</style>
