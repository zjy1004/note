<template>
  <div class="header">
    <div class="header-wrap w1170 clearfix">
      <div class="header-title fll">
        <router-link to="/">
          云笔记
        </router-link>

      </div>
      <div class="header-btn flr">
        <el-button @click="$router.push('/writenote')">写笔记</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
.header {
  background-color: #409eff;
  height: 50px;
  .header-wrap{
    .header-title a {
      line-height: 1.5;
      color: #fff;
      font-weight: 400;
      font-size: 30px;
      text-decoration: none;
    }
    .header-btn{
      margin-top: 5px;
    }
  }
}
</style>
