<template>
  <el-container class="dashboard">
    <el-aside width="201px">
      <common-menu></common-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style lang="less">
  @import '../assets/less/var.less';
  @import '../assets/less/mixins.less';
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #f4f4f4;
    color: #333;
    &>div {
      .flex-container()
    }
  }

</style>

<script>
  import commonMenu from '@/components/common/menu'
  export default {
    components: {
      commonMenu
    }
  }
</script>
