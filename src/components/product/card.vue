<template>
  <el-card class="product-card-item">
    <img class="image">
    <div class="text">
      <span>好吃的汉堡</span>
      <div class="bottom clearfix">
        <div class="buttons" v-show="buttonShow">
          <i class="el-icon-edit"></i>
          <i class="el-icon-delete"></i>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="less">
  @import '../../assets/less/var.less';
  @import '../../assets/less/mixins.less';
  .product-card-item {
    float: left;
    font-size: @normal-size;
    color: @normal-text-color;
    position: relative;
    .el-card__body {
      padding: 0;
    }
    .image {
      width: 200px;
      height: 200px;
      background-color: grey;
      display: block;
      font-size: 0;
    }
    .text {
      padding: 8px;
    }
    .buttons {
      position: absolute;
      top: 8px;
      right: 8px;
      &>i {
        color: white;
        font-size: 18px;
        cursor: pointer;
        margin: 2px;
      }
    }
  }

</style>

<script>
  export default {
    data () {
      return {
        buttonShow: false
      }
    },
    mounted () {
      this.$el.addEventListener('mouseover', event => {
        this.buttonShow = true
      })
      this.$el.addEventListener('mouseleave', event => {
        this.buttonShow = false
      })
    }
  }
</script>
