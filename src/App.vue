<template>
  <div id="app">
    <svg-icon-sprites></svg-icon-sprites>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import './assets/less/base.less';

</style>
