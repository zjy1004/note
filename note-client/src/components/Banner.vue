<template>
  <div class="banner fll">
    <div class="banner-title">十三亿人都在用到云笔记</div>
  </div>
</template>

<script>
  export default {
      name: "Banner"
  }
</script>

<style scoped lang="scss">
.banner{
  position: relative;
  width: 750px;
  height: 340px;
  background: url('/static/imgs/banner.jpg') no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  border-radius: 6px;
  overflow: hidden;

  .banner-title{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 50px;
    padding-left: 30px;
    color: rgba(255,255,255,.8);
    background: rgba(0,0,0,.5);
  }
}
</style>
