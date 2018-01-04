<template>
  <div class="start">
    <div class="title">SUPERSTORE</div>
  </div>
</template>
<style lang="less">
  @import '../assets/less/var.less';
  @import '../assets/less/mixins.less';

  @font-face {
    font-family: 'Anders';
    src: url('../assets/fonts/Anders.ttf') format('truetype');
  }

  .start {
    background-color: @primary-color;
    .flex-container();
    &>.title {
      color: white;
      font-size: 60px;
      font-family: 'Anders';
    }
  }

</style>
