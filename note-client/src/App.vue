<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background-color: #f1f1f1;
  }
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .mb30{
    margin-bottom: 30px;
  }
  .w980{
    width: 980px;
  }
  .w1170{
    width: 1170px;
    margin: 0 auto;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  .img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
