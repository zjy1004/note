<template>
  <div class="usebox flr">
    <div class="login-box" v-if="!userInfo.username">
      <div class="input-wrap mb30">
        <input type="text" class="input" placeholder="邮箱" v-model="formData.email"></input>
      </div>
      <div class="input-wrap mb30">
        <input type="password" class="input" placeholder="密码" v-model="formData.password" @keyup.enter="handleLogin"></input>
      </div>
      <div class="btn-wrap mb30">
        <el-button type="primary" @click="handleLogin">登陆</el-button>
      </div>
      <div class="btn-wrap mb30">
        <el-button @click="$router.push('/register')">注册</el-button>
      </div>
    </div>
   <div class="user-msg-box" v-else>
     <div class="img-wrap">
       <img :src="userInfo.avatar">
     </div>
     <div class="username">
       用户:{{userInfo.username}}
     </div>
     <div class="user-email">
       email:{{userInfo.email}}
     </div>
     <div>
       <el-button type="warning" style="width: 100%;margin-top: 10px;" @click="handleLogout">
         退出登陆
       </el-button>
     </div>
   </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
       formData: {
         email: '',
         password: ''
       }
      }
    },
    methods: {
      handleLogin() {
        this.$axios.post('/login', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$store.commit('CHANGE_userInfo', res.userData)
          }
        });
      },
      handleLogout() {
        this.$axios.get('/logout').then(res => {
          let userInfo = {
            avatar: '',
            email: '',
            username: ''
          };
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.$store.commit('CHANGE_userInfo', userInfo );//清空Vuex中保留的用户信息
            this.$router.push('/index')
          } else { // 未登录状态
            this.$store.commit('CHANGE_userInfo', userInfo );//清空Vuex中保留的用户信息
            this.$message.error('登陆状态已过期')
          }
        })
      }
    },
    computed: {
      ...mapState(['userInfo'])
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
   .user-msg-box {
     padding-top: 30px;
     .img-wrap {
       text-align: center;
       img {
         width: 100px;
         height: 100px;
       }
     }
     .username,.user-email {
       text-align: center;
       margin-top: 20px;
       font-size: 16px;
       color: #333;
       font-weight: 400;
       line-height: 36px;
     }
   }

 }
</style>
