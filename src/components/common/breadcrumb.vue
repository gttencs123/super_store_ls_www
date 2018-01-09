<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ name: 'product' }">商品</el-breadcrumb-item>
    <el-breadcrumb-item>商品库</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="less">
  .breadcrumb {
    width: 100%;
    margin-bottom: 20px;
    .el-breadcrumb__inner {
      font-weight: 400;
    }
  }

</style>
