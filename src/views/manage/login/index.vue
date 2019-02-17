<template>
  <div class="login">
    <div class="content">
      <div class="title">后台管理 用户登录</div>
      <el-form class="form" ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <gov-button type="primary" @click="handleLogin">登录</gov-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: 'root',
        password: '!@#$%^&*()qwertyuiop',
      },
    }
  },
  methods: {
    handleLogin () {
      this.axios.post('/login', this.form).then(({ data }) => {
        if (data.code === 0) {
          this.$router.push({ name: 'manage' })
          this.$message.success('登录成功')
        } else {
          this.$message.error(`登录失败！${data.msg}`)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 500px;
      height: 300px;
      border: 1px solid #EEEEEE;
      text-align: center;
      .title {
        text-align: center;
        line-height: 50px;
        background: #EEEEEE;
      }
      .form {
        margin: 30px 20px 0 20px;
      }
    }
  }
</style>
