<template>
  <div class="usebox flr">
    <div class="input-wrap mb30">
      <input type="text" class="input" placeholder="邮箱" v-model="formData.username"></input>
    </div>
    <div class="input-wrap mb30">
     <input type="password" class="input" placeholder="密码" v-model="formData.password"></input>
    </div>
    <div class="btn-wrap mb30">
      <el-button type="primary">登陆</el-button>
    </div>
    <div class="btn-wrap mb30">
      <el-button @click="$router.push('/register')">注册</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
       formData: {
         username: '',
         password: ''
       }
      }
    }
  }
</script>

<style scoped lang="scss">
 .usebox{
   width: 360px;
   height: 340px;
   background: #fff;
   border-radius: 6px;
   padding: 50px 35px 20px 35px;
   box-sizing: border-box;

   .input{
     width: 100%;
     padding: 13px 18px;
     color: #333;
     font-size: 14px;
     outline: none;
     border: 1px solid #f1f1f1;
     border-radius: 4px;
     box-sizing: border-box;
   }
   .btn-wrap{
     /deep/ .el-button{
       width: 100%;
       box-sizing: border-box;
     }
   }
 }
</style>
