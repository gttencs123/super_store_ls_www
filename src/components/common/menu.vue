<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
    <el-menu-item>
      <svg class="icon icon-checkout">
        <use xlink:href="#icon-checkout"></use>
      </svg>
      <span slot="title">收银</span>
    </el-menu-item>
    <el-submenu>
      <template slot="title">
        <svg class="icon icon-product">
          <use xlink:href="#icon-product"></use>
        </svg>
        <span>商品</span>
      </template>
      <el-menu-item index="product">商品库</el-menu-item>
      <el-menu-item>分类管理</el-menu-item>
    </el-submenu>
    <el-submenu>
      <template slot="title">
        <svg class="icon icon-member">
          <use xlink:href="#icon-member"></use>
        </svg>
        <span slot="title">会员</span>
      </template>
      <el-menu-item>会员册</el-menu-item>
      <el-menu-item>会员等级</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<style lang="less">
  @import '../../assets/less/var.less';
  @import '../../assets/less/mixins.less';
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }

  .el-submenu,
  .el-menu-item {
    .icon {
      width: 24px;
      height: 24px;
      color: @normal-text-color;
    }
    .icon-product {
      width: 20px;
      margin-right: 4px;
      margin-left: 1px;
    }
    .icon-checkout {
      height: 22px;
      margin-top: -3px;
    }
  }

</style>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleOpen () {},
      handleClose () {},
      handleSelect (name) {
        if (!name) return
        this.$router.push({
          name: name
        })
      }
    }
  }
</script>
