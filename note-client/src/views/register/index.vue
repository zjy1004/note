 <template>
  <div class="register">
    <h2 class="title">
      新用户注册
    </h2>
    <div class="item">
      <input type="text" placeholder="用户名" v-model="formData.username">
    </div>
    <div class="item">
      <input type="text" placeholder="邮箱" v-model="formData.email">
    </div>
    <div class="item">
      <input type="password" placeholder="密码" v-model="formData.password" @keyup.enter.native="handelRegister">
    </div>
    <div class="item">
      <el-button type="primary" class="_el-btn" @click="handelRegister">
        注册
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          username: "",
          password: "",
          email: ""
        }
      }
    },
    methods: {
      handelRegister () {
        this.$axios.post('/user', this.formData).then(res => {
          if(res.code == 200) {
            this.$message.success(res.msg);
            setTimeout(() => {this.$router.push('/index')},500);
          }else {
            this.$message.error(res.msg)
          }
        })
        // let params = {
        //   username: this.username,
        //   password: this.password,
        //   email: this.email
        // }
      }
    }
  }
</script>

<style scoped lang="scss">
.register{
  color: #333;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 714px;
  margin: 100px auto 0;
  border-radius: 6px;
  background: #fff;

  h2 {
    text-align: center;
    color: #333;
    font-weight: 400;
  }
.item {
  box-sizing: border-box;
  width: 390px;
  margin: 30px auto 0;
  ._el-btn {
    width: 100%;
  }
  &>input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;
  }
}
}
</style>
