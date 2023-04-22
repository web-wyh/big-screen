<template>
  <div class="loginAll">
    <div class="loginBox">
      <h1>家聊IM数据大屏</h1>
      <div class="formBox">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="account">
            <el-input type="text" v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../http/api'
import { mapActions } from 'vuex'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '861310020',
        password: '38d634705c23f64a22c5e6c17ec10719'
      },
      rules: {
        account: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions(['setToken']),
    submitForm() {
      this.$axios({
        method: 'post',
        url: api.map,
        params: this.ruleForm
      })
        .then((res) => {
          const { data } = res.data
          const token = data.access_Token
          sessionStorage.setItem('token', token)
          this.$store.dispatch('setToken', token) // 分发action并触发mutation
          this.$router.push('/bigScreen')
          console.log(this.$store.state.token)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.loginAll {
  width: 100vw;
  height: 100vh;
  background: url(../assets/img/loginbg.webp) no-repeat;
  background-size: cover;
  position: relative;
}
.loginBox {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  border-radius: 10px;
  background: rgba(1, 37, 70, 0.7);
  /* box-shadow: 0 0 20px #012546; */
}
.formBox {
  width: 500px;
  height: 300px;
  margin: 80px 0 0 40px;
}
.loginBox > h1 {
  font-size: 20px;
  color: #fff;
  position: absolute;
  left: 70px;
  top: 40px;
}
</style>
