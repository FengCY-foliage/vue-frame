<template>
  <div class="login">
    <div class="loginT"
         :style="{
          boxShadow: `var(dark)`,
        }">
      <h3 class="title">登录</h3>
      <el-form :model="form" rules="rules">
        <el-form-item label="账号: " prop="username" :rules="[{
        required: true,
        message: '请输入账号',
        trigger: 'blur'},{
        min: 4,
         message: '账号不得少于4位',

      }]">
          <el-input type="text"
                    v-model="form.username"
                    placeholder="请输入账号"
                    autocomplete="off"
                    onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码: " prop="password" :rules="[{
        required: true,
        message: '请输入密码',
        trigger: 'blur'},{
        min: 6,
        max:30,
         message: '密码需在6-30位之间',
      }]">
          <el-input type="password"
                    placeholder="请输入密码"
                    show-password
                    v-model="form.password"
                    autocomplete="off"
                    onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          ></el-input>
        </el-form-item>

        <el-form-item style="margin-left: 17%">
          <el-radio-group v-model="radio">
            <el-radio label="1" border class="radio" checked="true">用户</el-radio>
            <el-radio label="2" border class="radio">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="margin-left: 7%">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button type="warning"  @click="enterMenu()">直接进入菜单</el-button>
          <el-button @click="accont()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import {reactive} from "vue";
import {ElMessage} from "element-plus";
import Axios from 'axios'
import $store from '../../store/index.js'

export default {
  name: "login",
  data() {

    return {
      form: {
        username: '',
        password: ''

      },
      radio: '1',
      requestUrlCentre: '',    //url中间部分
    }
  }, $store, methods: {
    //判断输入数据
    login() {
      if (this.form.username === '') {
        ElMessage.error('用户名不能为空')
      } else if (this.form.username.length < 4) {
        ElMessage.error('用户名不得少于四位')
      } else if (this.form.password === '') {
        ElMessage.error('密码不能为空')
      } else if (this.form.password.length < 6 || this.form.password.length > 30) {
        ElMessage.error('密码在6-30位之间')
      } else if (this.radio === '') {
        ElMessage.error('请选择角色')
      } else {
        //判断用户类型
        if (this.radio === '1') {
          this.requestUrlCentre = "loginUser?username="
        } else {
          this.requestUrlCentre = "loginAdmin?username="
        }
        this.sendRequest();
      }
    },enterMenu(){
      this.$router.push({path: '/menu/home'})
    },
    //向后台发送请求
    sendRequest() {
      ElMessage({
                      message: '登陆成功',
                      type: 'success',
                    })
      //登录请求
      // Axios.post(
      //     $store.state.requestUrl + this.requestUrlCentre + this.form.username)
      //     .then(response => {//请求成功处理
      //       // console.log(response);
      //       //判断密码是否正确
      //       let password2 = response.data.password;
      //       if (password2 == this.form.password) {
      //         this.$cookies.set("id", response.data.id, "30MIN");
      //         this.$cookies.set("username", response.data.username, "30MIN");
      //         this.$cookies.set("password", response.data.password, "30MIN");
      //         this.$cookies.set("phone", response.data.phone, "30MIN");
      //         this.$cookies.set("email", response.data.email, "30MIN");
      //         this.$cookies.set("type", response.data.type, "30MIN");
      //         ElMessage({
      //           message: '登陆成功',
      //           type: 'success',
      //         })
      //         const that = this;
      //         this.timer = setTimeout(function () {
      //           that.$router.push({path: '/menu/home'})
      //         }, 1000);
      //       } else {
      //         ElMessage.error('请检查用户名和密码')
      //       }
      //     })
      //     .catch(function (error) {//请求失败处理
      //       alert("错误");
      //       console.log(error);
      //     });

    },
    //跳转注册
    accont() {
      this.$router.push({path: '/account'})
    }
  }

}
</script>

<style scoped>

.login {
  background: url('../../assets/login5.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: -10px;
  margin-left: -10px;
  position: fixed;

}

.loginT {
  width: 300px;
  margin-top: 15%;
  margin-left: 40%;
  padding: 40px 20px;
  border: 1px solid var(--el-border-color);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, 0.6);
  box-shadow: 0px 0px 3px 3px white;

}

.radio {
  color: black;
}

h3.title {

  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  margin-left: 40%;
}
</style>