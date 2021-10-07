<template>
  <div class="item-wrap">
    <div class="item" v-for="(item, index) in tableData" :key="item.id">
      <div class="content">
        <div class="device-name">
          {{item.deviceParam}}
        </div>
        <div class="device-unit">
          {{item.deviceNumberInfo}} ({{item.deviceUnit}})
        </div>
      </div>
      <div class="edit" @click="editData(index, item)">
        <img :src="require('@/assets/img/edit.png')" alt="">
      </div>
      <div class="close">
        <i class="el-icon-close" @click="deleteData(index, item)"></i>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CommonItem',
    props: {
      tableData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    },
    methods: {
      editData(index, item) {
        this.$emit('editData', index, item)
      },
      deleteData(index, item) {
        this.$emit('deleteData', index, item)
      }
    }
  }
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  flex-wrap: wrap;
  .item {
    position: relative;
    width: 22.4%;
    height: 83px;
    padding: 20px;
    box-sizing: border-box;
    background: #091056;
    border: 1px solid;
    border-image: linear-gradient(0deg, #0F1597, #2537A2, #10169F) 10 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    margin-bottom: 20px;
    .content {
      .device-name {
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 10px;
      }
      .device-unit {
        color: #FFFFFF;
        opacity: 0.8;
      }
    }

    .edit {
      img {
        width: 42px;
        height: 42px;
        cursor: pointer;
      }
    }

    .close {
      position: absolute;
      right: 0;
      top: 0;
      display: none;
      cursor: pointer;
    }

    &:hover {
      .close {
        display: block;
      }
    }
  }
}
</style>
