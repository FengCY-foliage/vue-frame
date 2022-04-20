<template>
  <div class="login">
    <div class="loginT"
         :style="{
          boxShadow: `var(dark)`,
        }">
      <h3 class="title">注册</h3>
      <el-form :model="form" >
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

        <el-form-item label="确认密码: " prop="password" :rules="[{
        required: true,
        message: '请确认密码',
        trigger: 'blur'},{
        min: 6,
        max:30,
         message: '密码需在6-30位之间',
      }]">
          <el-input type="password"
                    placeholder="请确认密码"
                    show-password
                    v-model="form.password2"
                    autocomplete="off"
                    onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话: " prop="pass">
          <el-input type="text"
                    v-model="form.phone"
                    placeholder="请输入电话号"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="E-mail: " prop="pass">
          <el-input type="text"
                    v-model="form.email"
                    placeholder="请输入邮箱"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 28%">
          <el-button type="primary" @click="account()">注册</el-button>
          <el-button @click="cancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
import Axios from 'axios'
import $store from '../../store/index.js'
import {createRouter as $router} from "vue-router";
export default {

  name: "accont",
  data(){
    return{
      form:{
        username:'',
        password:'',
        password2:'',
        phone:'',
        email:''

      },
      radio:'',
      timer: '',//订书器
    }
  },$store,methods:{
    //判断输入数据
    account(){
      if(this.form.username===''){
        ElMessage.error('用户名不能为空')
      }else if(this.form.username.length<4){
        ElMessage.error('用户名不得少于四位')
      }else if(this.form.password===''){
        ElMessage.error('密码不能为空')
      }else if(this.form.password.length<6 || this.form.password.length>30){
        ElMessage.error('密码在6-30位之间')
      }else if(this.form.password2===''){
        ElMessage.error('确认密码不能为空')
      }else if(this.form.password!==this.form.password2){
        ElMessage.error('两次密码输入不一致')
      }else{
        this.sendRequest()
      }
    },sendRequest(){  //查询用户是否存在请求
      // Axios.post(
      //     $store.state.requestUrl+"loginUser?username="+this.form.username)
      //     .then(response=>{//请求成功处理
      //       console.log(response);
      //       if(response.data.length===0){
              //发送注册请求
              this.accountRequest()
      //       }else{
      //         ElMessage.error('该用户名已被注册')
      //       }
      //     })
      //     .catch(function(error){//请求失败处理
      //       alert("错误");
      //       console.log(error);
      //     });

    },accountRequest(){   //注册请求
      ElMessage({
                      message: '注册成功',
                      type: 'success',
                    })
      const that=this;
              this.timer = setTimeout(function(){
                that.$router.push({path:'/'})
              }, 1000);
      // Axios.post($store.state.requestUrl+"account?username="+ this.form.username+"&password="+
      //     this.form.password+"&phone="+this.form.phone+"&email="+this.form.email).then(response=>{
      //       console.log(response)
      //       if(response.data===1){
      //         ElMessage({
      //           message: '注册成功',
      //           type: 'success',
      //         })
      //         //定时器回到登录页
      //         const that=this;
      //         this.timer = setTimeout(function(){
      //           that.$router.push({path:'/'})
      //         }, 1000);
      //       }else{
      //         ElMessage('注册失败')
      //       }
      //
      // }).catch(function(err){alert("错误");console.log(err)})
    },
    //返回按钮回到登录页
    cancel(){
      this.$router.push({path:'/'})
    }, beforeDestroy() {
      clearTimeout(this.timer);
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
.loginT{
  width: 300px;
  margin-top: 10%;
  margin-left: 40%;
  padding: 40px 20px;
  border: 1px solid var(--el-border-color);
  border-radius: 10px;
  background-color: rgba(240,240,240,0.6);
  box-shadow: 0px 0px 3px 3px white;

}
.radio{
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